---
permalink: /
---

# Michael's in tha house!

My name is Michael Sliwinski and this is my new blog. [Read more about me](/about/)

## Find something

{% include search.html %}

<br>

## Latest updates:

<div class="posts">
{% for post in site.categories.en limit:10 %}
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

Want to browse the past? [Check out all the blog](/blog/)
