import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const args = process.argv.slice(2);
const getArg = (flag: string, fallback: string) => {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const composition = getArg("--composition", getArg("-c", "ThumbnailRokmotion"));
const output = getArg("--output", getArg("-o", "demos/rokmotion-youtube-thumbnail.png"));
const frame = getArg("--frame", getArg("-f", "0"));
const props = getArg("--props", getArg("-p", ""));

const outDir = path.dirname(path.resolve(output));
fs.mkdirSync(outDir, { recursive: true });

const cmd = [
  "node",
  "bin/rokmotion.js",
  "still",
  composition,
  output,
  `--frame=${frame}`,
  "--image-format=png",
  "--log=error",
  ...(props ? [`--props=${props}`] : []),
].join(" ");

execSync(cmd, { stdio: "inherit", cwd: process.cwd() });
console.log(`Thumbnail saved: ${output}`);