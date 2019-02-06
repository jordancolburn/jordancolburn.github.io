---
published: true
layout: post
date: '2019-02-06 11:30:00 +0500.'
image: /assets/2019/Screen%20Shot%202019-02-06%20at%201.45.29%20PM.png
permalink: '/:year/:month/:day/:title/'
---
## Maisntage Loopback Problem Solved!

![Screen Shot 2019-02-06 at 1.45.29 PM.png]({{site.baseurl}}/assets/2019/Screen Shot 2019-02-06 at 1.45.29 PM.png)


For years, I've always loved looping in Apple's Mainstage. The combination of unlimited loopers, groups and flexible effects and routing is great. However there has been a persistent "bug" that has bothered me for a long time. Occasionaly, when recording an initial loop and pressing the record button again to stop it and overdub from the beginning, it starts to erase my initial loop instead of overdubbing. 

I tried everything, from verifying all my settings to saving, updating and starting from scratch, but it just seemed like the bug would only happen sometimes and I could never correlate any cause to the effect.

Thanks to user "touchtype" over on the apple forums, [https://discussions.apple.com/thread/6291913](https://discussions.apple.com/thread/6291913), I finally have solved this problem once and for all. The key is to make sure to send enough signal when recording the initial loop. Apparently, loopback has a threshold of -24dB, and if your initial loop doesn't exceed that signal at some point, then loopback assumes you intentionally recorded a blank loop and replaces the audio instead of overdubs. 

I can see how an engineer might use that to try to solve the feature of accumulating noise, like from an amp when looping, but it is really inconvenient if you are trying to be conservative with gain staging. Anyway, just make sure you're averaging -18dB or so for initial loops, which will be enough to overcome the bug, and also leave enough headroom for lots of overdubs and additional loops. Problem solved!
