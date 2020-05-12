# Tu będzie archiwum postów moich

{{ assign currentYear = site.time | date: '%Y' }}
No pewnie, że tak, na pewno! {{ currentYear }}

No musi być: {{ site.time | date: '%Y' }}

Złap to: {% capture nowYear %}{{ site.time | date: '%Y' }}{% endcapture %}

Złapane: {{ nowYear }}


{% assign postsByYear = site.categories.pl | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}

<div class="posts">
<h2>{{ year.name }}</h2>
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
  ||{{ year.name }}||{{ currentYear }}||
  {% for month in postsByMonth %}
  <h2>{{ month.name }}{% if year.name!=currentYear %} {{ year.name }}{% endif %}</h2>
    {% for post in month.items %}
    <div class="post">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="date">{{ post.date | date: "%B %e, %Y" }}</div>
    </div>
    {% endfor %}
  {% endfor %}
</div>
{% endfor %}