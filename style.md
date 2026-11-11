# style.md
Colloquium / Capstone visual style guide
Version 1.0, 10 Nov 2026. Built from Miro frame "VISUALS STAGE 2" and the Pinterest board "project style".

This file is the single source of truth for every page, map, diagram and gallery in the project. Read it before adding a new page, and run the checklist in section 13 before publishing one.

---

## 1. Sources this guide is drawn from

Miro, VISUALS STAGE 2 frame (capstone board):
- GALLERY: specimen sheets of objects laid out on a strict grid with generous margins (black-and-white architectural fragments, cut-out silhouettes of land parcels on a dot grid, mixed object "catalogue" sheets with crosshair markers).
- MAPPING: vintage survey sheets (muted greens, blues, buff paper, fine graticules), a soft relief map with a single pink area of focus, a nautical chart with hairline contours, a timeline diagram where lines fan down from a map into dated circles.
- FONTS: Bricolage Grotesque (headings) with Platypi (body) shown on a pink panel. This pairing is the project's type system.
- Palette swatches (the final colloquium palette below).
- Reference links: Net.art and Art Academia aesthetics.

Pinterest, "project style" (23 pins):
- Off-white specimen grids with "+" crosshair markers, isometric object arrays, cut-out silhouette catalogues.
- Survey and geological maps, star charts (The Pleiades plates), grids of hairline contour lines.
- Mint green paper with a single dotted route, blueprint style data sheets (blue ink, dense dot fields, small bar charts, a circular inset, monospace labels).
- Circular and timeline diagrams with thin red arcs and coloured dots on stems.
- Collage cut-outs of landscape photography floating on white, pixel-stepped edges.
- Hand-drawn green ink landscape sections on cream paper.
- One saturated outlier (pink and teal printed landscape): treat as the upper limit of colour intensity, not the norm.

---

## 2. Design principles

1. Paper first. Every surface reads as a printed or archival sheet: off-white or off-black, grain, faint fibre texture. Never flat digital white or pure black.
2. The grid is visible. Layouts sit on a measured grid, and the grid is allowed to show through as hairlines, crosshairs or dot fields, like a specimen sheet or survey map.
3. White space carries the work. Fewer items, larger margins. When in doubt, remove something.
4. Quiet images, one loud colour. Images are desaturated and low contrast. Pink is the only colour that is allowed to call attention, and it appears on interaction or for the main data series.
5. Archive meets net.art. Art academia (plates, figure numbers, catalogue labels, diagrams) is combined with early web language (ASCII, pixel steps, raw link lists, plain metadata). Both are restrained and hand-set, never kitsch.
6. One system across all pages. The same tokens, type scale, captions and grid on every page. A new page should look like another plate from the same atlas.

---

## 3. Colour

### 3.1 Palette (final, from the colloquium palette)

| Token | Name | Hex | Role |
|---|---|---|---|
| --pink | Pink (main accent) | #CF729B | Main accent, hover state, main data series, focus areas on maps |
| --ochre | Ochre | #D3913F | Extraction, secondary data, rare emphasis (replaced red-orange #A04326, which was too dark and saturated beside the pink and greens) |
| --yellow | Soft yellow | #F4D387 | Data fill, highlights on maps (replaced light orange-yellow #F8C46C, which sat too close to the ochre) |
| --green-light | Light green | #99AD67 | Peat and vegetation fills, map land tone |
| --spruce | Spruce (dark green) | #0B4430 | Peat as a main subject, dark map features, deep fills |
| --blue-mist | Misty blue | #BCD7E6 | Water, sky, quiet fills |
| --blue-slate | Slate blue | #3B5F88 | Blueprint lines, infrastructure, data lines |
| --ink | Off-black | #221E1C | Text, linework, dark mode background |
| --grey | Light warm grey | #BEB6AC | Grid lines, dividers, quiet fills, secondary text in dark mode |
| --paper | Off-white | #FCFBFA | Light mode background. A very bright, near-neutral paper white with only a trace of warmth (updated from #F8F5EF, which read too creamy, then #F5F4F2, which read too dull, then #FAF9F7) |

Derived helper (not a new palette colour, a darker step of the warm grey for small text on off-white):

| Token | Hex | Role |
|---|---|---|
| --grey-text | #6B635C | Captions and metadata on off-white |

### 3.2 Hierarchy of colour

- Pink leads. It is the one accent that appears on every page: link underlines, hover states, the active nav item, the main data series, the focus area on a map.
- Greens mean peat and land. Spruce for the subject, light green for fills.
- Blues mean water and infrastructure (slate for linework, misty for fills).
- Ochre, yellow: supporting data only. Never as page chrome.
- Neutrals do most of the work. A typical page is roughly 85% paper, 10% ink, 5% colour.

### 3.3 Contrast rules (measured)

| Colour | On off-white #FCFBFA | On off-black #221E1C | Use as text? |
|---|---|---|---|
| Ink #221E1C | 16.0 : 1 | n/a | Yes, light mode |
| Paper #FCFBFA | n/a | 16.0 : 1 | Yes, dark mode |
| Pink #CF729B | 3.1 : 1 | 5.14 : 1 | Only on off-black, or as large headings 24px+ on off-white with care. Never body text on off-white |
| Ochre #D3913F | 2.6 : 1 | 6.2 : 1 | Fills only in light mode; text allowed on off-black |
| Spruce #0B4430 | 10.8 : 1 | 1.5 : 1 | Light mode only |
| Slate blue #3B5F88 | 6.4 : 1 | 2.5 : 1 | Light mode only |
| Grey-text #6B635C | 5.7 : 1 | 2.8 : 1 | Light mode captions |
| Warm grey #BEB6AC | 1.8 : 1 | 8.3 : 1 | Dark mode captions only |
| Yellow, misty blue, light green | under 2.3 : 1 | over 6.7 : 1 | Fills only in light mode |

Rules:
- On off-white, pink, ochre, yellow, misty blue and light green are fills, with ink outlines or ink labels. They are never text or hairlines.
- On off-black, pink becomes readable and can be used for headings and links directly.
- No heavy contrast anywhere: no pure #000 or #FFF, no saturated colour blocks behind images, no black image frames.

### 3.4 Light and dark modes

The site rotates between two modes. Both use the same layout, type and spacing; only the tokens swap.

| Token | Light (default) | Dark |
|---|---|---|
| --bg | #FCFBFA paper | #221E1C ink |
| --fg | #221E1C ink | #FCFBFA paper |
| --fg-muted | #6B635C | #BEB6AC |
| --rule | #BEB6AC at 60% | #BEB6AC at 25% |
| --accent | #CF729B (fills, underlines, large headings) | #CF729B (text allowed) |
| --grain-opacity | 0.06 | 0.09 |

When to use which:
- Light (off-white): main pages, gallery, maps, atlas plates, reading pages. This is the default.
- Dark (off-black): section openers, the timeline/telescope pages, ASCII and net.art pieces, "archive at night" moments, full-bleed quotes. Use dark mode as a deliberate rhythm change, roughly one dark page for every three or four light ones, never two dark pages in a row unless they are one sequence.
- Inside a page, a single full-width band may switch mode (for example a dark ASCII band inside a light page). Do not mix modes within one card or tile.

---

## 4. Typography

### 4.1 Families

| Role | Family | Source | Notes |
|---|---|---|---|
| Headings, titles, nav, labels | Bricolage Grotesque (sans serif) | Google Fonts | Weights 400, 600, 700 |
| Body text, captions, long reading | Platypi (serif) | Google Fonts | Weights 400, 600 (bold). Load upright styles only |

Headings and titles are always sans serif. Body text is always serif. Bricolage Grotesque and Platypi are the only two typefaces; data labels, coordinates and figure codes use Bricolage Grotesque with tabular (fixed-width) numbers so columns still align. No monospace web font is loaded, and no other display serif is used, including on cover and section opener pages.

### 4.2 No italics

- No italic or oblique type anywhere unless explicitly requested for a specific item.
- Do not load italic font files. Set `font-style: normal` globally, including on `em`, `i`, `cite`, `blockquote`, `address` and `figcaption`.
- For emphasis use bold (Platypi 600 in body, Bricolage 600/700 in headings), or a pink underline for links.
- Titles of books, works and projects are set upright. Use quotation marks or bold if they need setting apart.

### 4.3 Type scale (desktop; scale factor 1.25, base 18px)

| Level | Use | Family / weight | Size / line height | Tracking | Case |
|---|---|---|---|---|---|
| Display | Cover title, chapter opener | Bricolage 700 | 72 / 76px | -0.02em | Sentence case |
| H1 | Page title | Bricolage 700 | 48 / 54px | -0.015em | Sentence case |
| H2 | Section heading | Bricolage 600 | 32 / 38px | -0.01em | Sentence case |
| H3 | Sub-section, card title | Bricolage 600 | 22 / 28px | 0 | Sentence case |
| Kicker / label | Section number, plate label above a heading | Bricolage 600 | 12 / 16px | +0.12em | UPPERCASE |
| Body | Running text | Platypi 400 | 18 / 29px | 0 | Sentence case |
| Body bold | Emphasis in body | Platypi 600 | 18 / 29px | 0 | |
| Lead | Intro paragraph | Platypi 400 | 22 / 33px | 0 | |
| Caption | Figure captions, sources | Platypi 400 | 14 / 20px | 0 | |
| Meta / data | Coordinates, dates, fig. codes, legends | Bricolage 400, tabular numbers | 12 / 16px | +0.04em | as needed |

Mobile: Display 44, H1 34, H2 26, H3 20, Body 17/27, Caption 13.

### 4.4 Text rules

- Measure: body text 60 to 72 characters per line (about 34rem). Never full width.
- Left aligned, ragged right. No justified text, no centred body paragraphs.
- Paragraph spacing: one line (1em) between paragraphs, no first-line indent.
- Heading spacing: space above a heading is twice the space below it.
- Every figure has a caption in the format: `Fig. 03` (meta style) then a caption sentence (Platypi), then the source line in grey-text.
- Numbers in data and coordinates use tabular figures (`font-variant-numeric: tabular-nums`) so columns align.

---

## 5. Grid, layout and white space

### 5.1 Grid

- Desktop: 12 columns, 1440px max content width, 24px gutters, outer margins of 6vw (minimum 48px).
- Tablet: 8 columns, 20px gutters, 40px margins.
- Mobile: 4 columns, 16px gutters, 20px margins.
- Base spacing unit 8px. Spacing scale: 8, 16, 24, 32, 48, 64, 96, 128, 192.
- Baseline: line heights and vertical spacing land on multiples of 8px where possible.

### 5.2 Visible grid layer (specimen sheet look)

Taken from the specimen and survey sheets on both boards. Use one of these per page, not several:
- Crosshairs: small "+" marks (9px, 1px stroke, --rule) at grid intersections behind gallery and catalogue layouts.
- Hairline grid: 1px lines in --rule at 25 to 40% opacity, used on map and data pages.
- Dot field: 1.5px dots at every grid intersection, used behind silhouette and parcel catalogues.

### 5.3 White space

- Section spacing: 128px between major sections on desktop (96px tablet, 64px mobile).
- Headers sit with at least 96px clear space above.
- Gallery items never touch; minimum gap 32px desktop.
- A page should have at least one area of deliberate emptiness (an empty column or an unfilled grid cell). Do not fill every cell.

---

## 6. Texture: grain and paper

- Grain: a fine, monochrome noise overlay on every page background, fixed to the viewport, `mix-blend-mode: multiply` in light mode and `screen` in dark mode, opacity per --grain-opacity. Generate it with an SVG `feTurbulence` filter (baseFrequency around 0.8, numOctaves 3) so no image file is needed.
- Paper: a very subtle fibre or mottled texture (large-scale noise, baseFrequency around 0.02) at 3 to 4% opacity on top of the paper colour. Optional on dark pages.
- Edge details: plate-style frames are allowed on map and diagram sheets (a 1px ink border inset 16px from the sheet edge, with a title block bottom-right like a survey map).
- Texture must never reduce text contrast below the values in 3.3. Keep grain off text layers.
- No drop shadows, gradients, glows, glassmorphism, or rounded "app" cards. Corners are square (0 radius); 2px radius maximum for buttons.

---

## 7. Imagery

### 7.1 Default treatment (gallery and main pages)

- All photographs are desaturated and softened. Target: about 25% saturation, 85% contrast, close to neutral (only a trace of warmth, so images do not turn yellow on the paper).
- CSS: `filter: grayscale(0.75) contrast(0.85) sepia(0.03) brightness(1.02);`
- Optionally multiply the image onto the paper colour so whites become off-white: `mix-blend-mode: multiply;` on light pages.
- No heavily contrasted, high saturation, HDR or crushed-black images. If an image is already high contrast, lift its blacks (brightness and contrast filter) before use.
- Images sit on the paper, not in boxes: no borders or shadows. Cut-out silhouettes on white are encouraged (collage style from the Pinterest board).

### 7.2 Hover state (pink)

- On hover or keyboard focus, the image takes on a pink duotone: a pink layer over the desaturated image with `mix-blend-mode: multiply` (or `screen` on dark pages), opacity 0.85, transition 300ms ease.
- The caption underline also turns pink.
- Touch devices: show the pink state on tap, then open.
- Respect `prefers-reduced-motion`: switch instantly with no transition.

### 7.3 Image types that belong

- Archival photographs (peat cutting, bogs, rural infrastructure), treated as above.
- Specimen photographs of objects and fragments, cut out, laid in grids.
- Satellite and aerial images, desaturated, with pink marking the area of focus only.
- ASCII renderings of photographs (see section 10).
- Scanned paper, drawings and hand-drawn diagrams (system diagrams for Atlas, Timelines, Telescope).

---

## 8. Maps

Maps follow the vintage survey sheet look from the MAPPING references.

- Base: paper colour with grain. Land in light green at 35 to 50% opacity, water in misty blue, uplands and peat in spruce at low opacity. Muted tones only; no saturated GIS defaults.
- Linework: ink at 0.5 to 1px for coastlines, roads and boundaries; slate blue for infrastructure (grid lines, cables, data centres); hairline contours in --grey.
- Graticule: a visible coordinate grid in --rule, with tick labels in the meta style (Bricolage 400, tabular numbers) at 10 to 11px around the frame.
- Focus: one pink area or pink point set per map (the subject). Everything else stays muted.
- Frame and title block: thin ink frame, title block bottom-right with map title (Bricolage 600), scale bar, north arrow (simple line), source and date (meta style).
- Legend: small square swatches with ink outlines, labels in Platypi 13px. Order legends in the same order as the palette hierarchy.
- No hatching (stated preference); use flat fills, dot stipple or line density instead.
- Basemap tiles, if used, must be greyscale and lightened (for example a light grey basemap with a paper-colour multiply).
- Scale sequence across pages: national, then county, then peatland cluster. Keep the frame, legend and graticule identical at each scale so they read as one atlas.

---

## 9. Diagrams and data visualisation

- Style reference: blueprint data sheets, star charts, circular timelines and the lines-to-dots timeline from the boards. Thin lines, small dots, generous space.
- Lines 1px (hairline 0.5px for grids); dots 6 to 12px; no 3D, no shadows, no gradients.
- Series colours, in order: pink (main data), spruce (peat), slate blue (infrastructure / data centres), ochre (extraction), light green, yellow, misty blue.
- Peat-related series use greens; data centre and infrastructure series use blues; the project's key series is pink.
- Axis labels and ticks in the meta style at 11px, grey-text. Titles in Bricolage 600. Annotations in Platypi 14px.
- Gridlines in --rule. Remove chart borders and background fills.
- Timelines: horizontal rule in ink, events as dots on short vertical stems, dates in the meta style below; extraction (past) to the left, projections (future) to the right, with projections drawn as dashed lines.
- Every chart is labelled as a figure (Fig. 00) with a source line.
- Hand-drawn system diagrams are scanned, cleaned to ink on paper, and placed without colour except a pink highlight on the key path.

---

## 10. Net.art and ASCII layer

Net.art here means the plain, structural language of the early web, kept restrained to match the academic look.

- ASCII images: photographs or map tiles converted to ASCII characters, ink on paper or paper on ink. ASCII needs equal-width characters to hold its shape, so render ASCII pieces as images (PNG or SVG exported from the generator) rather than live text. If an ASCII piece must be live text, use the device's built-in monospace (`font-family: monospace`) for that piece only; no monospace web font is loaded. Character ramp suggestion: ` .:-=+*#%@`. Optionally colour the densest characters pink.
- Use ASCII in dark mode bands, as loading states, as section dividers (a line of `+ - - - - +` or `.:.:.:`), or as the hover reveal of a gallery tile.
- Raw link lists: plain underlined text links in a list are a valid layout (index pages, sources pages).
- Plain metadata: file names, coordinates, dates, figure codes, small counters, set in the meta style.
- Pixel steps: cut-out images may use stepped, pixelated edges as in the collage references.
- Avoid: neon colours, blinking text, marquee scrolling, tiled backgrounds, cursor trails, glitch effects. Keep net.art as structure, not decoration.
- ASCII images must have alt text describing the source image.

---

## 11. Components

Navigation
- Top bar, no background fill, thin --rule line below. Project name left (Bricolage 600, 16px), links right (Bricolage 400, 14px, uppercase, +0.08em).
- Active page: pink underline 2px, offset 6px.
- A light/dark switch is a plain text toggle in the meta style: `[ light / dark ]`.

Links
- Body links: ink text with a 1px pink underline; hover thickens the underline to 2px and turns the text pink in dark mode only.

Buttons
- Text buttons with a 1px ink border, 0 to 2px radius, Bricolage 600 13px uppercase, padding 10 by 18px. Hover: pink fill, ink text.

Gallery tile
- Image (desaturated) + below it: `Fig. 12` (meta style 12px) and a one-line caption (Platypi 14px). Optional year or location in grey-text.
- No card background, no border. Hover: pink duotone on image, pink caption underline.

Plate (map or diagram sheet)
- Full-width sheet on paper, inset ink frame, title block bottom-right, figure number top-left in the meta style.

Headline gallery (floating headlines)
- Each headline as a small paper slip: Platypi 16px headline, source and date in the meta style. Slips sit on the dot-field grid with slight, fixed offsets (no rotation over 2 degrees). Hover: pink underline and lift the slip to full opacity from 80%.

Footer
- Thin rule, sources and credits in Platypi 13px, a date stamp and page number in the meta style, in the style of a plate number.

---

## 12. Page templates

| Page | Mode | Layout | Key visuals |
|---|---|---|---|
| Home / index | Light | Large title on a 12-col grid, short lead paragraph, plate-style index of sections | Crosshair grid layer, one desaturated hero image or ASCII image |
| Gallery | Light | Visual grid, 3 to 4 columns desktop, 2 tablet, 1 mobile, consistent image ratios per row | Desaturated images, pink hover, figure captions |
| Atlas (maps) | Light | One map plate per screen, text in a narrow column beside or below | Survey map style, graticule, pink focus |
| Timelines | Dark or light | Horizontal scrolling or stacked section timeline | Dots on stems, past solid, future dashed |
| Telescope / speculative | Dark | Full-bleed image or ASCII band, short text | ASCII, pink highlights, grain |
| Headlines | Light | Floating slips on a dot field | Meta-style source and date, pink hover |
| Sources / bibliography | Light | Single text column, raw link list | Meta-style dates, pink underlines |
| Section opener | Dark | Display title, kicker label, lots of space | Bricolage Grotesque Display title on off-black, grain |

---

## 13. Checklist for every new page

Before publishing any page, confirm:
1. Uses the tokens in section 14; no new colours or hex values.
2. Background is --paper or --ink, never #FFF or #000, with grain applied.
3. Headings in Bricolage Grotesque, body in Platypi, data labels in the Bricolage meta style. No other fonts.
4. No italics anywhere (check em, i, blockquote and captions).
5. Type sizes come from the scale in 4.3; a clear hierarchy of kicker, title, lead, body, caption.
6. Content sits on the 12-column grid with the section spacing in 5.3.
7. Images desaturated with the filter in 7.1, pink hover in 7.2.
8. No heavy contrast images, shadows, gradients or rounded cards.
9. Pink is the only attention colour; it is not used for body text on off-white.
10. Figures are numbered and captioned with a source line.
11. Light/dark rhythm respected (no two unrelated dark pages in a row).
12. Navigation, footer and figure numbering match the other pages.
13. Alt text on all images, including ASCII images; focus states visible.

---

## 14. CSS tokens (copy into every page)

```css
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700&family=Platypi:wght@400;600&display=swap');

:root {
  /* palette */
  --pink: #CF729B;
  --ochre: #D3913F;
  --yellow: #F4D387;
  --green-light: #99AD67;
  --spruce: #0B4430;
  --blue-mist: #BCD7E6;
  --blue-slate: #3B5F88;
  --ink: #221E1C;
  --grey: #BEB6AC;
  --grey-text: #6B635C;
  --paper: #FCFBFA;

  /* light mode (default) */
  --bg: var(--paper);
  --fg: var(--ink);
  --fg-muted: var(--grey-text);
  --rule: rgba(190, 182, 172, 0.6);
  --accent: var(--pink);
  --grain-opacity: 0.06;
  --grain-blend: multiply;

  /* type */
  --font-head: 'Bricolage Grotesque', system-ui, sans-serif;
  --font-body: 'Platypi', Georgia, serif;

  /* spacing */
  --s1: 8px; --s2: 16px; --s3: 24px; --s4: 32px; --s5: 48px;
  --s6: 64px; --s7: 96px; --s8: 128px; --s9: 192px;
  --measure: 34rem;
}

[data-mode="dark"] {
  --bg: var(--ink);
  --fg: var(--paper);
  --fg-muted: var(--grey);
  --rule: rgba(190, 182, 172, 0.25);
  --grain-opacity: 0.09;
  --grain-blend: screen;
}

html { background: var(--bg); color: var(--fg); }
body { font: 400 18px/1.6 var(--font-body); }
h1, h2, h3, h4, .label, nav { font-family: var(--font-head); }
h1 { font-weight: 700; font-size: 48px; line-height: 1.125; letter-spacing: -0.015em; }
h2 { font-weight: 600; font-size: 32px; line-height: 1.19; letter-spacing: -0.01em; }
h3 { font-weight: 600; font-size: 22px; line-height: 1.27; }
.label { font-weight: 600; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; }
.caption { font-size: 14px; line-height: 20px; color: var(--fg-muted); }
.meta, .fig { font-family: var(--font-head); font-weight: 400; font-size: 12px;
  letter-spacing: 0.04em; font-variant-numeric: tabular-nums; }
.ascii { font-family: monospace; white-space: pre; line-height: 1; } /* live ASCII only */
p { max-width: var(--measure); }
strong, b { font-weight: 600; }

/* no italics, ever, unless a class opts in */
*, em, i, cite, blockquote, address, figcaption { font-style: normal; }
.allow-italic { font-style: italic; }

a { color: inherit; text-decoration: underline; text-decoration-color: var(--pink);
    text-underline-offset: 4px; text-decoration-thickness: 1px; }
a:hover, a:focus-visible { text-decoration-thickness: 2px; }
[data-mode="dark"] a:hover { color: var(--pink); }

/* grain overlay */
body::after {
  content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 999;
  opacity: var(--grain-opacity); mix-blend-mode: var(--grain-blend);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* gallery images: desaturated, pink on hover */
.tile { position: relative; display: block; }
.tile img { display: block; width: 100%;
  filter: grayscale(0.75) contrast(0.85) sepia(0.03) brightness(1.02); }
.tile::after { content: ""; position: absolute; inset: 0; background: var(--pink);
  mix-blend-mode: multiply; opacity: 0; transition: opacity 300ms ease; }
[data-mode="dark"] .tile::after { mix-blend-mode: screen; }
.tile:hover::after, .tile:focus-visible::after { opacity: 0.85; }
@media (prefers-reduced-motion: reduce) { .tile::after { transition: none; } }

/* crosshair grid layer */
/* a 9px "+" every 96px, in the warm grey */
.grid-crosshair {
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><path d='M48 43.5v9M43.5 48h9' stroke='%23BEB6AC' stroke-width='1'/></svg>");
  background-size: 96px 96px;
}
```

---

## 15. Do and don't

Do
- Off-white or off-black paper with grain.
- Visible grids, crosshairs, graticules, figure numbers.
- Desaturated, softened images that turn pink on hover.
- Sans serif headings, serif body, sans with tabular numbers for data.
- Bold for emphasis.
- Large margins and empty cells.

Don't
- Use italics (unless requested).
- Use pure white, pure black, or high contrast photographs.
- Use pink for body text on off-white.
- Introduce colours outside the palette (including purples, the old berry/brique, the earlier pink #D6338A, the dropped red-orange #A04326, or the old yellow #F8C46C).
- Add shadows, gradients, rounded cards, hatching, or decorative glitch effects.
- Fill every grid cell.