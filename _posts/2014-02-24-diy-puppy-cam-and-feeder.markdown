---
layout: post
title: DIY Puppy Cam and Feeder
date: 2014-02-24 21:26:43
categories: 
permalink: /:year/:month/:day/:title/
---
<p>Ever wish you could video chat with your dog during the day, and remotely feed them treats? Probably not, but now you can with just an old laptop, an arduino and entirely too much time on your hands!</p>
<p><a href="/uploads/2014/02/DogFeeder-1-of-1.jpg"><img class="alignnone size-large wp-image-895" src="/uploads/2014/02/DogFeeder-1-of-1-1024x576.jpg" alt="DogFeeder (1 of 1)" width="500" height="281" /></a></p>
<!--more-->
<p>Basically, my wife and have an unhealthy love for our dog, Copper. &nbsp;We play with him, take him on long walks and runs, and he may sleep in the bed more often than I am comfortable admitting. &nbsp;However, during the day, he is mostly by himself. &nbsp;I had joked many times that I should build a puppy cam and treat machine to feed him, but when a friend jokingly shared a puppy cam with us on facebook, I knew I had to act.</p>
<p>&nbsp;</p>
<p><iframe src="https://www.youtube.com/embed/G78txqJG-dw?rel=0" frameborder="0" width="560" height="315"></iframe></p>
<p>&nbsp;</p>
<p>The easy part is the video chat.&nbsp;Take an old laptop and turn off all screen locks and hibernation (you can leave a screensaver or screen dim on). &nbsp;Install skype, create a new account for your dog and set it to automatically answer with video and automatically answer calls from friends. Then, add yourself to the friend list. &nbsp;Call in anytime to check in on a video of your pooch.</p>
<p>The next part is to use a servo and arduino to dispense the food. &nbsp;I am not a mechanical engineer, and most of my solution was thrown together in a few minutes using duct tape, old cardboard boxes and an upside down cd container to hold food above his crate. &nbsp;The CD container has a hole about the size of a half dollar in it that is covered by a cardboard piece connected to an arm on a small servo motor. The arduino has code so that when it receives a 0xff byte from the serial port, it moves the arm (connecting to pin 9 of the arduino) 60 degrees and then back into place to let some kibble fall out and then cover the hole again.</p>
<p>The only part left is to control the arduino from the internet outside of our home. &nbsp;I found a lot of tutorials controlling an arduino using processing, but that seemed clunky to me. &nbsp;I found the serial library in python lets me write directly to the serial port. &nbsp;Being familiar with the Pyramid web framework, I was able to create a simple website that would send the 0xff byte to the serial port from the web (use any web framework you are familiar with). &nbsp;After that, set up port forwarding on your home router to send the webpage being served from your old laptop to your IP address from your ISP. &nbsp;You can use other services to connect this to a domain name if you wish, but I just left it connecting to the IP address knowing it may change periodically. This is a basic overview of my approach, as a step-by-step of each part would be pretty long if you are unfamiliar with the technology included. &nbsp;Post any questions in the comments and I'll do my best to answer them.</p>
<div><span style="text-decoration: underline;"><strong>Important Python Code:</strong></span></div>
<div>import serial</div>
<div>&nbsp;</div>
<div>ser = serial.Serial('/dev/ttyUSB0', 9600)</div>
<div>ser.write(chr(0xff))</div>
<div>ser.close()</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div><span style="text-decoration: underline;"><strong>Arduino Code:</strong></span></div>
<div>
<div>#include &lt;Servo.h&gt;</div>
<div>&nbsp;</div>
<div>Servo myservo; &nbsp;// create servo object to control a servo</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // a maximum of eight servo objects can be created</div>
<div>&nbsp;</div>
<div>int pos = 0; &nbsp; &nbsp;// variable to store the servo position</div>
<div>&nbsp;</div>
<div>void setup()</div>
<div>{</div>
<div>&nbsp; Serial.begin(9600);</div>
<div>&nbsp; myservo.attach(9); &nbsp;// attaches the servo on pin 9 to the servo object</div>
<div>}</div>
<div>&nbsp;</div>
<div>&nbsp;</div>
<div>void loop()</div>
<div>{</div>
<div>&nbsp; if (Serial.available()) {</div>
<div>&nbsp; &nbsp; if (Serial.read() == 255 &amp;&amp; pos == 0){</div>
<div>&nbsp; &nbsp; &nbsp; for(pos = 0; pos &lt; 55; pos += 1) &nbsp;// goes from 0 degrees to 180 degrees</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; { &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// in steps of 1 degree</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; myservo.write(pos); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// tell servo to go to position in variable 'pos'</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; delay(15); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // waits 15ms for the servo to reach the position</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; }</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; for(pos = 55; pos&gt;=1; pos-=1) &nbsp; &nbsp; // goes from 180 degrees to 0 degrees</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; {</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; myservo.write(pos); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;// tell servo to go to position in variable 'pos'</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; delay(15); &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // waits 15ms for the servo to reach the position</div>
<div>&nbsp; &nbsp; &nbsp; &nbsp; }</div>
<div>&nbsp; &nbsp; }</div>
<div>&nbsp; }</div>
<div>}</div>
</div>