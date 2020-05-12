# Tu będzie archiwum postów moich

No pewnie, że tak, na pewno!

{{ assign currentYear = site.time | date: '%Y' }}
{% assign postsByYear = site.categories.pl | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}

<h2>{{ year.name }}</h2>
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
  {% for month in postsByMonth %}
  <h3>{{ month.name }}{% if year.name!=currentYear %} {{ year.name }}{% endif %}</h3>
  <ul>
    {% for post in month.items %}
    <li><a href="{{ post.url }}">{{ post.title }}-{{ post.date }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}
{% endfor %}