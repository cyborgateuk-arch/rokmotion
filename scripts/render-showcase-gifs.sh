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
    -filter_complex "[0:v]fps=12,scale=640:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=96[p];[s1][p]paletteuse=dither=bayer:bayer_scale=3" \
    -loop 0 "$GIF"

  rm -f "$MP4"
  echo "Done: $GIF ($(du -h "$GIF" | cut -f1))"
done

echo "All showcase GIFs rendered in $OUT_DIR"