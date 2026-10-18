// Cloudflare Pages Function: /api/gallery/[id]
// GET, PUT (edit), DELETE gallery event

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { params, env } = context;
  const id = params.id as string;

  if (!env.DB) {
    return new Response(JSON.stringify({ error: "D1 database not bound" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const event = await env.DB.prepare("SELECT * FROM gallery_events WHERE id = ?").bind(id).first();
    if (!event) {
      return new Response(JSON.stringify({ error: "Gallery event not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { results: photos } = await env.DB.prepare(
      "SELECT * FROM gallery_photos WHERE event_id = ? ORDER BY sort_order ASC, created_at ASC"
    )
      .bind(id)
      .all();

    return new Response(
      JSON.stringify({
        ...event,
        photos: photos || [],
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
  const id = params.id as string;

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

  const { title, category, location, event_date, description, cover_image, status } = payload;

  try {
    await env.DB.prepare(
      `UPDATE gallery_events SET
        title = COALESCE(?, title),
        category = COALESCE(?, category),
        location = COALESCE(?, location),
        event_date = COALESCE(?, event_date),
        description = COALESCE(?, description),
        cover_image = COALESCE(?, cover_image),
        status = COALESCE(?, status),
        updated_at = datetime('now')
      WHERE id = ?`
    )
      .bind(
        title?.trim() || null,
        category?.trim() || null,
        location?.trim() || null,
        event_date || null,
        description?.trim() || null,
        cover_image?.trim() || null,
        status || null,
        id
      )
      .run();

    return new Response(
      JSON.stringify({ success: true, message: "Gallery event updated successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to update gallery event", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const { request, params, env } = context;
  const id = params.id as string;

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
    // Delete event (photos cascade delete via foreign key)
    await env.DB.prepare("DELETE FROM gallery_photos WHERE event_id = ?").bind(id).run();
    await env.DB.prepare("DELETE FROM gallery_events WHERE id = ?").bind(id).run();

    return new Response(
      JSON.stringify({ success: true, message: "Gallery event and photos deleted successfully." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to delete gallery event", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
