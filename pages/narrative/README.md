# Extracted Archives: story map

Two archives, two extractions. A scrolling satellite story map built the same way as the Mapbox Storytelling template (config.js plus index.html, scrollama, flyTo).

## Run it
1. Open `config.js` and replace `YOUR_MAPBOX_ACCESS_TOKEN` with your Mapbox public token.
2. Open the folder in VS Code and start Live Server (or `python -m http.server` in the folder), then open `index.html`.

## Edit it
- Chapter text, camera positions, map points, photos and news screenshots are all in `config.js`.
- `eyebrow` is the small label above each title (format: `Part 1 - 1809 to 1814`).
- `tl` is the label on the bottom timeline.
- `photos`, `news` and `slips` are what pops up in the collage for each chapter.
- Sources are lettered; a `<sup>x</sup>` in the text links to source `x`.

## Images
- `images/`: archival photos. NLI photos are from the National Library of Ireland on The Commons (no known copyright restrictions). The Lough Boora photo is CC BY-SA 2.0, credit Kieran Campbell.
- `news/`: article screenshots taken 23 November 2026, cropped to headline and lead image (portraits of named people cropped out).
