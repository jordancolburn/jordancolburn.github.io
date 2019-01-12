---
layout: post
title: Is StubHub's Website Deceiving users?
date: 2017-09-11 18:40:05
categories: 
permalink: /:year/:month/:day/:title/
---
<p><em>Update: An Ebay employee reached out to me on twitter and claimed to have lodged an internal complaint (Ebay is StubHub's parent company). They followed up in a public tweet: "</em><em>StubHub is continually testing features to improve the customer experience. We have heard your feedback and have turned off the sold testing". They also reached out in DM on twitter and said it was part of an AB feature test (which I saw in the code), and they turned it off. While I am pleased at the prompt response, I am still skeptical. An AB test could make it more manipulative and not less if it was used to only show the "feature" (as they call it) on events where it was less likely to be discovered. The Ebay employee could not tell me how they determined which users to show this nefarious "feature" to.</em></p>
<p><em>Update 2: The code still seems to be there, they just have turned off the AB for the events I have checked.<br /></em></p>
<p>&nbsp;</p>
<p>My College, the University of Louisville, has one of their biggest ever home football games coming up this Saturday at home against #3 ranked Clemson. So I decided to check out tickets on StubHub (way too late for anything reasonable as it turns out). It is obviously going to be a tough ticket to get, but the amount of traffic and tickets selling on stub hub struck me as weird (spoiler alert, it is). So I put on my nerd hat, opened chrome dev tools and got to investigating.</p>
<p><a title="stubhub.com" href="http://www.stubhub.com">www.stubhub.com</a></p>
<p>First, when you open the page, you are presented with a list of tickets to purchase. Then, like clockwork, two of the options suddenly get marked as "sold". This creates a sense of urgency, almost like any ticket could be bought at any time. You know the site must be busy since these tickets are going from "available" to "sold".</p>
<p><img src="/uploads/mce_filebrowser/2017/09/11/Louisville_Cardinals_vs_Clemson_Tigers_Football_09_16_2017_Ti_IIWjCmM.png" alt="" width="362" height="623" /></p>
<p>&nbsp;</p>
<p>Well... wait a minute. Isn't it weird that the two that sold don't match the price ordering of the rest of the list? Also isn't it weird that the tickets get marked sold very soon after you open the page, and it's always the tickets right at the top? And isn't it weird that tickets don't continue to sell at the same rate while you keep the page open? Yes, it's weird.</p>
<p>Digging through their javascript code, I found a nice snippet that seems to answer all of these questions. For the nerds, the code is below and for the non-nerds, I'll summarize here. When you load a page they get a list of tickets that have already sold, then they make sure to only show you two that you haven't seen before, and to insert them in random places in the top of the list so that you are sure to see them, then they mark them as sold to create a false sense of urgency.</p>
<p>In fact, you can test this out by opening dev tools (press f12 in chrome), navigate to the "Application" tab and delete the value beside the typo'd key "ugrency-message-{IDOFYOUREVENT}". In most cases this value will be one or two ids (the ids of the tickets that were already sold before you loaded the page). Then refresh the page and see that most likely the same two tickets will appear in a different order and then be marked as "sold". There should be an "ugrency-message" for each event that you have visited (they may have this set so not all events do it, I really haven't checked much outside the one game I was interested in).</p>
<p><img src="/uploads/mce_filebrowser/2017/09/11/Developer_Tools_-_https___www.stubhub.com_louisville-football_XkhXCzp.png" alt="" width="450" height="379" /></p>
<p>&nbsp;</p>
<p>The moral of the story is that StubHub is misrepresenting ticket availability to manipulate consumers, so be aware of the false sense of urgency they want to create when you are buying tickets. I hope this post helps you be a better consumer, and I hope it makes its way to someone at StubHub so that they can stop this and any other deceptive practices they may currently be engaging in.</p>
<p><span style="text-decoration: underline;"><strong>CODE from stubhub's client side code:</strong></span></p>
<p>&nbsp;</p>
<pre>        appendJustSoldListingsTo: function(listings) {
            var urgencyMessageListings = gc.urgencyMessageData ? gc.urgencyMessageData.listings : [],
                eventId = this.eventId,
                listingsLen = listings.length,
                zoneId = listings[0].zoneId,
                sessionListings;

            if (!globals.hideUrgencyMessage &amp;&amp; SH.mbox.justSoldEvent &amp;&amp; urgencyMessageListings &amp;&amp; urgencyMessageListings.length) {
                sessionListings = sessionStorage.getItem('ugrency-message-' + eventId);

                // filter out sold out listings which already showed last time
                if (sessionListings) {
                    sessionListings = sessionListings.split(',');

                    urgencyMessageListings = urgencyMessageListings.filter(function(soldOutListing) {
                        var listingId = soldOutListing.seats[0].listingId;
                        return !_.contains(sessionListings, String(listingId));
                    });
                }

                // make sure only two sold out listings
                if (urgencyMessageListings.length &gt; 2) {
                    urgencyMessageListings.length = 2;
                }

                if (urgencyMessageListings.length) {
                    // update cache
                    sessionListings = [];
                    urgencyMessageListings.forEach(function(listing, index, umListings) {
                        umListings[index].isSoldOutListing = true;
                        umListings[index].zoneId = zoneId;
                        sessionListings.push(listing.seats[0].listingId);
                    });

                    // append listing
                    if (listingsLen &gt;= 5) {
                        // insert sold out listing into random position from 2~5
                        listings.splice(parseInt(Math.random() * 4) + 1, 0, urgencyMessageListings[0]);

                        if (urgencyMessageListings.length === 2) {
                            listings.splice(parseInt(Math.random() * 5) + 1, 0, urgencyMessageListings[1]);
                        }
                    } else if (listingsLen &gt; 0) {
                        // insert sold out listing into at the second listing
                        listings.splice(1, 0, urgencyMessageListings[0]);
                    }
                }
                sessionStorage.setItem('ugrency-message-' + eventId, sessionListings.join(','));
            }

            return listings;
        },<br /><br /></pre>