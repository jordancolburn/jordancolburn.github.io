---
layout: post
title: MIDI Controller - Converting a Guitar Hero Guitar
date: 2008-10-20 20:04:41
categories: 
permalink: /:year/:month/:day/:title/
---
<p><strong><span style="text-decoration: underline;">Project</span></strong> I'm currently working on a project to create&nbsp;a multi ribbon controller to send constatly variable pitch over MIDI.&nbsp; The project will be contained in a hacked guitar hero controller and make use of existing GHC buttons and sensors.&nbsp; It uses arduino to tie all of it together and do the processing work.&nbsp; It will be battery powered and stand alone, no computer neccesary.</p>
<p>There will be two 200mm&nbsp;softpot&nbsp;touch strips that act as one octave "strings".&nbsp; The notes will be controlled using the guitar hero "strummer" to round notes to nearest pitch and retrigger the note.&nbsp; Volume will be controlled by a smaller 50mm touchstrip underneath the strummer. Filter will be controlled by the whammy bar. My Progress so far:</p>
<p>updates:</p>
<p><span style="text-decoration: underline;">10/11/08</span> -wired&nbsp;all GHC buttons&nbsp;to arduino proto shield and have them succesful talking over serial to the computer -sanded extra frets on GHC to make a smooth surface for the ribbons -wired whammy bar potentiometer to arduino and have it sending the value over serial</p>
<p><span style="text-decoration: underline;">10/20/08</span> -turned the built in guitar hero to PS2 cable into a midi out from arduino -have midi out talking to Korg Triton Le -working on arduino code to get a stable, debounced, and accurate button pressing controlling simple MIDI notes, hopefully like a simple version of the "GHMC", which can be found at: <a href="http://slapyak.wordpress.com/guitar-hero-midi-controller/">http://slapyak.wordpress.com/guitar-hero-midi-controller/</a></p>