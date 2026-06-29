import * as fs from "fs";
import * as path from "path";
import { SHOWCASE_ENTRIES } from "../src/showcase/registry";

const rows: string[] = [];
for (let i = 0; i < SHOWCASE_ENTRIES.length; i += 3) {
  const chunk = SHOWCASE_ENTRIES.slice(i, i + 3);
  rows.push("<tr>");
  for (const entry of chunk) {
    rows.push(`<td width="33%" align="center" valign="top">`);
    rows.push("");
    rows.push(`<img src="demos/showcase/${entry.slug}.gif" alt="${entry.title}" width="240"><br>`);
    rows.push(`<strong>${entry.title}</strong><br>`);
    rows.push(`<sub>${entry.subtitle}</sub><br>`);
    rows.push(`<a href="src/showcase/${entry.sourceFile}">Source</a>`);
    rows.push("");
    rows.push("</td>");
  }
  for (let j = chunk.length; j < 3; j++) {
    rows.push('<td width="33%"></td>');
  }
  rows.push("</tr>");
}

const block = `## Created with Rokmotion

Programmatic videos for every use case — music visuals, shorts, code animation, campaigns, and more. All previews rendered with Rokmotion.

<table>
${rows.join("\n")}
</table>

<p align="center">
  <a href="https://youtu.be/FccxpsBw6S0"><strong>▶ Watch full 30s demo on YouTube</strong></a>
  &nbsp;·&nbsp;
  <a href="demos/PaperRokmotionStart-demo.mp4">Download MP4</a>
  &nbsp;·&nbsp;
  <a href="src/showcase/registry.ts">All showcase source</a>
</p>`;

const readmePath = path.join(process.cwd(), "README.md");
const readme = fs.readFileSync(readmePath, "utf8");
const start = readme.indexOf("## Created with Rokmotion");
const end = readme.indexOf("\n---\n\nRokmotion is an open-source");
if (start === -1 || end === -1) {
  console.error("Could not find showcase section markers in README");
  process.exit(1);
}
fs.writeFileSync(readmePath, readme.slice(0, start) + block + readme.slice(end));
console.log(`Updated README with ${SHOWCASE_ENTRIES.length} showcase entries`);