// ─────────────────────────────────────────────────────────────────────────────
// Ronnie's Radio Reels — content file
//
// This is the ONLY file you edit over time. No build step, no tools.
// After editing, just reload the page (or re-deploy).
//
// Quick guide
//   • audio:  "audio/whatever.mp3"  (a file in the audio/ folder)
//             OR a full link like "https://xxxx.r2.dev/whatever.mp3"
//             OR "" if you haven't added that side yet (shows "coming soon").
//   • photos: first photo is the album art. Add as many as you like.
//   • tracks: a track is just a NAME + a START TIME inside the side's audio.
//             Times can be "1:02:14", "3:45", or plain seconds like 614.
//             Add or rename tracks anytime — it's a one-line edit.
//   • audioLow (optional): a smaller mp3 for weak connections. Adding it to
//             ANY side makes a "Full / Saver" button appear automatically.
//
// NOTE: titles + album-art assignments below are a best guess from the
// filenames and box photos — swap any `title`, `note`, or `photos` line if a
// box belongs to a different tape.
// ─────────────────────────────────────────────────────────────────────────────

window.SITE_DATA = {
  title: "Ronnie's Radio Reels",
  subtitle:
    "Five tapes off the old reel-to-reel, cleaned up and digitized — Happy Father's Day.",
  // Optional little note shown under the subtitle. Set to "" to hide it.
  notice:
    "Burning these to CDs for you too — but they live here so you can play them anytime.",
  reels: [
    {
      title: "WHFS · 2",
      note: "",
      photos: ["photos/PXL_20260621_144441818.jpg"],
      sides: [
        {
          label: "Side A",
          audio: "audio/WHFS-2-side1.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
        {
          label: "Side B",
          audio: "audio/WHFS-2-side2.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
      ],
    },
    {
      title: "WHFS · Tape 35",
      note: "",
      photos: ["photos/PXL_20260621_144423090.jpg"],
      sides: [
        {
          label: "Side A",
          audio: "audio/WHFS-1-tape35-side1.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
        {
          label: "Side B",
          audio: "audio/WHFS-1-tape35-side2.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
      ],
    },
    {
      title: "WHFS · Tape 16",
      note: "",
      photos: ["photos/PXL_20260621_144405183.jpg"],
      sides: [
        {
          label: "Side A",
          audio: "audio/WHFS-1-tape16-side1.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
        {
          label: "Side B",
          audio: "audio/WHFS-1-tape16-side2.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
      ],
    },
    {
      title: "WHFS · Tape 6",
      note: "",
      photos: ["photos/PXL_20260621_144503759.jpg"],
      sides: [
        {
          label: "Side A",
          audio: "audio/WHFS-tape6-side1.mp3",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
        {
          label: "Side B",
          audio: "",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
      ],
    },
    {
      title: "WHFS · Tape 32",
      note: "",
      photos: ["photos/PXL_20260621_144527296.jpg"],
      sides: [
        {
          label: "Side A",
          audio: "",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
        {
          label: "Side B",
          audio: "",
          tracks: [{ title: "Untitled 1", start: "0:00" }],
        },
      ],
    },
  ],
};
