---
permalink: /
---

# Michael's in tha house!

My name is Michael Sliwinski and this is my new blog. [Read more about me](/about/)

## Find something

{% include search.html %}

<br>

## Descriptions

{{ site.data.main.descrm }}

{{ site.data.main.descrm | strip_html }}

{{ site.data.main.descrm | markdownify | strip_html }}

## Latest updates:

{% include posts.html posts=site.categories.en limit=10 %}

## Read more

* [**Archive** - check out all the blog archives](/archive/)
* [**Tags** - read my posts by tags](/tag/)

## Test 1

{% include posts.html posts=site.categories.en limit=1 %}

## Test 2

{% include posts.html posts=site.categories.en offset=1 limit=2 %}
