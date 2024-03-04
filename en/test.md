---
permalink: /test/
tags: [guest,video]
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

## Including video from a point in time

{% include video.html id="m-ugwoEOMvg" start="1425" %}

## YouTube Shorts Supports

<div style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">
{% include videos.html id="yksQ11JCzAw" %}
</div>

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}

