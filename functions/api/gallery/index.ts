// Cloudflare Pages Function: /api/gallery
// Public GET: returns gallery events from D1
// Admin POST: creates new gallery event & photos

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.DB) {
    return new Response(
      JSON.stringify({
        source: "static_fallback",
        events: [],
        message: "D1 database is not bound. Serving static gallery assets.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const url = new URL(request.url);
    const category = url.searchParams.get("category");
    const includeDrafts = url.searchParams.get("includeDrafts") === "true";

    let allowDrafts = false;
    if (includeDrafts) {
      const auth = validateAdminAuth(request, env);
      allowDrafts = auth.authorized;
    }

    let eventQuery = "SELECT * FROM gallery_events";
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
      eventQuery += " WHERE " + conditions.join(" AND ");
    }

    eventQuery += " ORDER BY created_at DESC";

    const { results: events } = await env.DB.prepare(eventQuery).bind(...params).all();

    // Fetch photos for these events
    const populatedEvents = await Promise.all(
      (events || []).map(async (event: any) => {
        const { results: photos } = await env.DB.prepare(
          "SELECT * FROM gallery_photos WHERE event_id = ? ORDER BY sort_order ASC, created_at ASC"
        )
          .bind(event.id)
          .all();

        return {
          ...event,
          photos: photos || [],
        };
      })
    );

    return new Response(
      JSON.stringify({
        source: "d1_database",
        count: populatedEvents.length,
        events: populatedEvents,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to query gallery from D1", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!env.DB) {
    return new Response(
      JSON.stringify({ error: "Cloudflare D1 database binding 'DB' is missing." }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
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
    category,
    location,
    event_date,
    description,
    cover_image,
    photos = [],
    status = "published",
  } = payload;

  if (!title || !category || !description || !cover_image) {
    return new Response(
      JSON.stringify({
        error: "Missing required fields: title, category, description, cover_image.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const eventId = "evt_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);

  try {
    // Insert event
    await env.DB.prepare(
      `INSERT INTO gallery_events (
        id, title, category, location, event_date, description, cover_image, status, created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`
    )
      .bind(
        eventId,
        title.trim(),
        category.trim(),
        location?.trim() || null,
        event_date || null,
        description.trim(),
        cover_image.trim(),
        status === "published" ? "published" : "draft"
      )
      .run();

    // Insert photos if any provided
    if (Array.isArray(photos) && photos.length > 0) {
      for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        const photoId = "pht_" + Date.now() + "_" + i + "_" + Math.random().toString(36).substring(2, 6);
        await env.DB.prepare(
          `INSERT INTO gallery_photos (
            id, event_id, src, alt, caption, badge, category, location, sort_order, created_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`
        )
          .bind(
            photoId,
            eventId,
            photo.src,
            photo.alt || title,
            photo.caption || title,
            photo.badge || category,
            category,
            location || null,
            i
          )
          .run();
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        eventId,
        message: "Gallery event created successfully.",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to create gallery event", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
