const PRODUCTION_SITE_URL = "https://aherfsgroupbuy.com";

/**
 * Canonical / OG / sitemap base — no trailing slash.
 * - Optional override: `NEXT_PUBLIC_SITE_URL` (set on Vercel/hosting for your live domain).
 * - `next dev`: `http://localhost:3000` so canonical matches the URL you audit.
 * - Vercel preview: deployment URL (`VERCEL_URL`).
 * - Otherwise: live site below.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) return explicit;

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  const vercelEnv = process.env.VERCEL_ENV;
  const vercelHost = process.env.VERCEL_URL?.replace(/^https?:\/\//, "");
  if (vercelEnv === "preview" && vercelHost) {
    return `https://${vercelHost}`;
  }

  return PRODUCTION_SITE_URL;
}

export const SITE_URL = resolveSiteUrl();

/** Host only (e.g. OG image footer). Matches `SITE_URL`. */
export const SITE_HOST = new URL(SITE_URL).hostname;

export const SITE_NAME = "AherfsGroupBuy";

/** Default social preview (Next.js `app/opengraph-image.tsx` route). */
export const OPENGRAPH_IMAGE_PATH = "/opengraph-image";
export const OPENGRAPH_IMAGE_URL = `${SITE_URL}${OPENGRAPH_IMAGE_PATH}`;
