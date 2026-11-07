// Cloudflare Pages Middleware
// Handles permanent 301 redirects from www.myfuraa.com (and http) to https://myfuraa.com
// Preserves exact pathname and query parameters.

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  // Redirect www to root apex domain
  if (url.hostname === "www.myfuraa.com") {
    url.hostname = "myfuraa.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  // Ensure HTTPS for myfuraa.com if request arrived on plain HTTP
  if (url.hostname === "myfuraa.com" && url.protocol === "http:") {
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
