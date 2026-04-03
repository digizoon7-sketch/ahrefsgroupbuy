import { clusters, getPageByHref } from "@/content/topical-map";

export type NavItem = { label: string; href: string; /** Full phrase for tooltip / a11y */ title: string };

/** Six main topic guides — short labels; full names in `title`. */
export const pillarNav: NavItem[] = [
  {
    label: "Simple guide",
    href: "/ahrefs-group-buy-guide",
    title: "Ahrefs Group Buy Guide",
  },
  {
    label: "Pricing",
    href: "/ahrefs-group-buy-pricing",
    title: "Ahrefs Group Buy Pricing",
  },
  {
    label: "Best plan",
    href: "/best-plan-instead-of-ahrefs-group-buy",
    title: "Best Plan Instead of Ahrefs Group Buy",
  },
  {
    label: "Keywords",
    href: "/ahrefs-group-buy-keyword-research",
    title: "Ahrefs Group Buy Keyword Research",
  },
  {
    label: "Backlinks",
    href: "/ahrefs-group-buy-backlink-guide",
    title: "Ahrefs Group Buy Backlink Guide",
  },
  {
    label: "SEO tools",
    href: "/ahrefs-group-buy-seo-tools",
    title: "Ahrefs Group Buy SEO Tools",
  },
];

export type HeaderNavCluster = {
  pillarHref: string;
  pillarTitle: string;
  pillarShort: string;
  supporting: { href: string; label: string }[];
};

/** Main guides + supporting pages for header mega menu / mobile accordions. */
export const headerNavClusters: HeaderNavCluster[] = clusters.map((c) => {
  const short =
    pillarNav.find((p) => p.href === c.pillarHref)?.label ?? c.navLabel;
  return {
    pillarHref: c.pillarHref,
    pillarTitle: c.navLabel,
    pillarShort: short,
    supporting: c.supportingHrefs.map((href) => ({
      href,
      label: getPageByHref(href)?.label ?? href.replace(/^\//, ""),
    })),
  };
});

export const headerCta = { label: "Pricing & Alternatives", href: "/ahrefs-group-buy-pricing" };
