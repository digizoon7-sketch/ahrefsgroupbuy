export type PlanCard = {
  name: string;
  summary: string;
  bestFor: string;
  ctaLabel: string;
  ctaHref: string;
};

export const homepagePlans: PlanCard[] = [
  {
    name: "Starter",
    summary: "A simple first step for learning Ahrefs and light SEO work.",
    bestFor: "Beginners and solo users",
    ctaLabel: "Starter plan review",
    ctaHref: "/ahrefs-starter-plan-review",
  },
  {
    name: "Lite",
    summary: "More room for regular keyword and competitor research.",
    bestFor: "Freelancers",
    ctaLabel: "Pricing & alternatives",
    ctaHref: "/ahrefs-group-buy-pricing",
  },
  {
    name: "Standard",
    summary: "Deeper workflows across more projects and tasks.",
    bestFor: "Growing marketers",
    ctaLabel: "Pricing & alternatives",
    ctaHref: "/ahrefs-group-buy-pricing",
  },
  {
    name: "Advanced",
    summary: "Higher limits for agencies and larger SEO programs.",
    bestFor: "Agencies",
    ctaLabel: "Pricing & alternatives",
    ctaHref: "/ahrefs-group-buy-pricing",
  },
  {
    name: "Enterprise",
    summary: "Scale and support for big teams and complex needs.",
    bestFor: "Large teams",
    ctaLabel: "Pricing & alternatives",
    ctaHref: "/ahrefs-group-buy-pricing",
  },
];
