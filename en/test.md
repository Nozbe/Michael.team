---
permalink: /test/
tags: [guest,video]
social: "taiwan.jpg"
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

## Quote

> I've seen dark before, but not like this\\
> This is cold, this is empty, this is numb\\
> The life I knew is over; the lights are out\\
> Hello darkness: I'm ready to succumb\\
>\\
> Anna for Elsa

## Discussion between Michaels

> M: Hi, I'm Michael, the NoOffice guy, the remote guy, I work from home, I believe that work is not a place to go, it's a thing to do. And you are?

> O: Hi, I'm the other Michael, the Office guy. I dress nicely. I go to an office every day, I practice management by walking around. I love running back-to-back meetings.

> M: I also like meetings. I have two of them a week. Sometimes three.

> O: Meetings are fun! But I understand you meant 3 meetings a day? That's really not that much.


## Including video from a point in time

{% include video.html id="m-ugwoEOMvg" start="1425" %}

## YouTube Shorts Supports

{% include videos.html id="yksQ11JCzAw" %}

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}

