---
layout: post
title: Multiple Exports from Premiere Using Media Encoder
date: 2014-08-18 13:31:27
categories: 
permalink: /:year/:month/:day/:title/
---
<p><a href="/uploads/2014/08/MediaEncoder.png"><img class="alignnone size-full wp-image-939" src="/uploads/2014/08/MediaEncoder.png" alt="MediaEncoder" width="582" height="211" /></a></p>
<p>For my wife's videography business, we constantly found ourselves exporting multiple versions of files at different times. We would edit a version with a logo watermark for the web and then have to go back later and re-edit when it came time to send out DVDs and also save a master without watermarks. After a bit of experimentation, we finally figured out a simple way to generate all the delivery formats we need the first time.</p>
<!--more-->
<p>In Premiere, we complete the edit without any watermarks. We then go to export and select queue to send the sequence to Adobe Media Encoder. The encode settings you pick do not matter, as we will add new presets in Media Encoder, but naming the sequence the same as your expected output file and choosing the output location will minimize the amount of manual renaming you do in ME. After that, it is as simple as having our 3 most used presets saved (h264 with watermark added in the encoder effects, h264 with no watermark, and mpeg2 for dvd). Select all presets you need and apply them to the queue, then delete the original queue entry leaving just the three you created in ME. Now, run the queue and enjoy getting all the file formats you need in one pass. Note: &nbsp;You can do this automatically with watch folders in Media Encoder, but since our formats vary some (i.e. DVD menu sequences only need to be rendered once for DVD), I like being able to manually choose before running the queue. &nbsp;</p>