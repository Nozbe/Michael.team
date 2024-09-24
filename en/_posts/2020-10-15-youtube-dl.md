---
tags: [ipadonly,shortcuts]
cover: "youtube-dl.jpg"
---

# How to download video and audio from YouTube using youtube-dl on the iPad

[**Update September 24, 2024**: This post has been updated](/ytd) and this old post is no longer relevant: My iPad Pro has 256GB of storage and I usually use only half of it. Recently I started downloading more stuff to take advantage of that storage and be able to watch things later when the Internet connection is flaky. I download Netflix or Prime Video movies or shows, some of my purchased iTunes content... and most recently I started downloading YouTube videos thanks to a brilliant `youtube-dl` script and a cool shell-like iPad app. Here's how I do it. [Again, update, now it's yt-dlp and here are new instructions.](/ytd)

<!--More-->

## Getting the shell app for the iPad

I got the [A-shell](https://apps.apple.com/us/app/a-shell/id1473805438) app for the iPad (I heard about it from [Federico Viticci](https://appstories.net/episodes/160/)) and once it's installed, I can open it up and have a Unix-like shell available with python language installed.

## Getting YouTube-DL python script

It's available on [youtube-dl web site](https://yt-dl.org) and to get it you just have to type this:

`curl -L https://yt-dl.org/downloads/latest/youtube-dl -o youtube-dl`

Now you can start downloading video and audio:

![{{ page.title }} 2](/img/youtube-dl-2.jpg)

## Downloading video for watching

Now that I've got everything set up, I can download my first YouTube video easily. Let's say I want to download our [Nozbe promo video from ProductHunt](/producthunt):

`python youtube-dl -f mp4 "https://www.youtube.com/watch?v=6STLYtnQnfU" -o "nozbe-teams.mp4"`

Once downloaded this video is available in the "Files app" in the section "On My iPad" > "a-Shell".

## Downloading audio for listening

Sometimes I want to download a video in audio form for later listening on the road. Like for example you'd want to get [my latest team productivity webinar](/differently/):

`python youtube-dl -f m4a "https://www.youtube.com/watch?v=5-pvFMTtdKU" -o "nozbe-webinar-audio.m4a"`

You cannot convert it to mp3, because you cannot install `ffmpeg` which is required for it, but the Apple-support M4A format which is good enough.

Again, it'll download and it'll be available on the iPad in the "a-Shell" folder.

![{{ page.title }} 3](/img/youtube-dl-3.jpg)

If you're [Overcast](https://overcast.fm) premium subscriber,  you can simply upload your audio files there and listen to them on the go from your iPhone.

## Bonus: a Siri Shortcut to paste python command!

I've created a Siri shortcut which can be used to either share directly a video from YouTube or paste a link from YouTube and it creates an entire python download command for you to just paste in A-Shell:

[Get the Siri Shortcut for YouTube-DL](https://www.icloud.com/shortcuts/b4ad24aaaa42430b9a4bc9f607a71fdd)

## Enjoy!

This is the easiest way I know to get the YouTube content on the iPad as quickly as possible for offline consumption later.

![{{ page.title }}](/img/{{ page.cover }})

[n]: https://michael.gratis/nozbe