# Tu będzie archiwum postów moich

No pewnie, że tak, na pewno!

{% assign currentYear = site.time | date: '%Y' %}
{% assign months = site.data.main.month_pl | split: ", " %}

{{ months[1] }}

{% assign postsByYear = site.categories.pl | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}

<div class="posts">
<h2>{{ year.name }}</h2>
</div>
{% endfor %}