export type AhrefsBarItem = {
  title: string;
  description: string;
  href: string;
  icon: "explorer" | "keywords" | "audit" | "rank" | "toolbar";
};

export const homepageToolsSection = {
  title: "Explore the Main Ahrefs Group Buy Tools",
  subtitle:
    "Pick the workflow you care about—keywords, backlinks, audits, or pricing—and open the matching guide hub.",
} as const;

export const ahrefsBarItems: AhrefsBarItem[] = [
  {
    title: "Backlinks & competitors",
    description: "Backlink and competitor research guides.",
    href: "/ahrefs-group-buy-backlink-guide",
    icon: "explorer",
  },
  {
    title: "Keyword research",
    description: "Keyword research guides and walkthroughs.",
    href: "/ahrefs-group-buy-keyword-research",
    icon: "keywords",
  },
  {
    title: "SEO tools",
    description: "Technical SEO, audits, and rank tracking guides.",
    href: "/ahrefs-group-buy-seo-tools",
    icon: "audit",
  },
  {
    title: "Pricing & alternatives",
    description: "Pricing comparisons and alternative options.",
    href: "/ahrefs-group-buy-pricing",
    icon: "rank",
  },
  {
    title: "Main guide",
    description: "Start with the full Ahrefs group buy guide.",
    href: "/ahrefs-group-buy-guide",
    icon: "toolbar",
  },
];
