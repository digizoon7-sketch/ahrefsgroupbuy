/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Clean URLs: /path not /path/ — matches canonicals and sitemap. */
  trailingSlash: false,
  /**
   * HTTP-level robots hint (audit tools often look for this). Same intent as
   * `metadata.robots` in `layout.tsx`. Absence of this header does not block indexing;
   * crawlers default to indexable unless told otherwise.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "all" }],
      },
    ];
  },
  async redirects() {
    return [
      /** `app/pages` conflicts with Next.js; real route is `/site-pages`. */
      { source: "/pages", destination: "/site-pages", permanent: true },
    ];
  },
};

export default nextConfig;
