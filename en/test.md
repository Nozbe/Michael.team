---
permalink: /test/
layout: default
js: getNow2
---

<article class="page" id="page">
{% include tags.html %}
<header><div class="header headerblack">
	<h1>{{ tag_emoji }}&nbsp;{{ tag_title }}</h1>
</div></header>
{% assign tag_name = "now-updates" %}
{% assign tag_limit = 1 %}
<div class="entry">
	{{ tag_subtitle | markdownify }}
	{% include podcast.html id=tag_name %}
</div>
</article>

{% assign tag_posts = site.tags[tag_name] %}

<article class="page" id="first"><div class="entry">
{% include posts.html posts=tag_posts limit=tag_limit more=1 %}
</div></article>

<article class="page" id="rest"><div class="entry">
{% include posts.html posts=tag_posts offset=tag_limit %}</div>
<footer>
{% include share.html %}
</footer>
</article>