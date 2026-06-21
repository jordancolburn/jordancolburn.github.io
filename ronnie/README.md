# Ronnie's Radio Reels

A tiny, self-contained page that streams six digitized reel-to-reel tapes, shows the
tape boxes as album art, and lets tracks be named over time. It lives inside the main
Jekyll site as a plain static folder (like the games under `kids/`), so Jekyll copies
it verbatim and serves it at **`/ronnie/`** — e.g. `https://jordancolburn.com/ronnie/`.
No front matter, no Liquid, no build step of its own. It also still runs by
double-clicking `index.html`.

You only ever edit one file: **`data.js`**.

---

## Adding a side's audio

1. Encode the side to an MP3 (see **Encoding** below) and drop it in `audio/`,
   e.g. `audio/reel-1-a.mp3`.
2. In `data.js`, set that side's `audio` to the path:

   ```js
   { label: "Side A", audio: "audio/reel-1-a.mp3", tracks: [ ... ] }
   ```

3. Reload the page. The side button lights up and is playable.

A side with `audio: ""` shows as "not added yet" and is disabled — so you can ship
with just one side ready and fill in the rest as you digitize them.

You can also point `audio` at a full URL once you move files to R2:

```js
audio: "https://xxxx.r2.dev/reel-1-a.mp3"
```

Both relative paths and `https://` URLs work, so you can start local and move audio
to the cloud later by editing only `data.js`.

## Adding / naming tracks

A track is just a **name + a start time** inside the side's single audio file
(like podcast chapters). No need to split audio.

```js
tracks: [
  { title: "Sign-on and weather", start: "0:00" },
  { title: "The swing number",    start: "12:30" },
  { title: "Ad break",            start: "1:02:14" }
]
```

Times can be written as `"1:02:14"`, `"3:45"`, or plain seconds like `614`. Tracks
are sorted by start time automatically, so you can add them in any order. Leave a
side with one `0:00` placeholder track and it just plays straight through.

## Adding photos

Put box photos in `photos/` and list them on the reel. The **first** photo is the
album art / cover.

```js
photos: ["photos/reel-1.jpg", "photos/reel-1-back.jpg"]
```

Clicking a cover or thumbnail opens a lightbox; if there are multiple photos,
clicking cycles through them. Missing photos fall back to a "no photo yet"
placeholder, so it's safe to reference files you haven't added yet.

## Downloads

Every ready side has a **download** button (a small arrow next to the side, and a
"Download" button in the player for the side that's playing). It saves that side's
MP3 with a friendly name like `Dad's Radio Reels - Reel 1 - Side A.mp3`.

Note: forced "Save as" with that filename works for files served from this site
(the `audio/` folder). If you later move audio to **R2** (a different domain),
browsers may instead open the file in a new tab — it's still downloadable from
there (right-click → Save), just not a one-click save. For one-click downloads of
R2 files, serve them through a custom domain on the same site, or keep the master
MP3s in `audio/`.

## The "burning to CDs" note

The line under the subtitle ("Burning these to CDs for you too…") is the `notice`
field in `data.js`. Edit it or set it to `""` to hide it.

## Optional: Full / Saver quality

If a side ever lags on a weak connection, add a smaller copy and set `audioLow`:

```js
{ label: "Side A", audio: "audio/reel-1-a.mp3",
  audioLow: "audio/reel-1-a-low.mp3", tracks: [ ... ] }
```

As soon as **any** side defines `audioLow`, a small **Full / Saver** button appears
in the player. Toggling it swaps quality while keeping your place. If no side has
`audioLow`, the button stays hidden.

---

## Encoding (master → web file)

Keep a **lossless WAV master** of each side (24-bit) as the real archive, and derive
the web MP3 from it. This gives good quality, consistent loudness across reels, and
streams + seeks instantly via HTTP range requests.

```bash
# main web file: 192 kbps, loudness-normalized
ffmpeg -i reel-1-a.wav -af loudnorm=I=-16:TP=-1.5:LRA=11 \
  -codec:a libmp3lame -b:a 192k -ar 44100 audio/reel-1-a.mp3

# optional smaller copy (only if a file ever lags on a weak connection)
ffmpeg -i reel-1-a.wav -codec:a libmp3lame -b:a 96k -ar 44100 audio/reel-1-a-low.mp3
```

Resize box photos so the page stays fast (long edge ≤ 1600px, quality ~82):

```bash
# ImageMagick
magick reel-1.jpg -resize 1600x1600\> -quality 82 photos/reel-1.jpg
```

---

## Deploying

This folder is a self-contained static site. Two good options:

### Cloudflare Pages (recommended for the standalone site)
- Free, unlimited bandwidth. Drag this folder into a Pages project, or connect the repo.
- Put large audio on **Cloudflare R2** (free 10 GB, no egress fees): enable public
  access on the bucket, upload the MP3s, and use the `https://…r2.dev/…` links in
  `data.js`. Photos are small enough to stay in `photos/`.

### GitHub Pages (as a subfolder of an existing site)
- If this lives at `…/ronnie/` in a GitHub Pages repo, it's served at
  `https://yourname.github.io/ronnie/`. All paths here are relative, so it just works.

## Keeping it unlisted

- `index.html` includes `<meta name="robots" content="noindex, nofollow">`, which keeps
  it out of search engines **anywhere** (this is the reliable one for a subfolder).
- `robots.txt` (`Disallow: /`) only applies when the site is at a domain **root**, so
  it helps for the standalone Cloudflare Pages deploy but not for a `…/ronnie/` subfolder.
- Just share the link privately. For a real password, **Cloudflare Access** can gate the
  site for free.
