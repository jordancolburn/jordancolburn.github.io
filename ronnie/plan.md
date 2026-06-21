# Build brief: "Radio Reels" — a tiny static site for streaming digitized tapes

**You are building a small, fully static website.** Follow this brief and produce:

- `index.html` — the whole site + player, self-contained (CSS in `<style>`, JS in `<script>`)
- `data.js` — the editable content (prefilled with 6 reels × 2 sides, placeholder tracks)
- `robots.txt` — `User-agent: * / Disallow: /`
- `README.md` — short: how to add audio/photos/tracks, encode, and deploy
- empty `audio/` and `photos/` folders

No build step. No frameworks. No dependencies except Google Fonts. It must run by
double-clicking `index.html` (so load data via `<script src="data.js">`, **not** `fetch()`,
to avoid file:// CORS issues). This is a real deployable site, not a sandboxed preview, so
`localStorage` is expected and used for resume + preferences.

---

## The project

A Father's Day gift: six old reel-to-reel radio tapes have been digitized. The site streams
them, shows the tape boxes as album art, and lets tracks be named over time. Each reel has
two sides; a side is roughly 1–2 hours. The brief in one line: **dead simple, static, fast,
warm, and easy to keep editing.**

## Five structural rules (these are what keep it simple — don't deviate)

1. **Static files _are_ the streaming.** A plain `<audio>` element pointing at an MP3 on a
   CDN streams and seeks instantly via HTTP range requests. Do **not** add HLS/DASH, a media
   server, or a service worker. None are needed.
2. **One audio file per side.** Never split audio into per-track files.
3. **Tracks are timestamps, not files.** A "track" is a name + a start time inside the side's
   single audio file (like podcast chapters). Renaming or adding one later is a one-line edit
   in `data.js`. Accept times written as `"1:02:14"`, `"3:45"`, or plain seconds `614`.
4. **No build step.** Plain HTML/CSS/JS; content lives in `data.js`.
5. **One quality is enough.** A 192 kbps MP3 streams fine. But structure the data so an
   optional smaller file (`audioLow`) makes a Full/Saver toggle appear automatically — dormant
   until used.

---

## Visual direction

Ground every choice in the object: a **vintage tube radio / tape deck glowing at night** —
deep walnut wood, warm amber dial light, a mechanical counter. Make it feel analog and warm,
but keep it highly legible (an older relative is the primary listener: generous sizing, large
touch targets, strong contrast).

Avoid the three generic AI looks: cream-background + high-contrast serif + terracotta;
near-black + acid-green/vermilion; broadsheet hairlines. This is warmer and more specific than
all three.

**Palette (CSS variables):**

```css
--bg:#1c1612;        /* deep walnut, in shadow */
--bg-deep:#140f0c;   /* transport / vignette   */
--surface:#271e18;   /* tape-box card          */
--surface-up:#322620;/* hover / lifted         */
--line:#3a2c22;      /* warm hairline          */
--amber:#e9a23c;     /* dial light (the one bold accent) */
--amber-soft:#f1c477;/* lit highlight          */
--amber-dim:#a07a40; /* unlit amber            */
--cream:#f2e8d7;     /* aged-label text        */
--taupe:#c4af94;     /* muted text             */
--taupe-dim:#8a7660; /* dimmest text           */
--oxide:#7a5230;     /* magnetic-tape brown    */
--glow:0 0 22px rgba(233,162,60,.28);
```

Body background: a soft radial warm glow at top fading to `--bg-deep` (the dial lighting the
cabinet). Use the amber glow sparingly — only on lit/active things (active side, counter,
playing reel). Everything else stays quiet.

**Typography** (one Google Fonts link):

- Display / headings: **Bricolage Grotesque** (600/700) — characterful, warm, not the serif cliché.
- Body: **Figtree** (400/500/600) — friendly and very legible.
- Mono: **Space Mono** (400/700) — for timestamps and the counter. Mono digits read as a
  mechanical tape counter and align cleanly; this is a deliberate, on-theme choice, not decoration.

**Copy:** warm, plain, sentence case. Title placeholder "Dad's Radio Reels"; subtitle e.g.
"Six tapes off the old reel-to-reel, cleaned up and digitized — happy Father's Day." Empty
states give direction, not mood ("not added yet", "track names can be added later").

---

## Signature element: the reel player animation

This is the one memorable thing — spend the boldness here, keep everything else disciplined.

**Target (the nice version):** in the now-playing transport, draw a **tape deck face**: two
reels side by side (supply + take-up) connected by a thin tape path that dips over a head
between them. Both reels rotate at the same angular speed while audio plays and stop the
instant it pauses. Bonus, if cheap to do: the **take-up reel's tape pack visibly thickens** as
the side progresses (hub radius grows from ~25% → ~75% with `currentTime / duration`), and the
supply reel thins — so the animation literally shows how far through the side you are.

**Minimum version (always acceptable):** a single reel SVG that spins while playing. Don't
ship nothing here — the spin is the soul of the page.

A reel glyph = outer ring + solid center hub + three small holes evenly spaced around the hub:

```html
<svg viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
  <circle cx="20" cy="20" r="4.4" fill="currentColor"/>
  <circle cx="20" cy="8.5"  r="2.4" fill="currentColor"/>
  <circle cx="30" cy="25.8" r="2.4" fill="currentColor"/>
  <circle cx="10" cy="25.8" r="2.4" fill="currentColor"/>
</svg>
```

Rotate via CSS (`@keyframes spin { to { transform: rotate(360deg) } }`, ~2.6s linear, toggled
by a `.spinning` class on `play`/`pause`). **Respect `prefers-reduced-motion`** — disable the
spin entirely there. Keep the animation tasteful and singular; scattered extra motion makes a
page feel AI-generated.

---

## Album art

Each reel's box photos double as album art.

- Show the **active reel's first photo as a square cover** in the now-playing transport (~56px),
  next to (or in place of) the spinning reel — your choice which reads better; ideally the cover
  sits beside the reels.
- On each reel card, the box photo is the thumbnail.
- Clicking any cover/thumbnail opens a **lightbox**; if the reel has multiple photos, clicking
  cycles through them; Esc or a click on the backdrop closes.
- Graceful fallback when a photo is missing: a small "no photo yet" placeholder (also handle
  `img.onerror`, since files may not exist yet).

---

## Player behavior (keep playback simple and obvious)

A **sticky tape-deck transport** pinned to the bottom of the viewport, containing: album-art
cover + spinning reel(s); reel·side label; current track name; a mono counter `current / total`;
prev-track / play-pause / next-track buttons; a seek bar; a volume slider.

- Click a **side** → load it and start playing; mark it active; render its track list beneath it.
- Click a **track** → seek to its start time and play.
- As playback crosses each timestamp, **highlight the active track** and show its name in the transport.
- **Prev/next-track**: jump to adjacent chapter starts. Prev within the first ~3s of a track and
  it goes to the previous track; otherwise it restarts the current one. Next past the last track
  advances to the next side.
- **Auto-advance**: when a side ends, automatically load the next side (across reels too) so a
  reel keeps rolling for passive listening.
- **Resume**: throttle-save `currentTime` per side to `localStorage`; on reopening a side, restore
  it (skip if within a few seconds of start/end). Also save volume and the quality preference.
- **Keyboard + a11y**: Space toggles play/pause (when not focused in a control); Left/Right on the
  focused seek bar nudge ±15s; visible focus rings; ARIA labels on transport buttons; responsive
  down to ~360px (on narrow screens you may hide the volume slider and the "/ total" half of the
  counter to save room).

A small **Full/Saver** quality button appears only if any side defines `audioLow`; toggling it
swaps the source while preserving position and play state.

---

## Data model — `data.js` (the only file edited over time)

```js
window.SITE_DATA = {
  title: "Dad's Radio Reels",
  subtitle: "Six tapes off the old reel-to-reel, cleaned up and digitized — happy Father's Day.",
  reels: [
    {
      title: "Reel 1",
      note: "",                       // optional, e.g. a date
      photos: ["photos/reel-1.jpg"],  // first = album art; add as many as you have
      sides: [
        {
          label: "Side A",
          audio: "",                  // "audio/reel-1-a.mp3" OR a full https://...r2.dev/... URL; "" = not added yet
          // audioLow: "audio/reel-1-a-low.mp3",  // optional; enables the Full/Saver toggle
          tracks: [
            { title: "Untitled 1", start: "0:00" }
            // { title: "The swing number", start: "12:30" },
          ]
        },
        { label: "Side B", audio: "", tracks: [{ title: "Untitled 1", start: "0:00" }] }
      ]
    }
    // ...Reels 2–6, same shape
  ]
};
```

Prefill all **6 reels × 2 sides**, each with one placeholder track at `0:00`. Time helper:
parse a value that's a number (seconds) or a `"h:m:s"` / `"m:s"` string; sort tracks by start;
format seconds back to `H:MM:SS` (drop the hour when zero) for display.

Both relative paths and absolute `https://` URLs must work for `audio`/`photos`, so the user
can start local and move audio to R2 later by editing only `data.js`.

---

## Encoding (master → web file) — put in README

Keep a **lossless WAV master** of each side (24-bit) as the real archive; derive the web MP3:

```bash
# good quality, consistent loudness across reels, streams instantly
ffmpeg -i reel-1-a.wav -af loudnorm=I=-16:TP=-1.5:LRA=11 \
  -codec:a libmp3lame -b:a 192k -ar 44100 audio/reel-1-a.mp3

# optional smaller copy (only if a file ever lags on a weak connection)
ffmpeg -i reel-1-a.wav -codec:a libmp3lame -b:a 96k -ar 44100 audio/reel-1-a-low.mp3
```

Resize box photos so the page stays fast (e.g. ImageMagick, long edge ≤1600px, quality ~82).

---

## Hosting + privacy — put in README

- **Site → Cloudflare Pages** (free, unlimited bandwidth): drag the folder into a Pages project.
- **Audio → Cloudflare R2** (free 10 GB, no egress fees): large media shouldn't sit on Pages;
  enable public access on the bucket, upload the MP3s, and use the resulting `https://…r2.dev/…`
  links in `data.js`. Photos are small enough to stay in `photos/`.
- **Unlisted:** a `noindex` meta tag in `index.html` keeps it out of search engines anywhere
  (note: `robots.txt` only works at a site root, so it's only effective if the reels site is the
  whole root). Share the link privately. For a real password, Cloudflare Access can gate it free.

---

## Quality floor (don't skip)

Responsive to mobile; visible keyboard focus; `prefers-reduced-motion` respected (no reel spin);
graceful missing-file handling for both audio and photos; nothing depends on a server. Build the
amber-on-walnut tape-deck look with restraint — the spinning reels are the one flourish.
