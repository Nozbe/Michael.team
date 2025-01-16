---
tags: [shortcuts]
img: "linktitle.jpg"
---

# LinkTitle - an easy way to get a title of any page

When you're working online like I do (["I write random stuff on the Internet"](/dad/), after all) very often you have to copy and paste links. Also their titles. To make it easy, I decided to create a simple Shortcut that will get the title automatically for me. Feel free to use it, too:

<!--More-->

![{{ page.title }}](/img/{{ page.img }})

## LinkTitle Shortcut to copy title of any page:

### [LinkTitle][l]

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


[l]: https://www.icloud.com/shortcuts/d864d14881b848c28475a76960e256d3

[n]: https://michael.gratis/nozbe
[np]: https://michael.gratis/nozbepersonal