# Michael.team

Michael.team is a new blog of Michael Sliwinski. Now it's a work-in-progress. Some of the features:

- I need to first migrate ALL the blog posts from Sliwinski.com and build redirections
- I need to set up PL blog so that I have a place to post my thoughts in Polish... and migrate my old iMagazine articles.
- I need to set up ES blog so that I also have a place to talk in Spanish...
- Also DE will be in the works... but who knows!?

## Licensed under Creative-Commons license

See [license.md](https://github.com/Nozbe/Michael.team/tree/master/license.md) for details.

## Created in Jekyll with a nice structure.

Michael has fallen in love with Jekyll and now he's migrating all his stuff there. It started with [Nozbe.team](https://nozbe.team), later [NoOffice.org](https://NoOffice.org), [iPadOnly](https://ipadonly.com) and now his own blog.

- it's based on No Office blog
- it'll have texts of all his books in /books folder - we'll start with "It's All About Passion".
- it'll have languge stuff in /pl and /es folders.

## To-do

- create a list of files that can't be used (like about, now, etc.)
- split PL/EN with blog posts, categories, indexes, tags and RSS
- no blog in ES so far... not needed yet.
- import all the iMagazine blog posts
- get images of these blog posts ready
- adjust styling based on this stuff

## Issues

- Paginate doesn't support categories, so I've decided to do this:
- main page (until I do infinite scrolling) will load the first 10 articles and then a link to the archives (which will be done correctly, sorted by year and month) - EN by y+m, PL + ES by y
- tag pages will load first 10 nice (image, description, etc) and more just with titles
- need to standardize query for posts, as include with lang as param
