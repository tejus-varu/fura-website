# FURAA Content Management System: Cloudflare Setup Guide

This document describes the external Cloudflare infrastructure required to enable real dynamic content persistence for the FURAA website (`furaa-website.pages.dev`).

---

## Architecture Overview

```
┌────────────────────────────────────────────────────────┐
│ Cloudflare Edge Network                                │
│                                                        │
│  Static Assets (Next.js SSG)                           │
│  ├── / (Home)                                          │
│  ├── /blogs, /blogs/[slug] (Pre-rendered SSG)          │
│  ├── /gallery (Pre-rendered SSG)                       │
│  └── /admin (Protected Admin Dashboard)                │
│                                                        │
│  Cloudflare Pages Functions (/functions/api/*)         │
│  ├── /api/blogs           ◄──► Cloudflare D1 (furaa-db)│
│  ├── /api/gallery         ◄──► Cloudflare D1 (furaa-db)│
│  ├── /api/upload          ◄──► Cloudflare R2 (furaa-media)
│  └── /api/admin/status    ◄──► Validates DB/R2 Bindings│
└────────────────────────────────────────────────────────┘
```

---

## 1. Setup Checklist for Cloudflare Account Owner

### Step A: Create Cloudflare D1 Database
Run via Wrangler CLI or create in the Cloudflare Dashboard:
```bash
npx wrangler d1 create furaa-db
```
Apply the schema:
```bash
npx wrangler d1 execute furaa-db --file=./schema.sql
```

### Step B: Create Cloudflare R2 Bucket for Media
```bash
npx wrangler r2 bucket create furaa-media
```
*(Optional: Connect custom domain or public R2 dev-url `https://media.myfuraa.com` to the bucket).*

### Step C: Bind D1 and R2 to Cloudflare Pages
In your Cloudflare Dashboard under **Workers & Pages > Pages > furaa-website > Settings > Functions**:
1. **D1 database bindings**:
   - Variable name: `DB`
   - D1 database: `furaa-db`
2. **R2 bucket bindings**:
   - Variable name: `BUCKET`
   - R2 bucket: `furaa-media`

### Step D: Set Environment Variables
In **Pages > Settings > Environment variables**:
- `ADMIN_API_KEY`: A secure 32+ character random secret used by FURAA staff to authenticate administrative API requests.
- `DEPLOY_HOOK_URL`: (Optional) Cloudflare Pages Deploy Hook URL. When an admin publishes a new blog post, the backend calls this webhook to trigger a fast static rebuild so new articles are permanently pre-rendered into CDN HTML for maximum SEO.
- `R2_PUBLIC_URL`: Public base URL for served media files (e.g., `https://media.myfuraa.com` or your R2 public bucket URL).

---

## 2. Static Export vs Dynamic Publishing Trade-off & Solution

### The Trade-off
- Next.js is configured with `output: "export"`, which pre-renders all static pages into HTML files at build time (`out/`).
- This delivers **instant sub-second TTFB, 100% CDN cache hits, zero server vulnerabilities, and zero hosting compute costs**.
- When an administrator dynamically writes a new blog post into Cloudflare D1 at runtime, the static HTML file for that new article slug does not yet exist on the CDN.

### Supported Production Solution
FURAA employs a **hybrid static-first architecture**:
1. **Pre-rendered SSG for Core Articles**: Seed articles and existing published posts are statically pre-rendered at build time via `generateStaticParams()`.
2. **Client-Side Fallback Hydration**: The `/blogs` and `/gallery` public pages query `/api/blogs` and `/api/gallery` to display any newly added D1 records immediately.
3. **Automated Deploy Hook**: When an article is marked `"published"` in the admin dashboard, the API triggers Cloudflare Pages `DEPLOY_HOOK_URL`. Cloudflare rebuilds the static export in ~60 seconds, converting the dynamic post into permanent, SEO-optimized CDN static HTML.

---

## 3. Truthful Setup Status
The admin dashboard at `/admin` automatically queries `/api/admin/status`:
- If `DB` or `BUCKET` bindings are unconfigured, the dashboard displays a clear **"Setup Required"** status indicator with instructions.
- Content is never falsely claimed as published unless the D1 database returns a verified insertion confirmation.
