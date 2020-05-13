# Tu będzie archiwum postów moich

No pewnie, że tak, na pewno!

{% assign currentYear = site.time | date: '%Y' %}
{% include lang.html %}
{% capture langmth %}month{{ langvar }}{% endcapture %}
{% assign langmths = site.data.main.[langmth] | split: ", " %}

Jan: {{ langmths[1] }}, {{ langmths[2] }}, {{ langmths[3] }}, {{ langmths[4] }}

{% assign postsByYear = site.categories.pl | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}

<div class="posts">
<h2>{{ year.name }}</h2>
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%-m'" %}
  {% for month in postsByMonth %}
  {% assign monthindex = month.name | plus:0 %}
  <h2>{{ langmths[monthindex] }}{% if year.name!=currentYear %} {{ year.name }}{% endif %}</h2>
    {% for post in month.items %}
    <div class="post">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="date">{{ post.date | date: "%B %e, %Y" }}</div>
    </div>
    {% endfor %}
  {% endfor %}
</div>
{% endfor %}