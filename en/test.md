---
permalink: /test/
layout: default
js: getNow2
limit: 1
---

<article class="page" id="page">
{% include tags.html %}
<header><div class="header headerblack">
	<h1>{{ tag_emoji }}&nbsp;{{ tag_title }}</h1>
</div></header>
{% assign tag_name = "now-updates" %}
<div class="entry">
	{{ tag_subtitle | markdownify }}
	{% include podcast.html id=tag_name %}
	{% if page.limit %}{% assign tag_limit = page.limit %}{%else %}{% assign tag_limit = 20 %}{% endif %}
	{% if tag_limit>1 %}
	{% capture tagfirst %}entry{{ langvar }}{% endcapture %}
	{%else %}
	{% capture tagfirst %}entries{{ langvar }}{% endcapture %}
	{% endif %}
	{% capture tagrest %}entrymore{{ langvar }}{% endcapture %}
	<h3>{{ site.data.main.[tagfirst] }}</h3>
</div>
</article>

{% assign tag_posts = site.tags[tag_name] %}

<article class="page" id="first"><div class="entry">
{% include posts.html posts=tag_posts limit=tag_limit more=1 %}
</div></article>

<article class="page" id="rest"><div class="entry">
<h3>{{ site.data.main.[tagrest] }}</h3>
{% include posts.html posts=tag_posts offset=tag_limit %}</div>
<footer>
{% include share.html %}
</footer>
</article>