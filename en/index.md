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

Want to browse the past? [Check out all the blog](/archive/)

## Testing new approach - first blog post

{% include posts.html posts=site.categories.en limit=1 %}

## Testing new - second and next 2 blog posts

{% include posts.html posts=site.categories.en offset=1 limit=2 %}
