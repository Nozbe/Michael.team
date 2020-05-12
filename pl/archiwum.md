# Tu będzie archiwum postów moich

{% assign currentYear = site.time | date: '%Y' %}
No pewnie, że tak, na pewno!

Zobaczmy: {{ site.data.main.months_pl.January }}

{% assign postsByYear = site.categories.pl | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}

<div class="posts">
<h2>{{ year.name }}</h2>
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%B'" %}
  {% for month in postsByMonth %}
  <h2>{{ site.data.main.months_pl.[month.name] }}{% if year.name!=currentYear %} {{ year.name }}{% endif %}</h2>
    {% for post in month.items %}
    <div class="post">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="date">{{ post.date | date: "%B %e, %Y" }}</div>
    </div>
    {% endfor %}
  {% endfor %}
</div>


<div class="posts">
<h2>{{ year.name }}</h2>
  {% assign postsByMonth = year.items | group_by_exp:"post", "post.date | date: '%m'" %}
  {% for month in postsByMonth %}
  <h2>{{ site.data.main.months_pll.[month.name] }}|{% if year.name!=currentYear %} {{ year.name }}{% endif %}</h2>
    {% for post in month.items %}
    <div class="post">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div class="date">{{ post.date | date: "%B %e, %Y" }}</div>
    </div>
    {% endfor %}
  {% endfor %}
</div>



{% endfor %}