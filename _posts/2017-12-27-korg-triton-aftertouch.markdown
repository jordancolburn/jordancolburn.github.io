---
layout: post
title: Adjusting Aftertouch on a Korg Triton LE
date: 2017-12-27 03:15:29
categories: 
image: /uploads/mce_filebrowser/2017/12/27/unnamed_2.jpg
permalink: /:year/:month/:day/:title/
---
<p>This all started when I recently played a Dave Smith Pro 2 in a music store and found it to be incredibly expressive. Specifically, the aftertouch was amazing and allowed me to really dig in and accent notes in a more expressive way similar to what I might do on a guitar.</p>
<p><img src="/uploads/mce_filebrowser/2017/12/27/unnamed_1_72mfBCP.jpg" alt="" width="400" height="300" /></p>
<p>In an attempt to stave off the gear lust and avoid getting another keyboard, I went home and tried to program some similar patches on my Korg Triton LE 61-key and found myself disapointed. Even after trying all of the after touch curves, it seems like it was basically just on/off and I had to dig in really really hard to make anything happen.</p>
<p>So I found out that many keyboads have a small auxillary circuit board just managing aftertouch inside.&nbsp;These instructions should work on a Korg Triton LE, but will probably work on regular tritons, karma, trinity and even keyboards from roland and other manufacturers, since I think many of the manufacturers used a smilar supplier for keyboards and aftertouch.</p>
<p>** Disclaimer: This simple tip assumes you have basic knowledge of electronics and repair. I am not liable for any injury to yourself or your equipment if you follow these tips and do not know what you are doing **</p>
<p>With that out of the way, first try all of the aftertouch curves in the global settings. If one of those works, Great! If not, you are in the same boat as me and likely need a hardware adjustment. First, remove all screws from the back of the keyboard and find the board underneath the buttons above the joystick. Mine has one potentiometer that can adjust the offset of the aftertouch signal. You can also see where another potentiometer can adjust the gain, but mine has been replaced by a resistor (probably at the factory in an attempt to save like 10 cents on the part).</p>
<p>&nbsp;<img src="/uploads/mce_filebrowser/2017/12/27/unnamed_2.jpg" alt="" width="400" height="300" /></p>
<p>Then, I had to prop my keyboard up vertically to make sure I could still pay some test notes and adjust the offset knob. Be careful since the keys are probably no longer attached to anything. Plug in power and headphones and find a sound with a decent aftertouch modulation routing (make sure it does something very noticeable). I went to the init piano patch, reduced the filter halfway and used aftertouch to control the filter cutoff with very high intensity. This way the sound should brighten up smoothly as you dig into the aftertouch. Unfortunately, with my bad aftertouch, it was still on/off with a dull sound and a super bright jump as I dug in.</p>
<p><img src="/uploads/mce_filebrowser/2017/12/27/unnamed.jpg" alt="" width="400" height="300" /></p>
<p>So I swept the offset potentiometer trying notes until I found a set point that resulted in a smooth transition that would allow a lot of expressive playing. Now that you've found your sweet spot, close up the keyboard and enjoy playing it!</p>
<p>&nbsp;</p>