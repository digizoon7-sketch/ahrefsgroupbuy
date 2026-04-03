import type { MetadataRoute } from "next";
import { getSitemapPaths } from "@/content/site-pages";
import { SITE_URL } from "@/lib/constants";
import { pagePathToUrlSegment } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getSitemapPaths();
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${pagePathToUrlSegment(path)}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
