export type ReviewItem = {
  name: string;
  role: string;
  quote: string;
  initials: string;
};

/** Homepage: 3 short testimonials for a calmer reviews section. */
export const homepageReviews: ReviewItem[] = [
  {
    name: "Daniel R.",
    role: "Freelance SEO Consultant",
    quote: "Keywords, competitors, and content planning in one calm workflow.",
    initials: "DR",
  },
  {
    name: "Sophie M.",
    role: "Content Marketing Lead",
    quote: "Clearer topic ideas before we commit to new pages.",
    initials: "SM",
  },
  {
    name: "Imran K.",
    role: "Agency SEO Strategist",
    quote: "Site Explorer and Rank Tracker cut down our reporting guesswork.",
    initials: "IK",
  },
];

export const reviewMetrics = [
  "Keyword Ideas",
  "Backlink Research",
  "Site Audits",
  "Rank Tracking",
];
