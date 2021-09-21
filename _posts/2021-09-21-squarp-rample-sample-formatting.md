---
published: true
layout: post
date: "2021-09-21 08:30:00 +0500."
permalink: "/:year/:month/:day/:title/"
---

I just got a Squarp Rample, which is a eurorack module for sample playback and I am loving it! It's got tons of onboard effects and CV options and adds a lot of sample mangling possibilities for small rigs.

However, I hit two issues with it that I'd like to mention here in case anyone else stumbles across them. The first was that in firmware version 1.41, the v/oct pitch option almost had a "slew" and it took a while to jump between notes. The quick fix is to revert to version 1.40 and the folks at squarp are working on a fix moving forward.

The other issue was a little harder to track down and that was my exports from Apple Logic DAW don't load onto the Rample. To fix this, first make sure you are exporting mono 16 bit files (unless you're following squarp's instructions for splitting stereo files across multiple voices).

Then you need to strip out the metadata. This can be a little involved, but once you have the appropriate software, it can just take seconds. The main software you need is ffmpeg, and I'll provide mac instructions since this fixes logic, but I'm sure this solution can work for other DAWs with issues as well. If you have homebrew for mac simply run:

`brew install ffmpeg`

If you don't, search for homebrew and follow the instructions to install it. Once installed, you just need to run two commands to iterate through all the files in your export folder to clean them:

```
mkdir stripped
for i in ./*.wav; ffmpeg -i $i -map_metadata -1 -codec copy "stripped/$i";
```

This creates a new folder named stripped and creates new copies of your files that now work with the Rample. Enjoy!
