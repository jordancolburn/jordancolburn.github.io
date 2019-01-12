---
layout: post
title: Plasma Speaker
date: 2011-05-17 18:23:55
categories: 
permalink: /:year/:month/:day/:title/
---
<p><em>This post is a brief overview of a design project done for a senior design class at the University of Louisville. &nbsp;The idea originated with Paul Faget and Seth Tucker. &nbsp;In addition to Paul, Seth and I, we also had two mechanical engineers on the team: Shawn Day and Phillip Shepard. &nbsp;All the information below is drawn from some of the documentation we had to do for the course credit. &nbsp;It should be enough to give a brief overview, but feel free to comment or email me for more information.</em></p>
<p><iframe src="https://www.youtube.com/embed/vQ5HFBm0TsQ?rel=0" frameborder="0" width="560" height="315"></iframe></p>
<p><iframe src="https://www.youtube.com/embed/rEmfBESaMVI?rel=0" frameborder="0" width="560" height="315"></iframe></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Background</strong></span></span></span></span></p>
<p align="LEFT"><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">A plasma speaker is an audio playback mechanism that uses an arc between two electrodes as a sound source. By modulating the current through the plasma channel in conjunction with an audio input, thermal changes are induced on the air around the arc, resulting in a sound wave.</span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">Traditional speakers are limited by their mass and directionality. The inertia in a traditional paper or film tweeter causes small distortions when playing back high frequency audio. Using a plasma speaker in place of a traditional tweeter provides a possible way to create a more accurate audio playback system.</span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong><!--more-->System Operation</strong></span></span></span></span></p>
<p align="LEFT"><a href="/uploads/2011/05/sds-block-diagram-whole-system-rev2.png"><img class="alignnone size-medium wp-image-247" title="SDS Block Diagram, Whole System rev2" src="/uploads/2011/05/sds-block-diagram-whole-system-rev2.png?w=300" alt="" width="400" height="200" /></a></p>
<p align="LEFT"><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Because a plasma speaker can not practically reproduce low frequencies, the system is designed to integrate with an existing speaker system. An audio source such as an MP3 player can be plugged into the Audio In (3) of the system. The Signal Processor first modulates and then outputs (5) the Audio In signal to be reproduced by the Plasma Generator. The Plasma Generator has a natural frequency response that allows it to only reproduce the high frequencies (roughly greater than 1 kHz). Because of this, the Signal Processor filters the Audio In and so that low frequency portions of the audio are sent to Audio Out (2). This Audio Out can be run into the input of an existing audio playback system. In this way, the user can easily incorporate the Plasma Speaker System into their existing equipment and create a full range sound system.</span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>System Requirements</strong></span></span></span></span></p>
<ul>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Operate on 120V AC from the wall</span></li>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Produce high frequency audio signal through a plasma channel</span></li>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Have similar frequency response to a traditional audio system</span></li>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Send the low frequency component of the Audio In to the Audio Output through an adjustable crossover</span></li>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Provide a method to adjust the volume of the Plasma Generator and Audio Out simultaneously</span></li>
<li><span class="Apple-style-span" style="font-family: Arial, sans-serif; font-size: small;">Adjustable electrode spacing on the Plasma Generator</span></li>
</ul>
<div>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Signal Processor</strong></span></span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><a href="/uploads/2011/05/sds-block-diagram-singal-processor-rev2.png"><img class="alignnone size-medium wp-image-250" title="SDS Block Diagram, Singal Processor rev2" src="/uploads/2011/05/sds-block-diagram-singal-processor-rev2.png?w=300" alt="" width="300" height="184" /></a></span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><strong><a href="/uploads/2011/05/driver-single-channel-bw.png"><img title="Driver - Single Channel BW" src="/uploads/2011/05/driver-single-channel-bw.png?w=300" alt="" width="500" height="235" /></a></strong></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">The signal processor is the brain of the system. The Audio In goes to the Filter Network, where the low frequency portion of the audio is sent to the Audio Out. The unfiltered Audio In signal is then sent to the Pulse Width Modulator (PWM) stage. This signal is sampled by the PWM IC&rsquo;s onboard comparator, producing a single sided PWM signal. The PWM signal is then amplified by sending it to the gates of two power MOSFETS which are in series with the output to the plasma generator. These MOSFETS allow current to flow through the load when they are enabled, but act as an open circuit when the PWM signal falls to 0V. </span></span></span></p>
<p align="LEFT">&nbsp;<a href="/uploads/2011/05/amplifier-innards.png"><img class="alignnone size-medium wp-image-252" title="Amplifier Innards" src="/uploads/2011/05/amplifier-innards.png?w=300" alt="" width="300" height="229" /></a></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Plasma Generator</strong></span></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><a href="/uploads/2011/05/plasmagen.jpg"><img class="alignnone size-medium wp-image-255" title="plasmagen" src="/uploads/2011/05/plasmagen.jpg?w=300" alt="" width="300" height="289" /></a></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">The Plasma Generator uses a switching high voltage transformer to boost the amplified PWM signal to tens of kV. At these voltages, the intense electric field between two electrodes can produce a plasma channel. As the current through the electrodes is modulated by the PWM signal, the heat it gives off changes as well. The rapid changes in heat lead to rapid changes in the density of the surrounding air. These changes in air density are the sound that you hear from the system.</span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Power Supply</strong></span></span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><a href="/uploads/2011/05/power-supply-bw.png"><img class="alignnone size-large wp-image-256" title="Power Supply BW" src="/uploads/2011/05/power-supply-bw.png?w=1024" alt="" width="500" height="200" /></a></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><a href="/uploads/2011/05/power-supply-innards.png"><img class="size-medium wp-image-261 alignnone" title="Power Supply innards" src="/uploads/2011/05/power-supply-innards.png?w=200" alt="" width="200" height="300" /></a></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">The power supply consists of two components. A commercial &ldquo;wall-wart&rdquo; power supply provides the 12 Vdc for the signal circuitry. The second component is a custom 35 Vdc supply that uses a 1:5 isolation transformer, a full bridge rectifier and a 6.8 mF smoothing capacitor.</span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Prototype</strong></span></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">The current design is a two channel configuration. All the circuitry in the signal processor is doubled so that the device can drive an optional second Plasma Generator. For demonstration purposes, we are utilizing only one channel.</span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="text-decoration: underline;"><strong>Test Results</strong></span></span></span></span></p>
<p align="LEFT"><span style="color: #000000;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;">The following results were produced by running white noise through the systems and recording the output using an MXL 990 microphone through the Digidesign Digi 003 Audio Interface.</span></span></span></p>
<p align="LEFT">&nbsp;</p>
<p align="LEFT"><span style="text-decoration: underline;"><span style="color: #000000; text-decoration: underline;"><span style="font-family: Arial, sans-serif;"><span style="font-size: small;"><span style="font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 10px;">plasma speaker</span></span></span></span></span></p>
</div>
<div><a href="/uploads/2011/05/whitenoise-t-shrunk.png"><img class="size-full wp-image-257" title="whitenoise-t-Shrunk" src="/uploads/2011/05/whitenoise-t-shrunk.png" alt="" width="383" height="356" /></a></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="text-decoration: underline;">commercial speaker</span></div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><a href="/uploads/2011/05/whitenoise-event-shrunk.png"><img class="size-full wp-image-258" title="whitenoise-event-Shrunk" src="/uploads/2011/05/whitenoise-event-shrunk.png" alt="" width="383" height="356" /></a></div>