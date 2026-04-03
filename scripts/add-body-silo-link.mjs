/**
 * Inserts one silo Link in the first body <section> after Introduction (after first </p> following that section's <h2>).
 * Skips files that already contain <Link.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const linkImport = `import Link from "next/link";\n`;

const jobs = [
  // Guide cluster supporting → guide pillar
  { file: "src/app/what-is-ahrefs-group-buy/page.tsx", href: "/ahrefs-group-buy-guide", label: "Ahrefs group buy guide", sentence: "When you want the full walkthrough in one place, continue with the" },
  { file: "src/app/is-ahrefs-group-buy-worth-it/page.tsx", href: "/ahrefs-group-buy-guide", label: "Ahrefs group buy guide", sentence: "For the wider guide frame on this topic, read the" },
  { file: "src/app/ahrefs-group-buy-pros-and-cons/page.tsx", href: "/ahrefs-group-buy-guide", label: "Ahrefs group buy guide", sentence: "For the main guide overview, open the" },
  // Pillars → home
  { file: "src/app/ahrefs-group-buy-guide/page.tsx", href: "/", label: "Ahrefs group buy hub", sentence: "For the site home overview, open the" },
  { file: "src/app/ahrefs-group-buy-keyword-research/page.tsx", href: "/", label: "Ahrefs group buy hub", sentence: "For the site home overview, open the" },
  { file: "src/app/ahrefs-group-buy-backlink-guide/page.tsx", href: "/", label: "Ahrefs group buy hub", sentence: "For the site home overview, open the" },
  // Keyword supporting → keyword pillar
  { file: "src/app/ahrefs-keyword-research-for-beginners/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  { file: "src/app/ahrefs-keyword-difficulty-guide/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  { file: "src/app/ahrefs-search-intent-guide/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  { file: "src/app/ahrefs-long-tail-keywords/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  { file: "src/app/ahrefs-keyword-gap-guide/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  { file: "src/app/ahrefs-content-clusters-guide/page.tsx", href: "/ahrefs-group-buy-keyword-research", label: "Ahrefs group buy keyword research", sentence: "For the wider keyword-research frame, open" },
  // Backlink supporting → backlink pillar
  { file: "src/app/how-to-check-backlinks-in-ahrefs/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  { file: "src/app/ahrefs-backlink-analysis-guide/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  { file: "src/app/ahrefs-referring-domains-guide/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  { file: "src/app/ahrefs-top-pages-report-guide/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  { file: "src/app/ahrefs-competitor-analysis-guide/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  { file: "src/app/ahrefs-broken-link-opportunities/page.tsx", href: "/ahrefs-group-buy-backlink-guide", label: "Ahrefs group buy backlink guide", sentence: "For the wider backlink guide frame, read the" },
  // Tools supporting → tools pillar
  { file: "src/app/ahrefs-site-audit-guide/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
  { file: "src/app/ahrefs-rank-tracker-guide/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
  { file: "src/app/technical-seo-checklist-with-ahrefs/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
  { file: "src/app/ahrefs-site-health-score/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
  { file: "src/app/how-to-track-seo-progress-in-ahrefs/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
  { file: "src/app/ahrefs-ranking-report-guide/page.tsx", href: "/ahrefs-group-buy-seo-tools", label: "Ahrefs group buy SEO tools", sentence: "For the wider SEO tools frame, open" },
];

function addImport(src) {
  if (src.includes('from "next/link"') || src.includes("from 'next/link'")) return src;
  return src.replace(/^import /m, linkImport + "import ");
}

function insertBodyLink(src, href, label, sentence) {
  if (src.includes("<Link")) return src;
  const intro = 'aria-labelledby="introduction-heading"';
  const i = src.indexOf(intro);
  if (i === -1) return src;
  const introClose = src.indexOf("</section>", i);
  if (introClose === -1) return src;
  const bodyStart = src.indexOf("<section", introClose + 1);
  if (bodyStart === -1) return src;
  const h2Close = src.indexOf("</h2>", bodyStart);
  if (h2Close === -1) return src;
  const firstPClose = src.indexOf("</p>", h2Close);
  if (firstPClose === -1) return src;
  const insertAt = firstPClose + 4;
  const para = `\n        <p>\n          ${sentence}{" "}\n          <Link href="${href}" className="font-semibold text-primary hover:underline">\n            ${label}\n          </Link>\n          .\n        </p>`;
  return src.slice(0, insertAt) + para + src.slice(insertAt);
}

for (const j of jobs) {
  const fp = path.join(root, j.file);
  if (!fs.existsSync(fp)) {
    console.error("missing", j.file);
    continue;
  }
  let s = fs.readFileSync(fp, "utf8");
  const out = insertBodyLink(s, j.href, j.label, j.sentence);
  if (out === s) {
    console.log("skip (already has Link or no intro):", j.file);
    continue;
  }
  fs.writeFileSync(fp, addImport(out), "utf8");
  console.log("updated:", j.file);
}
