---
layout: post
title: Triple boot - because dual booting was too stable
date: 2012-09-19 11:16:05
categories: 
permalink: /:year/:month/:day/:title/
---
Today, I finally got the holy grail of triple booting (OS X, Ubuntu Studio, Windows 7) working on my mac mini. It was suprisingly easy to do following this guide from lifehacker:
<a title="http://lifehacker.com/5531037/how-to-triple+boot-your-mac-with-windows-and-linux-no-boot-camp-required" href="http://lifehacker.com/5531037/how-to-triple+boot-your-mac-with-windows-and-linux-no-boot-camp-required">http://lifehacker.com/5531037/how-to-triple+boot-your-mac-with-windows-and-linux-no-boot-camp-required</a>

The article has a few different paths (kind of like a choose your own ending book, remember those?  do they have them for adults?), but basic steps I would recommend when starting from plain OSX can be summarized:
<ol>
	<li>Backup using time machine</li>
	<li>Install windows by following Apple's bootcamp documentation</li>
	<li>Install rEFIt</li>
	<li>Format the mac partition with disc utility from the OSX install disc (you did back up right?) and split it into 2 to make room for linux</li>
	<li>Restore your time machine backup to the OSX partition you just created</li>
	<li>Install your chosen GNU/Linux distro to the other partition, install the linux bootloader to the same partition</li>
	<li>Bask in the glory of your own geek cred</li>
</ol>
Most of the details for the steps can be searched online or from the lifehacker article, but the steps above give a simple road map that worked for me!