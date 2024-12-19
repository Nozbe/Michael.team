---
permalink: /test/
tags: [guest,video]
social: "taiwan.jpg"
redirect_from:
  - /dupa/
---

# Testing playground

## Variables here

page.title: {{ page.title }}

page.url: {{page.url}}

page.name: {{ page.name }}

page.tags: {{ page.tags }}

site.url: {{ site.url }}

page.date: {{ page.date }}

## Highlights

{% highlight shell %}
<FilesMatch "(?i)\.txt$">
AuthType Basic
AuthName "My page is password protected!"
AuthUserFile /home/username/.htpasswd
Require valid-user
</FilesMatch>
{% endhighlight %}

OR

{% highlight shell %}
yt-dlp -f mp4 "https://www.youtube.com/watch?v=IvTR6LcjazU" -o "Nozbe-5min.mp4"
{% endhighlight %}

OR

> yt-dlp -f mp4 "https://www.youtube.com/watch?v=IvTR6LcjazU" -o "Nozbe-5min.mp4"

OR

`yt-dlp -f mp4 "https://www.youtube.com/watch?v=IvTR6LcjazU" -o "Nozbe-5min.mp4"`

OR

```
yt-dlp -f mp4 "https://www.youtube.com/watch?v=IvTR6LcjazU" -o "Nozbe-5min.mp4"
```

## Quote

> I've seen dark before, but not like this\\
> This is cold, this is empty, this is numb\\
> The life I knew is over; the lights are out\\
> Hello darkness: I'm ready to succumb\\
>\\
> Anna for Elsa

## Discussion between Michaels


> **Introduction to Michaels**\\
>\\
> **NoOffice guy**: Hi, I'm Michael, the [NoOffice](/nooffice) guy, the remote guy, I work from home, I believe that **work is not a place to go, it's a thing to do**. And you are?

> **Office guy**: Hi, I'm the other Michael, the Office guy. I dress nicely. I go to an office every day, I practice management by walking around. I love running back-to-back meetings!

> **3 meetings per week?**
>\\
> **N**: I also like meetings. I have two of them a week. Sometimes three.

> **O**: Meetings are fun! But I understand you meant 3 meetings a day? That's really not that much…

> **N**: No. 3 a week. One on Monday. And one or two on Tuesday. Usually no meetings on Wednesday, Thursday or Friday.

> **O**: You have days without meetings? Sorry, but if that's so, you don't seem to care much about if your team is working at all. What kind of manager are you?!

> **[Nozbe][n] - projects, tasks and comments…**\\
>\\
> **N**: Oh, I do care. A lot. But as we have everything laid out in Nozbe in projects, tasks and comments, I know exactly what people are working on and where they need my feedback. And when they do, I write comments to their tasks, sometimes very long ones!

## Including video from a point in time

{% include video.html id="m-ugwoEOMvg" start="1425" %}

## YouTube Shorts Supports

{% include videos.html id="yksQ11JCzAw" %}

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}

[n]: https://nozbe.com/