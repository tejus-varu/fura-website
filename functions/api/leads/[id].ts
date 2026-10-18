// Cloudflare Pages Function: /api/leads/[id]
// Admin-only: Update lead status or notes, delete lead

import { validateAdminAuth } from "../_auth";

interface Env {
  DB?: any;
  ADMIN_API_KEY?: string;
}

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

  const { processing_status, notes } = payload;

  try {
    await env.DB.prepare(
      `UPDATE leads SET
        processing_status = COALESCE(?, processing_status),
        notes = COALESCE(?, notes),
        updated_at = datetime('now')
      WHERE id = ?`
    )
      .bind(processing_status || null, notes || null, id)
      .run();

    return new Response(
      JSON.stringify({ success: true, message: "Lead status updated." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to update lead", details: err?.message }),
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
    await env.DB.prepare("DELETE FROM leads WHERE id = ?").bind(id).run();
    return new Response(
      JSON.stringify({ success: true, message: "Lead record deleted." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to delete lead", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
