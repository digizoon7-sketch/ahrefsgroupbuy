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

for (const f of walk("src/app")) {
  let s = fs.readFileSync(f, "utf8");
  if (!s.includes("CTASection")) continue;
  const o = s;
  s = s.replace(/\r\n/g, "\n");
  s = s.replace(/\nimport \{ CTASection \} from "@\/components\/CTASection";/, "");
  s = s.replace(/\n      <div className="mt-14">\n        <CTASection[\s\S]*?\/>\n      <\/div>\n/g, "\n");
  if (s !== o) {
    fs.writeFileSync(f, s);
    console.log("stripped", f);
  }
}
