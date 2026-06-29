#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."
OUT_DIR="demos/showcase"
mkdir -p "$OUT_DIR"

COMPOSITIONS=(
  "Showcase-PaperCraft:paper-craft"
  "Showcase-NeonGrid:neon-grid"
  "Showcase-RetroWave:retro-wave"
  "Showcase-KineticType:kinetic-type"
  "Showcase-DataViz:data-viz"
  "Showcase-GlassUI:glass-ui"
  "Showcase-MusicVisuals:music-visuals"
  "Showcase-ViralShorts:viral-shorts"
  "Showcase-CodeAnimate:code-animate"
  "Showcase-YearReview:year-review"
  "Showcase-ScreenRecord:screen-record"
  "Showcase-EcommerceAds:ecommerce-ads"
  "Showcase-Karaoke:karaoke"
  "Showcase-WatercolorMap:watercolor-map"
  "Showcase-WeatherApp:weather-app"
  "Showcase-AutomationTool:automation-tool"
  "Showcase-VideoStats:video-stats"
  "Showcase-AnimStats:anim-stats"
  "Showcase-FluidBackground:fluid-background"
  "Showcase-Screencast:screencast"
  "Showcase-NextJsTutorial:nextjs-tutorial"
  "Showcase-ElectricityMaps:electricity-maps"
  "Showcase-Storytelling:storytelling"
  "Showcase-ProductVideo:product-video"
)

for entry in "${COMPOSITIONS[@]}"; do
  ID="${entry%%:*}"
  SLUG="${entry##*:}"
  MP4="$OUT_DIR/${SLUG}.mp4"
  GIF="$OUT_DIR/${SLUG}.gif"

  echo "Rendering $ID..."
  npx rokmotion render "$ID" "$MP4" --log=error

  echo "Converting to GIF: $GIF"
  ffmpeg -y -i "$MP4" \
    -filter_complex "[0:v]fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=64[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" \
    -loop 0 "$GIF"

  rm -f "$MP4"
  echo "Done: $GIF ($(du -h "$GIF" | cut -f1))"
done

echo "All ${#COMPOSITIONS[@]} showcase GIFs rendered in $OUT_DIR"