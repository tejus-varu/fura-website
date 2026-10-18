// Cloudflare Pages Function: /api/blogs/[slug]
// GET, PUT (edit), DELETE blog post

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
  DEPLOY_HOOK_URL?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { params, env } = context;
  const slug = params.slug as string;

  if (!env.DB) {
    return new Response(JSON.stringify({ error: "D1 database not bound" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const row = await env.DB.prepare("SELECT * FROM blogs WHERE slug = ?").bind(slug).first();
    if (!row) {
      return new Response(JSON.stringify({ error: "Blog not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    let content = [];
    try {
      content = JSON.parse(row.content_json);
    } catch {
      content = [];
    }

    return new Response(
      JSON.stringify({
        ...row,
        content,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Database error", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestPut: PagesFunction<Env> = async (context) => {
  const { request, params, env } = context;
  const slug = params.slug as string;

  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: "D1 database not bound" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload: any = {};
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
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
    status,
  } = payload;

  const contentJson = JSON.stringify(Array.isArray(content) ? content : []);

  try {
    await env.DB.prepare(
      `UPDATE blogs SET
        title = COALESCE(?, title),
        subtitle = COALESCE(?, subtitle),
        category = COALESCE(?, category),
        author_name = COALESCE(?, author_name),
        author_role = COALESCE(?, author_role),
        publication_date = COALESCE(?, publication_date),
        read_time = COALESCE(?, read_time),
        cover_image = COALESCE(?, cover_image),
        cover_image_caption = COALESCE(?, cover_image_caption),
        excerpt = COALESCE(?, excerpt),
        content_json = COALESCE(?, content_json),
        status = COALESCE(?, status),
        updated_at = datetime('now')
      WHERE slug = ?`
    )
      .bind(
        title?.trim() || null,
        subtitle?.trim() || null,
        category?.trim() || null,
        author_name?.trim() || null,
        author_role?.trim() || null,
        publication_date || null,
        read_time || null,
        cover_image?.trim() || null,
        cover_image_caption?.trim() || null,
        excerpt?.trim() || null,
        contentJson,
        status || null,
        slug
      )
      .run();

    return new Response(
      JSON.stringify({ success: true, message: "Blog updated successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to update blog in D1", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const { request, params, env } = context;
  const slug = params.slug as string;

  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.DB) {
    return new Response(JSON.stringify({ error: "D1 database not bound" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await env.DB.prepare("DELETE FROM blogs WHERE slug = ?").bind(slug).run();
    return new Response(
      JSON.stringify({ success: true, message: "Blog post deleted successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to delete blog", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
