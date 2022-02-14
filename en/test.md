---
permalink: /test/
tags: [guest,video]
---

# Testing playground

## Variables

page.title: {{ page.title }}

page.url: {{ page.url}}

page.name: {{ page.name }}

page.tags: {{ page.tags }}

## Need to test search!

<a href="javascript:document.querySelector('#searchfield').style.display = 'block';">Show search</a>

<div id="searchfield" class="begend" style="padding: 15px 0px;display: none;">
	<div class="begender center">
		{% include search.html %}
	</div>
</div>


