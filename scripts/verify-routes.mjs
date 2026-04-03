import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(root, "..", "src", "app");
const topicalPath = path.join(root, "..", "src", "content", "topical-map.ts");
const slugPath = path.join(appDir, "[slug]", "page.tsx");

const topicalSrc = fs.readFileSync(topicalPath, "utf8");
const topical = new Set();
for (const m of topicalSrc.matchAll(/"(\/[a-z][a-z0-9-]*)"/g)) {
  if (m[1].length > 1) topical.add(m[1]);
}

const slugSrc = fs.readFileSync(slugPath, "utf8");
const block = slugSrc.split("const DEDICATED_SLUGS")[1]?.split("]);")[0] ?? "";
const dedicated = new Set([...block.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]));

const slugDirs = new Set(
  fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== "[slug]")
    .filter((d) => fs.existsSync(path.join(appDir, d.name, "page.tsx")))
    .map((d) => d.name)
);

const topicalSlugs = new Set([...topical].map((h) => h.slice(1)));

const missingPage = [...topicalSlugs].filter((s) => !slugDirs.has(s));
const extraPage = [...slugDirs].filter((s) => !topicalSlugs.has(s) && s !== "site-pages");

const notDedicated = [...topicalSlugs].filter((s) => !dedicated.has(s));
const extraDedicated = [...dedicated].filter((s) => !topicalSlugs.has(s));

const ok = missingPage.length === 0 && extraPage.length === 0 && notDedicated.length === 0 && extraDedicated.length === 0;

console.log(
  JSON.stringify(
    {
      topicalCount: topicalSlugs.size,
      folderCount: slugDirs.size,
      missingPageFolders: missingPage,
      extraPageFolders: extraPage,
      topicalNotInDEDICATED_SLUGS: notDedicated,
      DEDICATED_SLUGSNotInTopical: extraDedicated,
      allChecksPass: ok,
    },
    null,
    2
  )
);

process.exit(ok ? 0 : 1);
