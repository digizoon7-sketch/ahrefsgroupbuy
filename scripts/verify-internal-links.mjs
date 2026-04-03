/**
 * Verifies 42 topical pages: pillars → in-body Link href must be home "/" only;
 * supporting → every Link href must be that cluster's pillar only. (Intro sections should have no links.)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const clusters = [
  {
    pillarHref: "/ahrefs-group-buy-guide",
    supportingHrefs: [
      "/what-is-ahrefs-group-buy",
      "/is-ahrefs-group-buy-worth-it",
      "/ahrefs-group-buy-for-beginners",
      "/ahrefs-group-buy-pros-and-cons",
      "/ahrefs-group-buy-review",
      "/why-people-search-ahrefs-group-buy",
    ],
  },
  {
    pillarHref: "/ahrefs-group-buy-pricing",
    supportingHrefs: [
      "/ahrefs-group-buy-alternative",
      "/best-ahrefs-group-buy-alternative",
      "/ahrefs-group-buy-vs-official-plans",
      "/ahrefs-group-buy-vs-starter-plan",
      "/cheap-ahrefs-options",
      "/ahrefs-group-buy-cost-comparison",
    ],
  },
  {
    pillarHref: "/best-plan-instead-of-ahrefs-group-buy",
    supportingHrefs: [
      "/ahrefs-starter-plan-review",
      "/best-ahrefs-plan-for-beginners",
      "/best-ahrefs-plan-for-freelancers",
      "/ahrefs-lite-vs-standard",
      "/is-ahrefs-worth-it",
      "/which-ahrefs-plan-should-you-buy",
    ],
  },
  {
    pillarHref: "/ahrefs-group-buy-keyword-research",
    supportingHrefs: [
      "/ahrefs-keyword-research-for-beginners",
      "/ahrefs-keyword-difficulty-guide",
      "/ahrefs-search-intent-guide",
      "/ahrefs-long-tail-keywords",
      "/ahrefs-keyword-gap-guide",
      "/ahrefs-content-clusters-guide",
    ],
  },
  {
    pillarHref: "/ahrefs-group-buy-backlink-guide",
    supportingHrefs: [
      "/how-to-check-backlinks-in-ahrefs",
      "/ahrefs-backlink-analysis-guide",
      "/ahrefs-referring-domains-guide",
      "/ahrefs-top-pages-report-guide",
      "/ahrefs-competitor-analysis-guide",
      "/ahrefs-broken-link-opportunities",
    ],
  },
  {
    pillarHref: "/ahrefs-group-buy-seo-tools",
    supportingHrefs: [
      "/ahrefs-site-audit-guide",
      "/ahrefs-rank-tracker-guide",
      "/technical-seo-checklist-with-ahrefs",
      "/ahrefs-site-health-score",
      "/how-to-track-seo-progress-in-ahrefs",
      "/ahrefs-ranking-report-guide",
    ],
  },
];

const pillarSet = new Set(clusters.map((c) => c.pillarHref));

const hrefToPillar = new Map();
for (const c of clusters) {
  hrefToPillar.set(c.pillarHref, c.pillarHref);
  for (const s of c.supportingHrefs) hrefToPillar.set(s, c.pillarHref);
}

function pagePathForHref(href) {
  const slug = href === "/" ? "" : href.replace(/^\//, "");
  return path.join(root, "src", "app", slug, "page.tsx");
}

function extractLinkHrefs(source) {
  const out = [];
  const re = /href="(\/[^"]*)"/g;
  let m;
  while ((m = re.exec(source))) out.push(m[1]);
  return out;
}

const topicalHrefs = [];
for (const c of clusters) {
  topicalHrefs.push(c.pillarHref);
  topicalHrefs.push(...c.supportingHrefs);
}

if (topicalHrefs.length !== 42) {
  console.error("Expected 42 topical URLs, got", topicalHrefs.length);
  process.exit(1);
}

const issues = [];
const ok = [];

for (const href of topicalHrefs) {
  const file = pagePathForHref(href);
  if (!fs.existsSync(file)) {
    issues.push({ href, problem: "missing file", file });
    continue;
  }
  const src = fs.readFileSync(file, "utf8");
  const linkHrefs = extractLinkHrefs(src);
  const isPillar = pillarSet.has(href);
  const expectedPillar = hrefToPillar.get(href);

  if (isPillar) {
    const bad = linkHrefs.filter((h) => h !== "/");
    if (bad.length) {
      issues.push({
        href,
        role: "pillar",
        problem: "in-body Link href must be only / (home); found: " + [...new Set(bad)].join(", "),
      });
    } else {
      ok.push({ href, role: "pillar", linkHrefs: [...new Set(linkHrefs)] });
    }
  } else {
    const unique = [...new Set(linkHrefs)];
    const wrong = unique.filter((h) => h !== expectedPillar);
    if (wrong.length) {
      issues.push({
        href,
        role: "supporting",
        expectedPillar,
        problem: "Link href must be pillar only; disallowed: " + wrong.join(", "),
        allowedFound: unique.filter((h) => h === expectedPillar),
      });
    } else if (unique.length === 0) {
      ok.push({ href, role: "supporting", note: "no Link in file (CTA only via component)" });
    } else {
      ok.push({ href, role: "supporting", linkHrefs: unique });
    }
  }
}

console.log("=== Topical pages:", topicalHrefs.length, "===\n");
if (issues.length) {
  console.log("ISSUES (" + issues.length + "):\n");
  for (const i of issues) console.log(JSON.stringify(i, null, 2) + "\n");
} else {
  console.log("No href rule violations in page.tsx Link components.\n");
}

console.log("SUMMARY: OK details for pages with in-file links (sample):");
for (const row of ok.filter((x) => x.linkHrefs?.length)) {
  console.log(row.href, "→", row.linkHrefs.join(", "));
}
const noLink = ok.filter((x) => x.note);
console.log("\nPages with zero <Link href=...> in body:", noLink.length);
noLink.forEach((x) => console.log(" ", x.href));

process.exit(issues.length ? 1 : 0);
