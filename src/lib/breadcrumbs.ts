import { HOMEPAGE_HREF, getClusterByHref, getPageByHref } from "@/content/topical-map";

export type BreadcrumbItem = { label: string; href: string };

/** Short labels — keep in sync with `pillarNav` in `nav.ts` (avoid importing nav here). */
const PILLAR_BREADCRUMB_LABEL: Record<string, string> = {
  "/ahrefs-group-buy-guide": "Simple guide",
  "/ahrefs-group-buy-pricing": "Pricing",
  "/best-plan-instead-of-ahrefs-group-buy": "Best plan",
  "/ahrefs-group-buy-keyword-research": "Keywords",
  "/ahrefs-group-buy-backlink-guide": "Backlinks",
  "/ahrefs-group-buy-seo-tools": "SEO tools",
};

function pillarBreadcrumbLabel(pillarHref: string): string {
  return (
    PILLAR_BREADCRUMB_LABEL[pillarHref] ??
    getPageByHref(pillarHref)?.label ??
    "Guide"
  );
}

export function buildBreadcrumbs(currentHref: string): BreadcrumbItem[] {
  const home: BreadcrumbItem = { label: "Home", href: HOMEPAGE_HREF };

  if (currentHref === HOMEPAGE_HREF) return [home];

  if (currentHref === "/guides") {
    return [home, { label: "Guides", href: "/guides" }];
  }

  if (currentHref === "/site-pages") {
    return [home, { label: "All pages", href: "/site-pages" }];
  }

  const page = getPageByHref(currentHref);
  const cluster = getClusterByHref(currentHref);
  if (!page || !cluster) return [home];

  const pillarCrumb: BreadcrumbItem = {
    label: pillarBreadcrumbLabel(cluster.pillarHref),
    href: cluster.pillarHref,
  };

  if (page.pageType === "pillar") {
    return [home, pillarCrumb];
  }

  return [home, pillarCrumb, { label: page.label, href: page.href }];
}

