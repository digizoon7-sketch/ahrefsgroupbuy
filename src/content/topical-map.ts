export type ClusterId =
  | "guide"
  | "pricing"
  | "plans"
  | "keywords"
  | "backlinks"
  | "tools";

export type PageType = "pillar" | "supporting";

export type TopicalPage = {
  /** Clean slug-only URL (root or /slug). */
  href: string;
  /** Navigation/breadcrumb label (short). */
  label: string;
  /** One-H1 placeholder (can be longer than `label`). */
  h1: string;
  /** Short intro placeholder (1–2 sentences). */
  intro: string;
  /** Placeholder SEO title (unique). */
  metaTitle: string;
  /** Placeholder meta description (unique). */
  metaDescription: string;
  /** Cluster this page belongs to. */
  clusterId: ClusterId;
  /** Pillar/supporting role inside the cluster. */
  pageType: PageType;
  /** For supporting pages: the pillar page href. */
  pillarHref: string;
  /** Optional 1–2 related pages inside the same cluster. */
  relatedHrefs?: string[];
};

export type Cluster = {
  id: ClusterId;
  label: string;
  /** Pillar page href. */
  pillarHref: string;
  /** Pillar page label for nav. */
  navLabel: string;
  /** Supporting pages hrefs. */
  supportingHrefs: string[];
  /** Anchors pillars use to link back to homepage. */
  pillarToHomeAnchors: readonly string[];
  /** Anchors supporting pages use to link to their pillar. */
  supportingToPillarAnchors: readonly string[];
};

export const HOMEPAGE_HREF = "/" as const;

export const pillarPages = [
  "/ahrefs-group-buy-guide",
  "/ahrefs-group-buy-pricing",
  "/best-plan-instead-of-ahrefs-group-buy",
  "/ahrefs-group-buy-keyword-research",
  "/ahrefs-group-buy-backlink-guide",
  "/ahrefs-group-buy-seo-tools",
] as const;

export const clusters: Cluster[] = [
  {
    id: "guide",
    label: "Main group buy guide",
    pillarHref: "/ahrefs-group-buy-guide",
    navLabel: "Ahrefs Group Buy Guide",
    supportingHrefs: [
      "/what-is-ahrefs-group-buy",
      "/is-ahrefs-group-buy-worth-it",
      "/ahrefs-group-buy-for-beginners",
      "/ahrefs-group-buy-pros-and-cons",
      "/ahrefs-group-buy-review",
      "/why-people-search-ahrefs-group-buy",
    ],
    supportingToPillarAnchors: [
      "Ahrefs group buy guide",
      "complete Ahrefs group buy guide",
      "learn Ahrefs group buy",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy hub", "Ahrefs group buy main page"],
  },
  {
    id: "pricing",
    label: "Pricing & alternatives",
    pillarHref: "/ahrefs-group-buy-pricing",
    navLabel: "Ahrefs Group Buy Pricing",
    supportingHrefs: [
      "/ahrefs-group-buy-alternative",
      "/best-ahrefs-group-buy-alternative",
      "/ahrefs-group-buy-vs-official-plans",
      "/ahrefs-group-buy-vs-starter-plan",
      "/cheap-ahrefs-options",
      "/ahrefs-group-buy-cost-comparison",
    ],
    supportingToPillarAnchors: [
      "Ahrefs group buy pricing",
      "Ahrefs group buy pricing guide",
      "compare Ahrefs group buy pricing",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy comparison", "Ahrefs group buy overview"],
  },
  {
    id: "plans",
    label: "Plans & access decision",
    pillarHref: "/best-plan-instead-of-ahrefs-group-buy",
    navLabel: "Best Plan Instead of Ahrefs Group Buy",
    supportingHrefs: [
      "/ahrefs-starter-plan-review",
      "/best-ahrefs-plan-for-beginners",
      "/best-ahrefs-plan-for-freelancers",
      "/ahrefs-lite-vs-standard",
      "/is-ahrefs-worth-it",
      "/which-ahrefs-plan-should-you-buy",
    ],
    supportingToPillarAnchors: [
      "best plan instead of Ahrefs group buy",
      "Ahrefs plan alternative guide",
      "better option than Ahrefs group buy",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy resource", "Ahrefs group buy main page"],
  },
  {
    id: "keywords",
    label: "Keyword research",
    pillarHref: "/ahrefs-group-buy-keyword-research",
    navLabel: "Ahrefs Group Buy Keyword Research",
    supportingHrefs: [
      "/ahrefs-keyword-research-for-beginners",
      "/ahrefs-keyword-difficulty-guide",
      "/ahrefs-search-intent-guide",
      "/ahrefs-long-tail-keywords",
      "/ahrefs-keyword-gap-guide",
      "/ahrefs-content-clusters-guide",
    ],
    supportingToPillarAnchors: [
      "Ahrefs group buy keyword research guide",
      "keyword research with Ahrefs group buy",
      "Ahrefs keyword research guide",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy guide", "Ahrefs group buy overview"],
  },
  {
    id: "backlinks",
    label: "Backlinks & competitor",
    pillarHref: "/ahrefs-group-buy-backlink-guide",
    navLabel: "Ahrefs Group Buy Backlink Guide",
    supportingHrefs: [
      "/how-to-check-backlinks-in-ahrefs",
      "/ahrefs-backlink-analysis-guide",
      "/ahrefs-referring-domains-guide",
      "/ahrefs-top-pages-report-guide",
      "/ahrefs-competitor-analysis-guide",
      "/ahrefs-broken-link-opportunities",
    ],
    supportingToPillarAnchors: [
      "Ahrefs group buy backlink guide",
      "backlink analysis with Ahrefs group buy",
      "Ahrefs backlink guide",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy resource", "Ahrefs group buy hub"],
  },
  {
    id: "tools",
    label: "Technical SEO & tracking",
    pillarHref: "/ahrefs-group-buy-seo-tools",
    navLabel: "Ahrefs Group Buy SEO Tools",
    supportingHrefs: [
      "/ahrefs-site-audit-guide",
      "/ahrefs-rank-tracker-guide",
      "/technical-seo-checklist-with-ahrefs",
      "/ahrefs-site-health-score",
      "/how-to-track-seo-progress-in-ahrefs",
      "/ahrefs-ranking-report-guide",
    ],
    supportingToPillarAnchors: [
      "Ahrefs group buy SEO tools guide",
      "Ahrefs site audit and tracking guide",
      "Ahrefs SEO tools guide",
    ],
    pillarToHomeAnchors: ["Ahrefs group buy main page", "Ahrefs group buy guide"],
  },
];

function pickRelated(hrefs: string[], current: string): string[] {
  const idx = hrefs.indexOf(current);
  if (idx === -1) return [];
  const candidates = hrefs.filter((h) => h !== current);
  // deterministic but “nearby”
  const a = candidates[idx % candidates.length];
  const b = candidates[(idx + 2) % candidates.length];
  return a && b && a !== b ? [a, b] : a ? [a] : [];
}

export const topicalPages: TopicalPage[] = (() => {
  const pages: TopicalPage[] = [];

  for (const cluster of clusters) {
    // Pillar page
    pages.push({
      href: cluster.pillarHref,
      label: cluster.navLabel,
      h1: `${cluster.navLabel} (placeholder)`,
      intro:
        "This is a structured placeholder page. It will become the main hub for this topic and link to deeper guides while pointing back to the homepage.",
      metaTitle: `${cluster.navLabel} | Ahrefs Group Buy`,
      metaDescription:
        "Main topic hub for the Ahrefs group buy family. Navigate to focused guides and return to the homepage anytime.",
      clusterId: cluster.id,
      pageType: "pillar",
      pillarHref: cluster.pillarHref,
      relatedHrefs: [],
    });

    // Supporting pages
    for (const href of cluster.supportingHrefs) {
      const nice = href
        .replace(/^\//, "")
        .split("-")
        .map((p) => (p.length ? p[0]!.toUpperCase() + p.slice(1) : p))
        .join(" ");

      pages.push({
        href,
        label: nice,
        h1: `${nice} (placeholder)`,
        intro:
          "This is a placeholder supporting page. It will expand the main topic guide with focused content and clear internal links.",
        metaTitle: `${nice} | Ahrefs Group Buy`,
        metaDescription:
          "Focused Ahrefs group buy guide with breadcrumbs and links back to the main topic page.",
        clusterId: cluster.id,
        pageType: "supporting",
        pillarHref: cluster.pillarHref,
        relatedHrefs: pickRelated(cluster.supportingHrefs, href).slice(0, 2),
      });
    }
  }

  // Ensure stable ordering for sitemap/directory pages
  pages.sort((a, b) => a.href.localeCompare(b.href));
  return pages;
})();

export const topicalPageByHref = new Map(topicalPages.map((p) => [p.href, p] as const));

export function isPillarHref(href: string): boolean {
  return clusters.some((c) => c.pillarHref === href);
}

export function getClusterByHref(href: string): Cluster | undefined {
  return clusters.find((c) => c.pillarHref === href || c.supportingHrefs.includes(href));
}

export function getPageByHref(href: string): TopicalPage | undefined {
  return topicalPageByHref.get(href);
}

export function getAllTopicalHrefs(): string[] {
  return [HOMEPAGE_HREF, ...topicalPages.map((p) => p.href)];
}

