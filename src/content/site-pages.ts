export type SitePage = {
  label: string;
  href: string;
  description: string;
};

/**
 * Single source of truth for the “All pages” directory at `/site-pages`.
 * URLs and labels are driven by `topical-map.ts` (internal structure).
 */
import { topicalPages } from "@/content/topical-map";

export const sitePages: SitePage[] = [
  {
    label: "Home",
    href: "/",
    description: "Main hub targeting the “Ahrefs group buy” keyword family.",
  },
  {
    label: "All topic guides",
    href: "/guides",
    description: "Index of the six main guide sections and entry points to deeper pages.",
  },
  ...topicalPages.map((p) => ({
    label: p.label,
    href: p.href,
    description:
      p.pageType === "pillar"
        ? "Main topic guide (hub page)."
        : "Focused guide (links back to its main topic page).",
  })),
];

/** All URLs for `sitemap.xml`: every `sitePages` href plus the directory page itself. */
export function getSitemapPaths(): string[] {
  return [...sitePages.map((p) => p.href), "/site-pages"];
}
