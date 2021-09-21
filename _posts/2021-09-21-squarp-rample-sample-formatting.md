---
published: true
layout: post
date: "2020-03-05 08:30:00 +0500."
permalink: "/:year/:month/:day/:title/"
---

It's tax time, which means like a lot of people, I'm stuck using Quick Books Online again.

This year, there was a big gap and some issues with our bank syncing leading to some manual imports and duplicated entries that were a mess to clean up. The easiest thing would be to bulk delete the year and start from scratch!

Unfortunately as many QBO users find out, there is no way to bulk delete transactions inside the accounting->chart of accounts pages. There is a bulk deleter add-on you can add that charges outrageous fees per deleted transaction. That was the last straw for me and I knew there had to be a better way.

A few minutes of poking around the website and I was able to come up with this script to bulk delete the current page you are looking at.

_DISCLAIMER_ this is rough around the edges, only tested by me and could cause problems for you

Instructions:

Navigate to the account you need to delete from. Use the filters to make sure that only the transactions you want to delete are on the screen. This WILL delete every transaction on the screen slowly(about a half second per transaction) and then you can navigate to a new page and run the script again.

If any transactions get missed (the script is really rough and doesn't always wait) then simply run the script again. To run it, right click in the browser and choose "inspect" to open up the developer tools. Then navigate to the console and paste this script in and press enter. BE CAREFUL! Once started, this script will delete every transaction on the page unless the browser is closed.

Deleted transactions can sometimes be re-added via the bank syncing since deleting the accepted transaction makes QBO think that the bank never sent it over. Explicitly excluding these synced transactions in the bank tab is the way to go if you are manually uploading all transactions. For the year. Fortunatly, bulk accept/exclude does exist on the banking tab.

Another tip to save time is to change the page to display 300 entries at once, which will save time by not having to visit as many pages.

```
deleteItem = function(row) {
    rows[i].click()
    deleteButton = document.querySelector('button[aria-label="Delete"]')
    deleteButton.click()

    confirmButton = document.querySelector('#yesNoDialog .primary')
    confirmButton.click()
    i++
    if (i < rows.length) {
        setTimeout(function() {deleteItem(rows, i)}, 500)
    }
}

rows = document.querySelectorAll(".dgrid-row")
var i=0
deleteItem(rows, i)
```
