import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const WIDTH = 1280;
const HEIGHT = 720;
const htmlPath = path.join(process.cwd(), "assets", "thumbnail.html");
const outDir = path.join(process.cwd(), "demos");
const outPng = path.join(outDir, "rokmotion-youtube-thumbnail.png");

const renderWithChrome = () => {
  const chromePaths = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ];

  const chrome = chromePaths.find((p) => fs.existsSync(p));
  if (!chrome) {
    throw new Error("Chrome not found for thumbnail render");
  }

  fs.mkdirSync(outDir, { recursive: true });

  execSync(
    `"${chrome}" --headless=new --disable-gpu --screenshot="${outPng}" --window-size=${WIDTH},${HEIGHT} --default-background-color=0 "file://${htmlPath}"`,
    { stdio: "pipe" },
  );
};

try {
  renderWithChrome();
  console.log(`Thumbnail saved: ${outPng}`);
} catch (err) {
  console.error("Thumbnail render failed:", err);
  process.exit(1);
}