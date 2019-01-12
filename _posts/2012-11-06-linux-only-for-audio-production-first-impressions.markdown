---
layout: post
title: Linux Only For Audio Production - First Impressions
date: 2012-11-06 12:45:12
categories: 
permalink: /:year/:month/:day/:title/
---
<p>So I finally did it. &nbsp;I sold my beloved Pro Tools system and moved away from the software I've been using for almost a decade and learned audio recording on. &nbsp;It was a tough decision I struggled with for a while, but I believe it was worth it. First of all, let me explain my reasons for switching to an open source OS and software:</p>
<p><strong>1. I'm a geek:&nbsp;</strong>Being able to download the source code and tinker appeals to my nerdy programmer side, as does being able to discuss the software with it's developers and users on the very active community sites that often surround open source software.</p>
<p><strong>2. I'm cheap:&nbsp;</strong>I got tired of paying hundreds of dollars every two years just to update and gain a bunch of features that I mostly don't use.</p>
<p>&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/0rmPoqjYQsw?rel=0" frameborder="0" width="560" height="315"></iframe></p>
<p>The guitar effects and recording for video sync in this demo were done on linux with open source tools I took a step back and realized that all the basic audio tasks I &nbsp;do could be accomplished using freely available software.</p>
<p>&nbsp;</p>
<p>Making the jump was hard at first and I want to share a couple of tips that I found along the way.</p>
<!--more-->
<p><strong>1. Get the right Audio Interface:</strong>&nbsp; My DIGI 003 didn't work with linux (although some people at FFADO and ALSA have made some progress recently) So I sold it and downsized to a Presonus 22VSL. &nbsp;It works great with linux and the 1818VSL is reported to work well also (I plan to upgrade later if I get back into recording bands and not just myself). &nbsp;Do some research because linux audio support is mostly ignored by manufacturers and compatibility is very much at your own risk.</p>
<p><strong>2. Optimize your install for audio</strong>: I had many xruns (Audio Dropouts) with the stock install. &nbsp;Linux Musicians has a great <a href="http://www.wiki.linuxmusicians.com/doku.php?id=system_configuration">System Configuration Guide</a>&nbsp;that can really help sort out some issues. &nbsp;My main tip would be to disable wireless on laptop or compact computers like my mac mini, as it was causing some USB&nbsp;bottle-necking. &nbsp;Take the time to do this first as any efforts to try other software will be frustrating if you can't get clean audio.</p>
<p><strong>3. &nbsp;Not for the faint of heart:</strong>&nbsp; &nbsp;Because of the many variables involved, I suggest that if you don't at least partially self describe as a geek, you should maybe stick to Mac for audio production. &nbsp;There weren't any huge issues to work around but it did take some time, and that would be very disheartening to anybody who wants to avoid technical details and just make music (I on the other hand, love technical details probably too much....discussion for another day).</p>
<p><strong>4. &nbsp;Experiment:&nbsp;</strong>The best advice I can give is to experiment. &nbsp;The software is free so try everything you can sudo apt-get your hands on. &nbsp;JACK makes it easy to connect all kinds of software and a tool like Patchage will make it easy to visualize. &nbsp;My favorite workflow is to run everything through effects like Rakkarak and record it straight to disc as audio in Ardour. &nbsp;Sure, I can't recall settings like with plugins, but it makes my workflow a lot faster and is really great for layering guitar and synth textures.</p>