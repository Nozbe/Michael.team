---
layout: default
permalink: /now2/
title: "Michael Sliwinski's NOW page"
subtitle: "Semi-regular update on Nozbe and other productivity projects in my life"
js: getNow
---

<div class="header headerblack">
	<h1>{{ page.title }}</h1>
	<h2>{{ page.subtitle }}</h2>
</div>
<div class="entry" id="intro">
	{{ site.data.main.now | markdownify }}
</div>