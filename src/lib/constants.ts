/**
 * Canonical / OG / sitemap base — no trailing slash.
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — set on Vercel when you want a fixed public domain (e.g. custom domain).
 * 2. `VERCEL_URL` — automatic on Vercel (preview + production); canonical matches the deployment host (e.g. *.vercel.app).
 * 3. `http://localhost:3000` — local `next dev` / builds without Vercel env.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;

  const vercelHost = process.env.VERCEL_URL?.trim().replace(/^https?:\/\//, "");
  if (vercelHost) {
    return `https://${vercelHost}`;
  }

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

/** Host only (e.g. OG image footer). Matches `SITE_URL`. */
export const SITE_HOST = new URL(SITE_URL).hostname;

export const SITE_NAME = "AherfsGroupBuy";

/** Default social preview (Next.js `app/opengraph-image.tsx` route). */
export const OPENGRAPH_IMAGE_PATH = "/opengraph-image";
export const OPENGRAPH_IMAGE_URL = `${SITE_URL}${OPENGRAPH_IMAGE_PATH}`;
