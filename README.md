﻿# Date-Finder

I have often found myself trying to find a target date, that might be either X days before from my current date, or X days ahead. While libraries like **Moment.js** can be used, importing it for one query alone might be unnecessary.

This little piece of code will take the current date and substract or add a number of days to that date. The combo `setdate(myDate.getDate() - x)` has the capacity to change months and years if necessary (e.g. if our original date is November 30, and we want to go forth 2 days, the method will return December 2.

Note that when using `new Date()`, the method will return the **current date by default**. If you want to use a specific date (e.g. 2016-10-10) you can introduce that value -> `new Date(2016, 10, 10)`.
