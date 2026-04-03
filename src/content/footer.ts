import type { NavItem } from "./nav";

/**
 * Footer stays minimal: avoid repeating the same destinations as the header.
 * Use /site-pages for a full directory when needed.
 */
export const footerFeatureLinks: NavItem[] = [
  { label: "All pages", href: "/site-pages", title: "All pages directory" },
];
