---
tags: [shortcuts]
img: "linktitle.jpg"
m: https://social.nozbe.com/@michael/113854584216849594
---

# LinkTitle - an easy way to get a title of any page

When you're working online like I do (["I write random stuff on the Internet"](/dad/), after all) very often you have to copy and paste links. Also their titles. To make it easy, I decided to create a simple Shortcut that will get the title automatically for me. Feel free to use it, too:

<!--More-->

![{{ page.title }}](/img/{{ page.img }})

## LinkTitle Shortcut to copy title of any page:

### 🔗 [LinkTitle][l]

After installation the Shortcut will be available both in Share Sheet, so you can tap on it on any web site:

![{{ page.title }} share](/img/linktitle-sheet.jpg)

Also, if you copy an URL/link address, you can just launch this Shortcut and it will use the Clipboard and get the title automatically for you.

Once it gets the title, it will show you a menu where you can choose one of three options of what you want to get:

1. Just the title of the page
2. Title of the page followed by space and link
3. [Markdown style](/markdown) Title in squared brackets and link in normal brackets.

I hope you find this as useful as I do every day. Have fun!

## Why I built this Shortcut? Because not all pages give you proper titles…

Now if you're interested, building this Shortcut wasn't as easy as just putting these two actions:

- Get Contents of a Web Page
- Get Name from Contents…

Because some pages don't give you valid titles. I had to deal with two different cases:

### YouTube videos

[YouTube](/youtube) video links give a generic "YouTube" title. So I had to get the `YouTube ID` and get the title from a JSON file associated with this video.

### Shortcuts

[Shortcuts](/shortcuts) iCloud links also give you a generic "Shortcut" title so I had to get the title through the Shortcuts API.

If there are any other web pages that are not compatible with this shortcut, [please reach out](/contact).

Other than that, enjoy [this LinkTitle Shortcut][l].

## Version history

- **[1.6][l]** - June 6, 2025 - support for removing names of the sites from title links, like "| The Verge" or "| iMagazine"
- **[1.5][l15]** - March 17, 2025 - on my blog I have a special "embed" code block for videos so I updated this Shortcut withmy kind of embed. If you have your own embed code, feel free to customize it.
- **[1.0][l1]** - January 15, 2025 - initial version.

### 🔗 [Link Title 1.6][l]

[l]: https://www.icloud.com/shortcuts/2aa4a337e71445e79d62bb35f5277e91
[l15]: https://www.icloud.com/shortcuts/5be8c6fe784e458e8377b5a4a0847799
[l1]: https://www.icloud.com/shortcuts/d864d14881b848c28475a76960e256d3

[n]: https://michael.gratis/nozbe