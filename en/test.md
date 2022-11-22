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

## Highlighting

{% highlight markdown %}
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
Do you want **Markdown** to be used *everywhere*?
{% endhighlight %}

## Another test

<code>
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
</code>

## Including video from a point in time

{% include video.html id="m-ugwoEOMvg" start="1425" %}

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}

## Working with date parameters

## Emoji test

😟🙁😕

✅✔️👍

👨🏼‍💻🧑‍💻👩‍💻

🐥💬