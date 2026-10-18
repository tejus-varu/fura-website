// Cloudflare Pages Functions Authentication Helper
// Validates Bearer API Key or Cloudflare Access headers

export interface AuthResult {
  authorized: boolean;
  error?: string;
}

export function validateAdminAuth(request: Request, env: any): AuthResult {
  const configuredKey = env?.ADMIN_API_KEY;

  // If no admin key is configured in the environment, reject all write operations securely
  if (!configuredKey || typeof configuredKey !== "string" || configuredKey.length < 8) {
    return {
      authorized: false,
      error: "Administrative authentication is not configured on this Cloudflare environment. Set ADMIN_API_KEY in Pages settings.",
    };
  }

  // Check Authorization: Bearer <key>
  const authHeader = request.headers.get("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7).trim();
    if (token === configuredKey) {
      return { authorized: true };
    }
  }

  // Check X-Admin-Key header
  const customHeader = request.headers.get("X-Admin-Key");
  if (customHeader && customHeader.trim() === configuredKey) {
    return { authorized: true };
  }

  return {
    authorized: false,
    error: "Unauthorized: Invalid or missing administrative credentials.",
  };
}
