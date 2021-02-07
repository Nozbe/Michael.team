---
permalink: /test/
head: '<meta name="apple-itunes-app" content="app-id=1012329770" />'
test: no
---

# Testing playground

## Testing quotes

> I've seen dark before, but not like this
> This is cold, this is empty, this is numb
> The life I knew is over; the lights are out
> Hello darkness: I'm ready to succumb

with backslashes

> I've seen dark before, but not like this\\
> This is cold, this is empty, this is numb\\
> The life I knew is over; the lights are out\\
> Hello darkness: I'm ready to succumb

Now code:

`code is here`

Or block:

{% highlight liquid %}
Code is here
And more code
{{ page.permalink }}
And even more here
{% endhighlight %}

{% if page.test!="no" %}
Show this now!
{% endif %}

{% if page.test!="test123" %}
Show 123 test
{% endif %}