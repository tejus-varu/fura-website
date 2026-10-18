// Cloudflare Pages Function: /api/blogs
// Public GET: returns published blogs from D1
// Admin POST: creates new blog post (requires auth)

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
  DEPLOY_HOOK_URL?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.DB) {
    return new Response(
      JSON.stringify({
        source: "static_fallback",
        blogs: [],
        message: "D1 database binding 'DB' is not configured. Serving static pre-rendered articles.",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60",
        },
      }
    );
  }

  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const includeDrafts = url.searchParams.get("includeDrafts") === "true";

    // Only allow viewing drafts if authorized
    let allowDrafts = false;
    if (includeDrafts) {
      const auth = validateAdminAuth(request, env);
      allowDrafts = auth.authorized;
    }

    let query = "SELECT * FROM blogs";
    const params: any[] = [];
    const conditions: string[] = [];

    if (!allowDrafts) {
      conditions.push("status = 'published'");
    }

    if (category && category !== "All") {
      conditions.push("category = ?");
      params.push(category);
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY created_at DESC";

    const { results } = await env.DB.prepare(query).bind(...params).all();

    // Parse content_json for each post
    const blogs = (results || []).map((row: any) => {
      let content = [];
      try {
        content = JSON.parse(row.content_json);
      } catch {
        content = [];
      }
      return {
        ...row,
        content,
      };
    });

    return new Response(
      JSON.stringify({
        source: "d1_database",
        count: blogs.length,
        blogs,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": allowDrafts ? "no-store" : "public, max-age=60",
        },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: "Failed to query blogs from D1",
        details: err?.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // 1. Validate Admin Authorization
  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Check Database Binding
  if (!env.DB) {
    return new Response(
      JSON.stringify({
        error: "Cloudflare D1 database is not bound. Bind D1 database as 'DB' in Pages settings.",
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 3. Parse and Validate Payload
  let payload: any = {};
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const {
    title,
    subtitle,
    category,
    author_name,
    author_role,
    publication_date,
    read_time,
    cover_image,
    cover_image_caption,
    excerpt,
    content,
    status = "draft",
  } = payload;

  if (!title || !category || !author_name || !excerpt || !cover_image) {
    return new Response(
      JSON.stringify({
        error: "Missing required fields: title, category, author_name, excerpt, cover_image.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Generate safe slug from title
  const slug = (payload.slug || title)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const id = "blog_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
  const contentJson = JSON.stringify(Array.isArray(content) ? content : []);

  try {
    await env.DB.prepare(
      `INSERT INTO blogs (
        id, slug, title, subtitle, category, author_name, author_role,
        publication_date, read_time, cover_image, cover_image_caption,
        excerpt, content_json, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
    )
      .bind(
        id,
        slug,
        title.trim(),
        subtitle?.trim() || null,
        category.trim(),
        author_name.trim(),
        author_role?.trim() || "FURAA Educator",
        publication_date || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        read_time || "5 min read",
        cover_image.trim(),
        cover_image_caption?.trim() || null,
        excerpt.trim(),
        contentJson,
        status === "published" ? "published" : "draft"
      )
      .run();

    // Trigger Deploy Hook if publishing and hook is configured
    if (status === "published" && env.DEPLOY_HOOK_URL) {
      try {
        fetch(env.DEPLOY_HOOK_URL, { method: "POST" }).catch(() => {});
      } catch {}
    }

    return new Response(
      JSON.stringify({
        success: true,
        id,
        slug,
        status,
        message: status === "published" ? "Blog post published successfully." : "Blog draft saved successfully.",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: "Failed to insert blog into D1 database",
        details: err?.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
