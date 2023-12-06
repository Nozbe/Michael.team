---
permalink: /yt/
title: "Cookie-free YouTube watcher"
js: getYouTube
img: yt.jpg
domain: Xoutu.be
---

<div id="yt"></div>

<form name="link">
<div style="margin-top: 5px"><input name="yt" type="text" value="" placeholder="Paste: ...youtube.com/watch?v=..."></div>
{% include hx.html text="Watch YouTube video!" href="javascript:getYouTube(true);" title="Watch YouTube" %}
</form>

To watch any video, paste a YouTube link. Works with *youtube.com, m.youtube.com, youtu.be* or just the bare unique YouTube video ID.

## Share any YouTube video on iOS easily

**[Get the Siri "Cookie-free YouTube" Shortcut for iOS][shortcut]**

This Siri Shortcut helps you to "share" any YouTube link to this page.

## Bonus 1: Just add a URL as a parameter

This page has a special `yt` parameter, so add the YouTube link at the end of it or the 11-character YouTube video ID:

{% highlight liquid %}
https://michael.team/yt/?yt=FULLYOUTUBELINK
{% endhighlight %}

## Bonus 2: Change YOUTU.BE to XOUTU.BE

That's right. I bought a domain `xoutu.be` which redirects to here. So if you've got a short video URL, you can just switch `y` for `x` and you're done! 

{% highlight liquid %}
Change:
youtu.be/VIDEOID
To:
xoutu.be/VIDEOID
{% endhighlight %}

I hope Google will not sue me for ordering a similar domain. It's for a good cause!

## [Why this page?][blog]

I created this because the experience of watching video on YouTube got worse. They show pop-ups, they track you and they tempt you to bindge-watch by suggesting lots of videos on the side.

This page solves most of these problems. It lets you embed *any YouTube video* (that has not been disabled for embedding) and watch it without being tracked (it uses the `nocookie` parameter), with full screen and picture-in-picture support on iPads. As a bonus, it somehow skips most YouTube ads.

**[Read more about this page and share with your friends! Thanks!][blog]**

[blog]: https://michael.team/youtube/
[shortcut]: https://www.icloud.com/shortcuts/a45cec1e83944253b6c0bd3cb2915bc4
