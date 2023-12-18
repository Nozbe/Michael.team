---
tags: [applewatch,shortcuts]
cover: "watchnote.jpg"
m: https://seths.blog/2023/12/eight-marketing-maxims/
---

# WatchNote Siri Shortcut - how to add and view a note on Apple Watch Ultra without an iPhone!

I love the big screen of my new [Apple Watch Ultra 2](/ultra/) and now that I have [Action button](/action/) configured on it, I was thinking of more things I could do with it. I already figured out [how to add a task to Nozbe](/nozbe-add/) but sometimes I just needed to add a note quickly and later retrieve it, without using my [iPhone 15 Pro](/iphone15/). Here's what I came up with:

<!--More-->

![{{ page.title }}](/img/{{ page.cover }})

* TOC
{:toc}

## What does a "WatchNote" Siri Shortcut do?

This is my use case - I want to be able to launch the Shortcut and **it should show me my note right away**. Only then I'd either be done with it or I can choose to edit this note (and the old note is being copied to a log of old notes) which I can always retrieve later if I want to.

Why do I need this?

- As I was traveling I noticed that very often at AirBNB they'd give us a PIN code to our apartment. I wanted to save it and be able to check it on the watch right before opening the door.
- As I was [running](/sports/) only with the watch I wanted to be able to just add a mental note if I had a new idea or maybe when I was listening to [a book](/books/) I could quickly dictate a book note 📝 
- Whenever I wanted to just save somewhere a non-actionable item, I wanted to be able to do that right from the watch quickly.

## Issues of saving a note on the watch: NO Notes app and NO file storage easily available…

That's a problem - there's no apparent way to save things on the [Apple Watch](/applewatch/) easily. The Apple Notes app is not there (Why Apple? Why?) and accessing iCloud files only happens through the [iPhone](/iphone/) nearby and cannot be done directly. And it's slow anyway. And I wanted the note to be retrieved and stored even when I was running without my iPhone.

The only solution I found was a similar thing I did [with adding tasks to Nozbe](/nozbe-add/), the Shortcut must save a note directly on the Internet without going through any local storage on the watch (not accessible) or the iPhone (not always available). However, the only way to save files with Siri Shortcuts directly on the Internet is by using **SSH connection**, which makes it a very geeky solution.

## SSH connection to the rescue - if you have one!

Luckily I'm a computer geek and a programmer (I wrote the first version of [Nozbe][n], after all!) so this is how I solved the problem:

### Step 1 - create an SSH account on my server

We run quite a few servers at [Nozbe](/nozbe/) and we have one that's really a support server for our mail and some additional mini apps we use internally. So I set up a new account there just for this. I logged in to the WHM panel, created a new account (`List accounts > Create New Account`) with a new user name and a long password and made sure I enabled SSH on it (`Account Functions > Modify Account > Shell Access`).

I've given this account a subdomain and enabled SSL on it. This way I can securely retrieve information from it via a simple web protocol.

### Step 2 - create a simple index.html page

I created a [simple HTML page](/txt/watchnote-index.txt){:target='_blank'} that redirects to this blog.

My note should be accessible from the Internet but not by anyone so I needed to create a `.htaccess` file that allows the HTML page to be displayed but the **text notes** only to be viewed by authenticated users. This way even if you know the address of my note, you cannot view it without providing a username and password.

### Step 3 - secure the directory and create unique user name

To secure the directory, [I created this .htaccess file](/txt/watchnote-htaccess.txt){:target='_blank'} with this condition to secure all text files so that nobody without credentials can read them:

{% highlight shell %}
<FilesMatch "(?i)\.txt$">
AuthType Basic
AuthName "My page is password protected!"
AuthUserFile /home/username/.htpasswd
Require valid-user
</FilesMatch>
{% endhighlight %}

Now I had to log in via SSH to the server and set up the secure user name and password to be able to access the text files from the web. I used this command:

`htpasswd -c username`

…and set up the password. In both cases you should change "username" for your actual user name.

Later in the Siri Shortcut I needed to put the `username:password` like that (joint by the colon sign) and encode this with `base64` encoding and then send the `Authorization` header with `Basic EncodedUsernameAndPassword`. I explain it in the Shortcut further down.

## Get the Siri Shortcut to add and view notes on your Apple Watch!

If all that doesn't scare you and you're geeky enough to set it all up, then by all means do that and then get the Siri Shortcut:

### [WatchNote Siri Shortcut][w]

Additionally for this Siri Shortcut to work, you have to enable SSH (scripting) in Siri Shortcuts (`Settings > Shortcuts > Advanced > Allow Running Scripts`).

What this Siri Shortcut does is this:

- First it gets the file `index.txt` from your server using your WWW address and authentication mentioned above and displays contents of the note. This is the fastest way to get a piece of text from the Internet on to your Apple Watch.
- It shows you the note on the watch.
- If you hit "Cancel", the shortcut stops 🛑.
- If you hit "OK", it displays a menu with two options: "Edit note" or "View log".
- When you hit "Edit note" you can edit or write/dictate a new note completely. It then adds the contents of old `index.txt` to your `log.txt` file and overwrites the `index.txt` file with the text you just dictated.
- When you choose "View log" - it shows you the contents of your  `log.txt` file on your server, which contains all past notes you've added.

![{{ page.title }} ssh](/img/watchnote-ssh.jpg)

## Enjoy taking notes on the Apple Watch!

I've added this shortcut to the [Action Button](/action/) on my [Apple Watch Ultra 2](/ultra/) but even on a normal watch you can just invoke this with Siri or with a complication of Siri Shortcuts on a watch face.

I hope in the future such Shortcut would be easier to do than what I've prepared here and if you can't get this to work, [make sure to let me know on Mastodon and I'll try to help you](/gratis?to=ma/).

[w]: https://www.icloud.com/shortcuts/4fd6a1173ba64c21ba7b3b1dba736e9a

[n]: https://michael.gratis/nozbe
[np]: https://michael.gratis/nozbepersonal