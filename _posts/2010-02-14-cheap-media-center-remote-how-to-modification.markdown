---
layout: post
title: Cheap Media Center Remote-How To Modification
date: 2010-02-14 01:36:00
categories: 
permalink: /:year/:month/:day/:title/
---
<p><a href="/uploads/2010/02/img_09231.jpg"><img class="alignnone size-large wp-image-474" title="img_09231" src="/uploads/2010/02/img_09231-1024x768.jpg" alt="" width="335" height="251" /></a></p>
<p>Lately I've been using an old Gateway tablet pc running an extra version of Windows Vista as a media center computer in our living room. I had been using the free program Mediamote on my iPhone to control the the computer from the sofa, but none of my roommates have iPhones and never used the media center. I was looking for a cheap remote at best buy when I found the Antec Veris Home Basic remote and receiver for $15. For desktops, it's a pretty cool add-on to a 3.5" bay that can turn the pc on and off and control the Media Center software. Since my PC was a laptop and could not make the proper internal connections, I had to be a little creative to get the IR receiver running.</p>
<!--more-->
<p>First I unscrewed circuit board from the case. I realized that the board was getting now power from usb, so I soldered a jumped to connect the usb power(red wire) to the open hole labeled pwr2. This and a USB connection lit up the power indicator and blinked in response to a remote button push, but the computer still did not receive the input.</p>
<p><img class="alignnone size-large wp-image-476" style="float: left;" title="img_09221" src="/uploads/2010/02/img_09221-1024x768.jpg" alt="" width="329" height="247" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>The next step is to solder a jumper between the pins labeled PWR1 and CN1 on the other side of the plastic connector that is meant to be plugged into the large ribbon cable. After this, the receiver picked up all signals and controlled media center flawlessly. Reattach the circuit board to the case, tape up excess wires, flip the case upside down and you have a fully functioning USB IR reciever and remote for only $15.</p>
<p>&nbsp;</p>