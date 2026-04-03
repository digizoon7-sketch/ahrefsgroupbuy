import fs from "fs";
import path from "path";

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, acc);
    else if (ent.name === "page.tsx") acc.push(p);
  }
  return acc;
}

const IMPORT_LINE = `import { SiteBottomCTA } from "@/components/SiteBottomCTA";`;
const CTA_BLOCK = `
      <div className="mt-14">
        <SiteBottomCTA />
      </div>
`;

const skip = new Set([
  path.join("src", "app", "page.tsx"),
  path.join("src", "app", "[slug]", "page.tsx"),
  path.join("src", "app", "not-found.tsx"),
]);

for (const f of walk("src/app")) {
  if (skip.has(f.replaceAll("\\", "/"))) continue;
  let s = fs.readFileSync(f, "utf8");
  if (!s.includes("<article")) continue;
  if (s.includes("SiteBottomCTA")) continue;

  const o = s;
  s = s.replace(/\r\n/g, "\n");

  if (!s.includes(IMPORT_LINE)) {
    const lines = s.split("\n");
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("import ")) lastImport = i;
    }
    if (lastImport >= 0) lines.splice(lastImport + 1, 0, IMPORT_LINE);
    else lines.unshift(IMPORT_LINE);
    s = lines.join("\n");
  }

  if (!s.includes("</article>")) continue;
  s = s.replace(/\n    <\/article>/, `\n      <div className="mt-14">\n        <SiteBottomCTA />\n      </div>\n    </article>`);

  if (s !== o) {
    fs.writeFileSync(f, s);
    console.log("added CTA:", f);
  }
}
