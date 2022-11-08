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

site.url: {{ site.url }}

## Highlighting

{% highlight markdown %}
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
Do you want **Markdown** to be used *everywhere*?
{% endhighlight %}

## Another test

<code>
I'm the founder of **Nozbe** which you can find [here](https://nozbe.com/) - it's *free*!
</code>


{% include video.html id="m-ugwoEOMvg" start="1425" %}

<form action="https://nooffice.substack.com/api/v1/free?nojs=true" method="post" class="form " novalidate=""><input type="hidden" name="first_url" value="https://nooffice.substack.com/"><input type="hidden" name="first_referrer"><input type="hidden" name="current_url" value="https://nooffice.substack.com/"><input type="hidden" name="current_referrer"><input type="hidden" name="referral_code"><input type="hidden" name="source" value="cover_page"><input type="hidden" name="referring_pub_id"><input type="hidden" name="additional_referring_pub_ids"><div class="sideBySideWrap"><input type="email" name="email" placeholder="Type your email…"><button class="button rightButton  primary subscribe-btn" type="submit" tabindex="0"><b class="button-text ">Subscribe</b></button></div><div id="error-container"></div><div class="subtle-help-text below-input"></div></form>

## Alternative simplified form here:

<form action="https://nooffice.substack.com/api/v1/free?nojs=true" method="post">
<div class="flex-box"><div class="flex-left">
<input type="email" name="email" placeholder="Your@Email.com">
</div><div class="flex-right">
<input type="submit" value="Join and get a free books!"/>
</div></div>
</form>

## Including a test HTML

{% include test.html id="m-ugwoEOMvg" %}
