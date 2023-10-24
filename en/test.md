---
permalink: /test/
tags: [guest,video]
---

# Testing playground

## Featured blog post

## ⭐️ Featured posts test:

<div class="featured">
{% include posts-test.html posts=site.tags.featured limit=1 more=1 %}
</div>

Last Post name: {{ last_post_name }}

## ⭐️ Featured again but NOT:

<div class="featured">
{% include posts-test.html posts=site.tags.featured limit=5 notpost=last_post_name %}
</div>

## ⭐️ Featured without excluding:

<div class="featured">
{% include posts-test.html posts=site.tags.featured limit=5 %}
</div>

Last Post name: {{ last_post_name }}

## Variables here

page.title: {{ page.title }}

page.url: {{page.url}}

page.name: {{ page.name }}

page.tags: {{ page.tags }}

site.url: {{ site.url }}

page.date: {{ page.date }}

## Highlighting

{% highlight markdown %}
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
Do you want **Markdown** to be used *everywhere*?
{% endhighlight %}

## Another test

<code>
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
</code>

## Quote

> I've seen dark before, but not like this\\
> This is cold, this is empty, this is numb\\
> The life I knew is over; the lights are out\\
> Hello darkness: I'm ready to succumb\\
>\\
> Anna for Elsa

## Including video from a point in time

{% include video.html id="m-ugwoEOMvg" start="1425" %}

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}

## Working with date parameters
