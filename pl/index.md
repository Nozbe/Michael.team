---
lang: pl
---

# Witam na Polskiej stronie Michała Śliwińskiego

Super strona!

{% for post in site.categories.pl %}
<div class="post">
	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	<div class="date">
	{{ post.date | date: "%B %e, %Y" }}
	</div>
	<div class="entry">
	{{ post.excerpt }}
	</div>
</div>
{% endfor %}