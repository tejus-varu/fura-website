// Cloudflare Pages Function: /api/admin/auth
// Validates whether the supplied credentials are correct

import { validateAdminAuth } from "../_auth";

export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;
  const auth = validateAdminAuth(request, env);

  if (!auth.authorized) {
    return new Response(
      JSON.stringify({
        authenticated: false,
        error: auth.error,
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({
      authenticated: true,
      message: "Authentication successful. Access granted to FURAA CMS.",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
