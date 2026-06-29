#!/usr/bin/env node
/**
 * Rokmotion CLI — forwards to the video render engine.
 * Usage:
 *   npx rokmotion render <CompositionId> out/video.mp4
 *   npx rokmotion thumbnail [--composition ID] [--output path.png] [--frame N]
 */
const { spawnSync } = require("child_process");
const path = require("path");

const engineBin = path.join(__dirname, "..", "node_modules", ".bin", "remotion");
const configFile = path.join(__dirname, "..", "rokmotion.config.ts");

const pickFlag = (args, ...flags) => {
  for (let i = 0; i < args.length; i++) {
    if (flags.includes(args[i])) {
      return args[i + 1] ?? null;
    }
    for (const flag of flags) {
      if (args[i].startsWith(`${flag}=`)) {
        return args[i].slice(flag.length + 1);
      }
    }
  }
  return null;
};

let args = process.argv.slice(2);

if (args[0] === "thumbnail") {
  const composition = pickFlag(args, "--composition", "-c") ?? "ThumbnailRokmotion";
  const output = pickFlag(args, "--output", "-o") ?? "demos/rokmotion-youtube-thumbnail.png";
  const frame = pickFlag(args, "--frame", "-f") ?? "0";
  const props = pickFlag(args, "--props", "-p");
  args = [
    "still",
    composition,
    output,
    `--frame=${frame}`,
    "--image-format=png",
    ...(props ? [`--props=${props}`] : []),
  ];
}

const hasConfig = args.some(
  (arg) => arg === "--config" || arg.startsWith("--config="),
);
const forwardedArgs = hasConfig ? args : ["--config", configFile, ...args];

const result = spawnSync(engineBin, forwardedArgs, {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);