#!/usr/bin/env bash
# Rebuild the CV PDF and its preview image from cv/cv-fr.html.
# Needs: chromium (or google-chrome), poppler (pdftoppm, pdfinfo), ImageMagick.
set -euo pipefail

cd "$(dirname "$0")/.."
SRC="cv/cv-fr.html"
PDF="public/cv-hamza-elhatimy.pdf"
PREVIEW="public/cv-preview.webp"
CHROME="$(command -v chromium || command -v google-chrome-stable || command -v google-chrome)"

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=6000 --print-to-pdf="$PDF" "file://$PWD/$SRC" 2>/dev/null

pages="$(pdfinfo "$PDF" | awk '/^Pages:/ {print $2}')"
if [ "$pages" != "1" ]; then
  echo "Warning: the CV is $pages pages; trim content to keep it on one page." >&2
fi

# Preview: page 1 at ~1240px wide, WebP for the on-site viewer.
tmp="$(mktemp -d)"
pdftoppm -r 150 -png -singlefile "$PDF" "$tmp/page"
magick "$tmp/page.png" -quality 82 "$PREVIEW"
rm -rf "$tmp"

echo "Built $PDF ($pages page) and $PREVIEW"
