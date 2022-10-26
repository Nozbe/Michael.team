---
permalink: /test/
tags: [guest,video]
---

# Testing playground

## Variables here

page.title: {{ page.title }}

page.url: {{page.url}}

page.name: {{ page.name }}

page.tags: {{ page.tags }}

## Highlighting

{% highlight markdown %}
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
Do you want **Markdown** to be used *everywhere*?
{% endhighlight %}

## Another test

<code>
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
</code>


<form action="https://nozbe.info/add_subscriber.html" accept-charset="utf-8" method="post">
	<!-- Name -->
	name: <input type="text" name="name"/><br/>
	<!-- Email field (required) -->
	email: <input type="text" name="email"/><br/>
	<!-- List token -->
	<!-- Get the token at: https://nozbe.info/campaign_list.html -->
	<input type="hidden" name="campaign_token" value="YGSR" />
	<!-- Thank you page (optional) -->
	<input type="hidden" name="thankyou_url" value="https://michael.team/please/"/>
	<!-- Add subscriber to the follow-up sequence with a specified day (optional) -->
	<input type="hidden" name="start_day" value="0" />
	<!-- Subscriber button -->
	<input type="submit" value="Subscribe"/>
</form>


## test JS

<script type="text/javascript" src="https://nozbe.info/view_webform_v2.js?u=e3g&webforms_id=cuvs" data-webform-id="cuvs"></script>