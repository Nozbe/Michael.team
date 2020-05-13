---
permalink: /archive/
---

# Blog of Michael Sliwinski

{% if langvar==nil %}nolangvar{% else %}langvardefined{% endif %}

{% assign currentYear = site.time | date: '%Y' %}
{% include lang.html %}
{% include lang.months.html %}

Let's do this!
{% if langvar==nil %}nolangvar{% else %}langvardefined{% endif %}


## Latest entry:

<div class="posts">
{% for post in site.categories.en limit:1 %}
<div class="post">
	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	<div class="date">
	{{ post.date | date: "%B %e, %Y" }}
	</div>
	<div class="entry">
	{{ post.excerpt }}
	</div>
	<a href="{{ post.url }}">Read more...</a>
</div>
{% endfor %}
</div>


## All the rest of blog entries:

<div class="posts">
{% for post in site.categories.en offset:1 %}
<div class="post">
	<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
	<div class="date">
	{{ post.date | date: "%B %e, %Y" }}
	</div>
</div>
{% endfor %}
</div>
