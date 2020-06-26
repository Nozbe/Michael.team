# Michael.team

Michael.team is a new blog of Michael Sliwinski. Now it's a work-in-progress. Features:

- three language support - EN (default = global), PL and ES (and maybe DE in the future?)

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/Michael.team/tree/master/license.md) for details.

## Created in Jekyll with a nice structure.

I've fallen in love with Jekyll and now I'm migrating all of my stuff there. It started with [Nozbe.team](https://nozbe.team), later [NoOffice.org](https://NoOffice.org), [iPadOnly](https://ipadonly.com) and now this blog.

- it's based on No Office blog / book / site structure and minimalist style
- it's inspired by Derek Sievers and his minimalist site
- it'll have texts of all my books in /books folder - we'll start with "It's All About  Passion".
- it'll support minimal, vanilla JS only when needed. No jQuery or anything like this.

## Cheat sheet

### 1. Every post will have the following additional parameters:
- cover - the image name of the cover image going behind the H1 (optional)
- img - main image name of the site/post but NOT the one behind H1
- title - can be also done using the first H1 in the file
- subtitle - for the blog posts where we really want to use it...
- vid - YouTube ID of the video
- vim - Vimeo ID of the video (not yet implemented)
- tags (which are defined in data/main.yml) - I'm planning on using only defined tags

### 2. The structure of the site will be very simple:
- main page with basic info, search field and the first blog post - (later) the first blog post will be pulled using AJAX and later it will lead to infinite scroll of the main page
- archive with list of blog posts
- tag page with list of blog posts and an option to "start reading" - where it loads the first article and later loads more and more in infinite scroll
- pages of stuff I care about
- redirection from michael.gratis
- /books/ - with books to read online


Tips and tricks:

{% highlight markdown %}
![](path_to_image)
*image_caption*

[link](url){:target="_blank"}
{% endhighlight %}

[Kramdown reference](https://kramdown.gettalong.org/quickref.html){:target="_blank"}