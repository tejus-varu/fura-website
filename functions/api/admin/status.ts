// Cloudflare Pages Function: /api/admin/status
// Verifies whether D1 database and R2 bucket bindings are active

interface Env {
  DB?: any;
  BUCKET?: any;
  ADMIN_API_KEY?: string;
  DEPLOY_HOOK_URL?: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { env } = context;

  const hasD1 = Boolean(env.DB && typeof env.DB.prepare === "function");
  const hasR2 = Boolean(env.BUCKET && typeof env.BUCKET.put === "function");
  const hasAdminKey = Boolean(env.ADMIN_API_KEY && env.ADMIN_API_KEY.length > 8);
  const hasDeployHook = Boolean(env.DEPLOY_HOOK_URL);

  let d1Healthy = false;
  let d1Error: string | null = null;

  if (hasD1) {
    try {
      await env.DB.prepare("SELECT 1 as test").first();
      d1Healthy = true;
    } catch (err: any) {
      d1Error = err?.message || "Failed to query D1 database";
    }
  }

  const isFullyConfigured = hasD1 && d1Healthy && hasR2 && hasAdminKey;

  return new Response(
    JSON.stringify({
      status: isFullyConfigured ? "ready" : "setup_required",
      timestamp: new Date().toISOString(),
      services: {
        database_d1: {
          bound: hasD1,
          healthy: d1Healthy,
          error: d1Error,
          requiredBinding: "DB",
        },
        storage_r2: {
          bound: hasR2,
          requiredBinding: "BUCKET",
        },
        admin_auth: {
          configured: hasAdminKey,
          requiredEnv: "ADMIN_API_KEY",
        },
        deploy_hook: {
          configured: hasDeployHook,
          optionalEnv: "DEPLOY_HOOK_URL",
        },
      },
      message: isFullyConfigured
        ? "Cloudflare D1, R2, and Administrative authentication are fully provisioned."
        : "External Cloudflare resources (D1 binding 'DB', R2 binding 'BUCKET', or 'ADMIN_API_KEY') are pending configuration in the Cloudflare dashboard.",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    }
  );
};
