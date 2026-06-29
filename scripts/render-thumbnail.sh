#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

COMPOSITION="ThumbnailRokmotion"
OUTPUT="demos/rokmotion-youtube-thumbnail.png"
FRAME="0"
PROPS=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --composition|-c)
      COMPOSITION="$2"
      shift 2
      ;;
    --output|-o)
      OUTPUT="$2"
      shift 2
      ;;
    --frame|-f)
      FRAME="$2"
      shift 2
      ;;
    --props|-p)
      PROPS="$2"
      shift 2
      ;;
    *)
      echo "Unknown option: $1" >&2
      echo "Usage: npm run thumbnail -- [--composition ID] [--output path.png] [--frame N] [--props '{}']" >&2
      exit 1
      ;;
  esac
done

mkdir -p "$(dirname "$OUTPUT")"

ARGS=(still "$COMPOSITION" "$OUTPUT" --frame="$FRAME" --image-format=png --log=error)
if [[ -n "$PROPS" ]]; then
  ARGS+=(--props="$PROPS")
fi

echo "Rendering thumbnail: $COMPOSITION → $OUTPUT (frame $FRAME)"
node bin/rokmotion.js "${ARGS[@]}"
echo "Done: $OUTPUT"