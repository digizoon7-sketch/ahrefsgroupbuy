/**
 * Removes <Link>...</Link> from the <section> that contains the "Final thoughts" <h2>.
 */
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
  return path.join(root, "src", "app", href.replace(/^\//, ""), "page.tsx");
}

const topical = [];
for (const c of clusters) {
  topical.push(c.pillarHref);
  topical.push(...c.supportingHrefs);
}

function stripLinksInBlock(block) {
  let b = block;
  let prev;
  do {
    prev = b;
    b = b.replace(/<Link[\s\S]*?>([\s\S]*?)<\/Link>/g, (_, inner) =>
      inner.replace(/\n\s*/g, " ").replace(/\s+/g, " ").trim()
    );
  } while (b !== prev);
  return b;
}

function stripFinalSection(src) {
  const idx = src.indexOf("Final thoughts");
  if (idx === -1) return { src, changed: false };
  const secStart = src.lastIndexOf("<section", idx);
  if (secStart === -1 || secStart > idx) return { src, changed: false };
  const secEnd = src.indexOf("</section>", idx);
  if (secEnd === -1) return { src, changed: false };
  let block = src.slice(secStart, secEnd);
  const stripped = stripLinksInBlock(block);
  if (stripped === block) return { src, changed: false };
  return { src: src.slice(0, secStart) + stripped + src.slice(secEnd), changed: true };
}

function removeUnusedLinkImport(src) {
  if (src.includes("<Link") || src.includes("</Link>")) return src;
  return src.replace(/^import Link from ["']next\/link["'];\r?\n/m, "");
}

let n = 0;
for (const href of topical) {
  const file = pagePathForHref(href);
  if (!fs.existsSync(file)) continue;
  let src = fs.readFileSync(file, "utf8");
  const r = stripFinalSection(src);
  if (!r.changed) continue;
  src = removeUnusedLinkImport(r.src);
  fs.writeFileSync(file, src, "utf8");
  n++;
  console.log("stripped final thoughts links:", path.relative(root, file));
}
console.log("Done, files changed:", n);
