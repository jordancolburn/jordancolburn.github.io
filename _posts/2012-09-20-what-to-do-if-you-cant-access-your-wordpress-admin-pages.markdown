---
layout: post
title: What to do if you can't access your Wordpress admin pages
date: 2012-09-20 12:04:44
categories: 
permalink: /:year/:month/:day/:title/
---
During a recent upgrade, the Wordpress installation for this website began misbehaving.   All the posts, pages and uploads were still visible and I could log in, but it was not possible to get to the admin section of the site.

After some searching, I tried the standard suggestions of using ssh to manually rename the plugins and themes to try to determine if any updates to those could be the culprit, but nothing came of it.

The solution to my problem was to use FTP to upload fresh Wordpress installation files, overwriting all but the wp-content folder.  This solved my issues, and hopefully can be a good step along the troubleshooting path if you encounter a similar problem.