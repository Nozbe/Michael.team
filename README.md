# Michael.team

Michael.team is a new blog of Michael Sliwinski (that's me!) - the founer of [Nozbe - a to-do app for modern teams](https://nozbe.com). Now it's a work-in-progress. Features:

- three language support - EN (default = global), PL and ES (and maybe DE in the future?)
- it supports dark mode/light mode and is mobile friendly
- no cookies, no trackers, no nothing - really fast loading
- it'll support minimal, vanilla JS only when needed. No jQuery or anything like this. Site also works with JS turned off.

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/Michael.team/tree/master/license.md) for details. Basically, all the content and all the code can be copied and used somewhere else but credit is due.

## Created in Jekyll with a nice structure.

I've fallen in love with Jekyll and now I'm migrating all of my stuff there. It started with [Nozbe.team](https://nozbe.team), later [NoOffice.org](https://NoOffice.org), [iPadOnly](https://ipadonly.com) and now this blog.

- it's based on No Office blog / book / site structure and minimalist style
- it's inspired by Derek Sievers and his minimalist site
- it'll have texts of all my books in /books folder - I'll start with "It's All About  Passion" very soon.

## Cheat sheet

### 1. Every post will have the following additional parameters:

- layout - the default layout is being used or page layout for pages or post layout for posts, but then we can still customize it for tags and other views
- cover - the image name of the cover image going behind the H1 (optional)
- img - main image name of the site/post but NOT the one behind H1
- title - can be also done using the first H1 in the file
- subtitle - for the blog posts where we really want to use it...
- vid - YouTube ID of the video
- vim - Vimeo ID of the video (not yet implemented)
- tags (which are defined in data/main.yml) - I'm planning on using only defined tags
- js - javascript script to include, it includes scripts.js and launches on page load the script, (eg. js: dice - which launches dice() function from script on page load), exception is "redirect" because it includes the redirect.js entirely.
- header - replaces the header part of the page with a custom header, like in dice we wanted to have shorter header with a link
- head - opportunity to add something to the "head" section of the page, usually used for adding podcast icons to subscribe to our podcasts (eg. head: '<meta name="apple-itunes-app" content="app-id=1012329770" />')
- podcast - the id of the podcast (eg. podcast: 1012329770)
- share - if set to "noshow" the share link at the bottom of the page will not be shown
- email - if set to "noshow" the newsletter signup form will not be shown


### 2. The structure of the site will be very simple:

- main page with basic info, search field and the first blog post - (later) the first blog post will be pulled using AJAX and later it will lead to infinite scroll of the main page
- archive with list of blog posts
- tag page with list of blog posts
- pages of stuff I care about
- /books/ - with books to read online

### 3. Tips and tricks for writing:

```
- Adding an image with a caption in an article:

![](path_to_image)
*image_caption*

- Adding a link that opens in new window in kramdown:

[link](url){:target="_blank"}

- Adding code:

{% highlight liquid %}
Code is here
{% endhighlight %}

- Adding quote with backslashes for newlines:

> I've seen dark before, but not like this\\
> This is cold, this is empty, this is numb

```

[Kramdown reference](https://kramdown.gettalong.org/quickref.html)