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

{% capture read %}read{{ langvar }}{% endcapture %}

{% capture posttext %}{{ site.data.main.[read] }}{% endcapture %}

{%assign postit = site.data.main.[read] %}

{% include hx.html text=posttext href="javascript:alert('this and that');" title="This is it!" %}

{% include hx.html text=postit href="/action/" grey="true" %}

## Test of N

{% capture nt %}ad_n{{ langvar }}{% endcapture %}
{% capture nta %}&nbsp;{{ site.data.main.[nt] | markdownify }}{% endcapture %}
{% assign ntafter = nta | remove: '<p>' | remove: '</p>' %}
{% capture ad_slogan %}ad_slogan{{ langvar }}{% endcapture %}
{% capture ntslogan %}{{ site.data.main.[ad_slogan] }}{% endcapture %}
{% capture ntlink %}/gratis?to=na{{ langvar }}{% endcapture %}

<div style="max-width: 140pt; margin: auto;">
{% include hx.html text="<strong>&nbsp;N&nbsp;</strong>" href=ntlink after=ntafter title=ntslogan %}
</div>

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

Or even:

```
<FilesMatch "(?i)\.txt$">
AuthType Basic
AuthName "My page is password protected!"
AuthUserFile /home/username/.htpasswd
Require valid-user
</FilesMatch>
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
