#!/usr/bin/env node
/**
 * Rokmotion CLI — forwards to the video render engine.
 * Usage: npx rokmotion render <CompositionId> out/video.mp4
 */
const { spawnSync } = require("child_process");
const path = require("path");

const engineBin = path.join(__dirname, "..", "node_modules", ".bin", "remotion");
const result = spawnSync(engineBin, process.argv.slice(2), {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status ?? 1);