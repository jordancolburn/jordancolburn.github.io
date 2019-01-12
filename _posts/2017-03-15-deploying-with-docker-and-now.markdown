---
layout: post
title: Using Docker and Now to Deploy a Simple App
date: 2017-03-15 17:00:37
categories: 
permalink: /:year/:month/:day/:title/
---
<p><a href="http://bracketflip.com" target="_blank">bracketflip.com</a></p>
<p>To preface this: I am from the college basketball-crazed state of Kentucky. So naturally, March Madness results in a lot of time spent filling out brackets. Last year I wrote a small python script to simulate the tournament using a 50/50 coin flip, as well as a weighted coin flip that took a weight factor and slanted toward higher seeds based on that factor.</p>
<p>This year, I wanted to take it a step further and turn my little script into a website anyone can use. Since I haven't spent much time with Docker, I decided to see how easy it was to deploy my python script in a container. First I modified my tournament class to return the results in a JSON format. Then, I used Flask (very lightweight server for python) to serve those results over network calls. Then I found a dockerfile to install python and my flask dependencies. For deployment, I used Now (<a title="https://zeit.co/now#whats-now" href="https://zeit.co/now#whats-now" target="_blank">https://zeit.co/now#whats-now</a>). I had to tell docker to expose port 5000 (where flask was running) and then simply type 'now' in the command line and wait. Now generated a URL where my app was now live in the cloud.</p>
<p>For a front end, I wanted to save some time and just used an excel NCAA tournamenent template I found online and exported it to and HTML web page. I then added a very small angular controller to get the data from my python container when the user selected buttons. For displaying the results, I just used angular data binding inside the HTML table that excel created. Now also handles static sites as well as Node and Docker, so I was able to deploy my front end with now as well. Using docker alias, I then connected it to my custom url, bracketflip.com.</p>
<p>All in all, with a little bit of effort, docker and now make a great pair to easily and quickly deploy small sites and web apps.</p>