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

const OLD_SECTION = 'const section = "mt-12 space-y-4 text-slate-700";';
const NEW_SECTION =
  'const section = "mt-12 space-y-5 text-slate-700 leading-relaxed";';

for (const f of walk("src/app")) {
  let s = fs.readFileSync(f, "utf8");
  const o = s;
  s = s.replace(/\r\n/g, "\n");
  s = s.replace(/aria-labelledby="intro-heading"/g, 'aria-labelledby="introduction-heading"');
  s = s.replace(/id="intro-heading"/g, 'id="introduction-heading"');
  s = s.replace(
    /(<h2 id="introduction-heading" className=\{h2\}>\s*\n\s*)Intro(\s*\n\s*<\/h2>)/g,
    "$1Introduction$2",
  );
  s = s.replace(OLD_SECTION, NEW_SECTION);
  if (s !== o) fs.writeFileSync(f, s);
}

console.log("done");
