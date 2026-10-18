// Cloudflare Pages Function: /api/upload
// Uploads media to Cloudflare R2 bucket with authentication, size limit, and MIME validation

import { validateAdminAuth } from "./_auth";

interface Env {
  BUCKET?: any;
  ADMIN_API_KEY?: string;
  R2_PUBLIC_URL?: string;
}

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
]);

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // 1. Authorize admin
  const auth = validateAdminAuth(request, env);
  if (!auth.authorized) {
    return new Response(JSON.stringify({ error: auth.error }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 2. Check R2 Bucket Binding
  if (!env.BUCKET) {
    return new Response(
      JSON.stringify({
        error: "Cloudflare R2 bucket is not configured. Bind R2 bucket as 'BUCKET' in Cloudflare Pages settings.",
      }),
      {
        status: 503,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 3. Process multipart form
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid form data" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const file = formData.get("file");
  if (!file || typeof file === "string" || !(file instanceof File)) {
    return new Response(JSON.stringify({ error: "No file provided in form field 'file'" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // 4. Validate MIME type
  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return new Response(
      JSON.stringify({
        error: `Invalid file type '${file.type}'. Allowed formats are JPEG, PNG, and WebP.`,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 5. Validate File Size
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return new Response(
      JSON.stringify({
        error: `File size exceeds the 5MB limit (${(file.size / (1024 * 1024)).toFixed(2)} MB).`,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 6. Generate secure key
  const extension = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const randomSuffix = Math.random().toString(36).substring(2, 10);
  const key = `uploads/${Date.now()}-${randomSuffix}.${extension}`;

  try {
    const arrayBuffer = await file.arrayBuffer();

    await env.BUCKET.put(key, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
        cacheControl: "public, max-age=31536000, immutable",
      },
    });

    const publicBase = env.R2_PUBLIC_URL?.replace(/\/$/, "") || "/api/media";
    const publicUrl = `${publicBase}/${key}`;

    return new Response(
      JSON.stringify({
        success: true,
        key,
        url: publicUrl,
        size: file.size,
        type: file.type,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Failed to upload file to R2 bucket", details: err?.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
