---
tags: [shortcuts,life]
cover: "callsheet.jpg"
---

# Calsheet app and Shortcut to export TMDB link

I’m a big fan (and member) of [ATP podcast](https://atp.fm) and one of the co-hosts, [Casey Liss](https://www.caseyliss.com) created this great app called [Callsheet][ca] which is an amazing way to learn about movies, shows and actors. Much better than IMDB. For my Polish podcast [Nadgryzieni](/pl/nadgryzieni) we use this app to look up movies so I decided to build a shortcut that would easily let me share a link from this app to the official [TMDB](https://www.themoviedb.org) link.

<!--More-->

![{{ page.title }}](/img/{{ page.cover }})

## Get the Shortcut(s) - Callsheet and Callsheet PL

So I’ve built two shortcuts, actually. First one:

### [🎬 Callsheet][c]

When you install this Shortcut, it will ask you for your country. If you're from the USA, just write "USA", if you're like me from Poland, you write… "Poland".

What this Shortcut does - when you hit "Share" button in Callsheet app, you can choose this Shortcut and then simply it will convert the "Callsheet" link to "TMDB" link, get the title, strip it of the year of the movie or TV series, and the ask ChatGPT using the built-in "use model" action, to get the streaming services available for this title based on your specified country.

![{{ page.title }} list](/img/callsheet-list.jpg)

So, for example if I choose the "Hunt for Red October" in Poland, I'll get this:

> The Hunt for Red October (PY) https://www.themoviedb.org/movie/1669

Copied to my clipboard.

### [🎬 Callsheet PL][cp]

Basically the same Shortcut, but enhanced for Poland as it also asks ChatGPT about the official title in Polish. So in the above example I'd get:

> The Hunt for Red October (Polowanie na Czerwony Październik) (PY) https://www.themoviedb.org/movie/1669

So with Polish official title in the brackets.

## Why I love the Callsheet app?

Many reasons. Most of them is the convenience of browsing an app where there are no ads and everything is very intuitive. I love it. Yes, there is a limited free version, but Casey is very generous with his $9 yearly plan. I've already paid him twice as I've been using this app since the beginning - two years!

What I also love is the small details like ages of actors. You can see how old each actor was, how old they're now… amazing and very relevant info:

![{{ page.title }} ages](/img/callsheet-ages.jpg)

Anyway, this app is amazing, [go get it from the App Store][ca]

[c]: https://www.icloud.com/shortcuts/00ce534e7176414cac008f3181dd5a81
[cp]: https://www.icloud.com/shortcuts/838196f57b434b6fbe7e040fa1e93ceb
[ca]: https://callsheetapp.com


[n]: https://michael.gratis/nozbe
[np]: https://michael.gratis/nozbepersonal