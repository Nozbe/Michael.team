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

## Hexagon test

{% include hx.html text="Testing Javascript" href="javascript:alert('this and that');" %}

{% include hx.html text="Read more…" href="/action/" %}

{% include hx.html text="<strong>&nbsp;N&nbsp;</strong>" href="https://nozbe.com/" after="&nbsp;is for Nozbe" %}

## Highlighting and testing

{% highlight markdown %}
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
Do you want **Markdown** to be used *everywhere*?
{% endhighlight %}

## Another test

<code>
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
</code>

Or:

```
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
```

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
