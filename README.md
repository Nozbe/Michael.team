# Michael.team

[Michael.team](https://michael.team) is a blog of Michael Sliwinski (that's me!) - the founer of [Nozbe - a to-do app for modern teams](https://nozbe.com).

Features:

- three language support - EN (default = global), PL and ES.
- it supports dark mode/light mode and is mobile friendly
- no cookies, no trackers, no nothing - really fast loading - the only cookie loaded is the one of [Nozbe affiliate program](https://nozbe.com/refer), so people can use their Nozbe affiliate ID to pass my pages, like: michael.team/nozbe?ref=AFFID
- site uses minimal, vanilla JS only when needed. No jQuery or anything like this. Site also works with JS turned off.

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/Michael.team/tree/master/license.md) for details.

Basically, all the content and all the code can be copied and used somewhere else but credit is due.

So you don't have to ask me if you want to copy any text on this site, any blog post or page chapter, or any piece of code. Just copy it and add link back to this site as a credit. Sharing is caring!

## Created in Jekyll with a nice structure and hosted on GitHub Pages

I've fallen in love with [Jekyll](https://jekyllrb.com) and now I've migrated all of my stuff to it. It started with our internal page [Nozbe.team (you can't access it unless you work for Nozbe)](https://nozbe.team), later [NoOffice.org](https://NoOffice.org), [iPadOnly](https://ipadonly.com) and now this blog.

- it's based on No Office blog / book / site structure
- it's inspired by [Derek Sievers](https://sive.rs) and his minimalist site
- it'll have texts of all my books in /books folder - I already imported [It's All About Passion](https://michael.team/passion)

Thanks to GitHub for hosting this page and my other pages for free on [GitHub Pages](https://pages.github.com).

## Domains supported by this one site

- **Michael.team** - main domain of the page (duh!)

Apart from that, I've set up on my small VPS [special server redirections](https://michael.team/txt/redirect.txt) to other domains which are supported on this site:

- **Michael.gratis** - redirects to: `https://michael.team/gratis/?to=$1` so I can use redirections to different pages and use a simple `michael.gratis/SHORT`
- **Xoutu.be** - redirects to: `https://michael.team/yt/?yt=$1` to change youtu.be link to my YouTube player
- **ThePodcast.fm** - redirects to the `/podcast` tag - it's an iFrame redirect so that my old links from the podcast just work. This way link of `ThePodcast.fm/5` redirects to `/podcast-5` blog post. I'm using a special [.htaccess file](https://michael.team/txt/iframe-htaccess.txt) and [PHP file as index](https://michael.team/txt/iframe-php.txt)
- **QTbar.com, HitRSS.com…** - redirect blog posts about my past projects
- **Sliwinski.com, Sliwin.ski, MichaelSliwinski.com, MichaelNozbe.com** - my past domains redirect here, too - [history of this site is explained here](https://michael.team/sliwinski_com)

## Contributions welcome!

If you'd like to contribute to this site, maybe correct something in one of my blog posts or book chapters, or have more experience with JS, SCSS or Liquid to improve my code, feel free to issue a pull request. All pull requests are welcome!

## Cheat sheet

### 1. Every post can have the following additional parameters in front matter:

- layout - the default layout is being used or page layout for pages or post layout for posts, but then we can still customize it for tags and other views
- cover - the image name of the cover image going behind the H1 (optional)
- img - main image name of the site/post but NOT the one behind H1
- title - can be also done using the first H1 in the file
- subtitle - for the blog posts where we really want to use it...
- vid - YouTube ID of the video
- vim - Vimeo ID of the video (TO-DO: not yet implemented)
- tags (which are defined in data/main.yml) - I'm planning on using only defined tags, which are in brackets and comma, separated: [business,nozbe]
- js - javascript script to include, it includes scripts.js and launches on page load the script, (eg. js: dice - which launches dice() function from script on page load), exception is "redirect" because it includes the redirect.js entirely.
- header - replaces the header part of the page with a custom header, like in dice we wanted to have shorter header with a link
- head - opportunity to add something to the "head" section of the page, usually used for adding podcast icons to subscribe to our podcasts (eg. head: '<meta name="apple-itunes-app" content="app-id=1012329770" />')
- podcast - the id of the podcast (eg. podcast: 1012329770)
- share - if set to "noshow" the share link at the bottom of the page will not be shown
- email - if set to "noshow" the newsletter signup form will not be shown
- limit - how many blog posts to show at first (on tag page)
- l - link to the LinkedIn post - where I reporsted this to LinkedIn
- m - link to the Mastodon post where I announced this blog post so that people can comment and engage
- permalink - the permalink of the page - like this one: /test/
- redirect_from - other pages that redirect to here - either inline, like: redirect_from: /17/ or using "-" like we have it in tags/show.md
- domain - if a page redirects to a domain (like my past projects: QTbar.com or HitRSS.com) there will be a short info regarding this
- domain_why - if there's a dedicated blog post explaining the redirection, link to it can be added

### 2. The structure of the site is very simple:

Content is in its respective directories:

- English content (the main one) is in /en/ and tags are in /tag/
- Polish and Spanish content are in /pl/ and /es/ folders respectively and their tags are in there
- I have additional folders for:
    - /txt/ - plain text file
    - /js/ - JavaScript files
    - /pdf/ - PDF files
    - /img/ - images (duh!)
- Books have their own folders with underscore, like:
    - /_passion/ - for the "It's All About Passion!" book

As per Jekyll structure, all posts are in their /_posts/ folders in their languages.

URL structure is that English content has no language preface, like: michael.team/about, but Polish or Spanish has /pl/ or /es/ in the URL, like: michael.team/pl/omnie

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

- Including video with point in time - seconds from start:

{% include video.html id="m-ugwoEOMvg" start="1425" %}

```

[Kramdown reference](https://kramdown.gettalong.org/quickref.html)
