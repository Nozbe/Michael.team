---
permalink: /yt/
title: "YouTube watcher"
js: showYouTube
img: yt.jpg
---

<div id="yt"></div>

## Watch any YouTube video here, cookie free!

I created this because the experience of watching video on YouTube got worse. They show pop-ups, they track you and they tempt you to bindge-watch by suggesting lots of videos on the side. [Here's the full story behind this page][blog].

## Option 1. Just paste a YouTube URL link

<form name="link" onsubmit="showYouTube(true); return false;">
<div><input name="yt" type="text" value="" placeholder="Paste: ...youtube.com/watch?v=..."></div>
<div><button>Watch YouTube video!</button></div>
</form>

## Option 2. Get a Siri Shortcut for iOS

I created a handy Siri Shortcut which you can use to "share" any YouTube link to this page.

**[Get the Siri Shortcut for iOS][shortcut]**

## Option 3. Just add a URL to this page as a parameter

This page has a special `yt` parameter, so add the YouTube link at the end of it:

{% highlight liquid %}
https://michael.team/yt/?yt=FULLYOUTUBELINK
{% endhighlight %}

## Enjoy!

Now you can watch videos on an iPad, iPhone or any other device without being tracked by Google/YouTube. When embedding the video it uses the "nocookie" option, which limits the tracking and it supports full screen on the iPadOS and iOS for most clips.

**[Read more about this page and share with your friends! Thanks!][blog]**

### Share: [michael.team/yt](https://michael.team/yt/)

[blog]: https://michael.team/youtube/
[shortcut]: https://www.icloud.com/shortcuts/a45cec1e83944253b6c0bd3cb2915bc4
