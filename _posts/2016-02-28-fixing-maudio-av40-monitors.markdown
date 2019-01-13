---
layout: post
title: Fixing Broken M-Audio AV40 Speakers
date: 2016-02-28 21:34:17
categories: 
image: /uploads/mce_filebrowser/2016/02/28/IMG_20160228_005218.jpg
permalink: /:year/:month/:day/:title/
---
<p>I recently aqquired a set of M-Audio AV-40 powered speakers that had died without warning on their previous owner. The power light still turned on, but only the right speaker played some crackling audio. A lot of online sources mentioned various capacitors that might need to be replaced, so I figured I would open it up and try.</p>
<p>Since none of the online guides totally solved my issue, I figured I would make this post to help out anyone else who may have my specific issue. My first problem was blown power supply filter capacitors similar to this blog post (<a href="http://blog.melissadunphy.com/2013/12/fixing-buzz-in-my-m-audio-av-40-speakers.html">http://blog.melissadunphy.com/2013/12/fixing-buzz-in-my-m-audio-av-40-speakers.html</a>). The replacements I picked up were much too large, so it took some creative jumper wires and configuration to get them to fit on the board.</p>
<p><img src="/uploads/mce_filebrowser/2016/02/28/IMG_20160228_005218.jpg" alt="" width="447" height="335" /></p>
<!--more-->
<p>After replacing the filter caps, the right speaker began working completely, but the left sounded fine when turned up, but was 20dB queiter than the right speaker (I troubleshooted by unplugging the right speaker). Some other posts led me to believe one of the multitude of 22uF capacitors was to blame. I tried replacing a few at a time and finally found the culprit in capacitor c13 as you can see highlighted in the picture above.</p>
<p>Replacing this capacitor solved the riddle and now I have a pretty great portable set of studio monitors for free. They don't sound as clear or detailed as some of my larger Event and Mackie monitors, but for mobile tracking, they should be a big help!</p>