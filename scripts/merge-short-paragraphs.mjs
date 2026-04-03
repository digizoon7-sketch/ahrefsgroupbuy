/**
 * Merges a one-line <p>...</p> into the following <p> when the first is "short"
 * and the next sibling opens with <p> (not <ul>, <h2>, etc.).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const MAX_PLAIN = 95;

function stripJsxText(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/\{" "\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === "node_modules" || name.name.startsWith(".")) continue;
      walk(p, acc);
    } else if (name.name === "page.tsx") acc.push(p);
  }
  return acc;
}

/** True if line is a complete <p>...</p> on one line (no raw newline inside). */
function isSingleLineP(line) {
  const t = line.trim();
  if (!t.startsWith("<p>") || !t.endsWith("</p>")) return false;
  const inner = t.slice(3, -4);
  if (inner.includes("\n")) return false;
  return true;
}

function getSingleLinePInner(line) {
  const t = line.trim();
  return t.slice(3, -4);
}

function isOpenPOnly(line) {
  return /^\s*<p>\s*$/.test(line);
}

function isClosePOnly(line) {
  return /^\s*<\/p>\s*$/.test(line);
}

function mergeFile(src) {
  const lines = src.split("\n");
  const out = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const indentMatch = line.match(/^(\s*)/);
    const indent = indentMatch ? indentMatch[1] : "";

    if (isSingleLineP(line)) {
      const inner = getSingleLinePInner(line);
      const plain = stripJsxText(inner);
      const shortEnough = plain.length > 0 && plain.length <= MAX_PLAIN;
      const next = lines[i + 1];

      if (shortEnough && next !== undefined) {
        // Next: another single-line <p>
        if (isSingleLineP(next)) {
          const inner2 = getSingleLinePInner(next);
          const sep = /[.!?:]$/.test(inner.trim()) ? " " : " ";
          out.push(`${indent}<p>${inner.trim()}${sep}${inner2.trim()}</p>`);
          i += 2;
          continue;
        }

        // Next: multiline <p>
        if (isOpenPOnly(next)) {
          const block = [next];
          let j = i + 2;
          let foundClose = false;
          while (j < lines.length) {
            block.push(lines[j]);
            if (lines[j].includes("</p>") && !isOpenPOnly(lines[j])) {
              foundClose = true;
              break;
            }
            j++;
          }
          if (foundClose && block.length >= 2) {
            const sep = /[.!?:]$/.test(inner.trim()) ? " " : " ";
            const firstContentIdx = 1;
            const firstContent = block[firstContentIdx];
            const m = firstContent.match(/^(\s*)(.*)$/);
            const cIndent = m ? m[1] : indent + "          ";
            const cRest = m ? m[2] : firstContent;
            const mergedFirst = `${cIndent}${inner.trim()}${sep}${cRest}`;
            out.push(`${indent}<p>`);
            out.push(mergedFirst);
            for (let k = 2; k < block.length; k++) out.push(block[k]);
            i = j + 1;
            continue;
          }
        }
      }
    }

    out.push(line);
    i++;
  }

  return out.join("\n");
}

function processUntilStable(src) {
  let cur = src;
  for (let n = 0; n < 50; n++) {
    const next = mergeFile(cur);
    if (next === cur) return cur;
    cur = next;
  }
  return cur;
}

const appDir = path.join(root, "src", "app");
const files = walk(appDir).filter((f) => !f.includes(`${path.sep}[slug]${path.sep}`));

let changedFiles = 0;
for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  const after = processUntilStable(before);
  if (after !== before) {
    fs.writeFileSync(file, after, "utf8");
    changedFiles++;
    console.log("merged:", path.relative(root, file));
  }
}

console.log("\nDone. Files updated:", changedFiles);
