/** Fails if any <Link appears inside Introduction or Final thoughts sections. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const clusters = [
  { pillarHref: "/ahrefs-group-buy-guide", supportingHrefs: ["/what-is-ahrefs-group-buy", "/is-ahrefs-group-buy-worth-it", "/ahrefs-group-buy-for-beginners", "/ahrefs-group-buy-pros-and-cons", "/ahrefs-group-buy-review", "/why-people-search-ahrefs-group-buy"] },
  { pillarHref: "/ahrefs-group-buy-pricing", supportingHrefs: ["/ahrefs-group-buy-alternative", "/best-ahrefs-group-buy-alternative", "/ahrefs-group-buy-vs-official-plans", "/ahrefs-group-buy-vs-starter-plan", "/cheap-ahrefs-options", "/ahrefs-group-buy-cost-comparison"] },
  { pillarHref: "/best-plan-instead-of-ahrefs-group-buy", supportingHrefs: ["/ahrefs-starter-plan-review", "/best-ahrefs-plan-for-beginners", "/best-ahrefs-plan-for-freelancers", "/ahrefs-lite-vs-standard", "/is-ahrefs-worth-it", "/which-ahrefs-plan-should-you-buy"] },
  { pillarHref: "/ahrefs-group-buy-keyword-research", supportingHrefs: ["/ahrefs-keyword-research-for-beginners", "/ahrefs-keyword-difficulty-guide", "/ahrefs-search-intent-guide", "/ahrefs-long-tail-keywords", "/ahrefs-keyword-gap-guide", "/ahrefs-content-clusters-guide"] },
  { pillarHref: "/ahrefs-group-buy-backlink-guide", supportingHrefs: ["/how-to-check-backlinks-in-ahrefs", "/ahrefs-backlink-analysis-guide", "/ahrefs-referring-domains-guide", "/ahrefs-top-pages-report-guide", "/ahrefs-competitor-analysis-guide", "/ahrefs-broken-link-opportunities"] },
  { pillarHref: "/ahrefs-group-buy-seo-tools", supportingHrefs: ["/ahrefs-site-audit-guide", "/ahrefs-rank-tracker-guide", "/technical-seo-checklist-with-ahrefs", "/ahrefs-site-health-score", "/how-to-track-seo-progress-in-ahrefs", "/ahrefs-ranking-report-guide"] },
];

function pagePathForHref(href) {
  const slug = href.replace(/^\//, "");
  return path.join(root, "src", "app", slug, "page.tsx");
}

const topical = [];
for (const c of clusters) {
  topical.push(c.pillarHref);
  topical.push(...c.supportingHrefs);
}

function sectionAroundMarker(src, marker) {
  const i = src.indexOf(marker);
  if (i === -1) return null;
  const start = src.lastIndexOf("<section", i);
  if (start === -1) return null;
  const end = src.indexOf("</section>", i);
  if (end === -1) return null;
  return src.slice(start, end);
}

const bad = [];
for (const href of topical) {
  const file = pagePathForHref(href);
  const src = fs.readFileSync(file, "utf8");
  const intro = sectionAroundMarker(src, 'aria-labelledby="introduction-heading"');
  if (!intro) bad.push({ href, reason: "no introduction section" });
  else if (intro.includes("<Link")) bad.push({ href, reason: "Link inside Introduction" });

  const ft = sectionAroundMarker(src, "Final thoughts");
  if (ft && ft.includes("<Link")) bad.push({ href, reason: "Link inside Final thoughts" });
}

if (bad.length) {
  console.error("FAIL:\n", bad.map((b) => `${b.href}: ${b.reason}`).join("\n"));
  process.exit(1);
}
console.log("OK: no <Link in Introduction or Final thoughts on", topical.length, "topical pages.");
