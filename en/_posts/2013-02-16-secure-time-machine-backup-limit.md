---
tags: [computers]
img: "secure-time-machine-backup-limit.jpg"
---

# Time Machine Backup with Size Limit on Mac OSX Mountain Lion

Although my blog is mostly about [productivity][pr] I sometimes write about "geeky" stuff that loosely relate to productivity. One and a half years ago [I posted about my way of doing backups on Mac OSX Lion][old] and to this date it's one of my most viewed posts of all time. The challenge was to backup your data in such a way, that the backup would be (a) securely encrypted and (b) limited in size. This way I can back up several macs to one Time Capsule or external hard drive. Now it's time to updated my [old post that was based on "Lion"][old] to the new one based on the newest "cat" - Mountain Lion:

<!--More-->

![{{ page.title }}](/img/{{ page.img }})

As I mentioned, my [highly technical post][old] attracted lots of readers and lots of comments. One of the readers, Stefan, posted a great comment simplifying the whole process and updating it to the Mountain Lion. I decided to try it myself and tweaked his instructions a little and there it is, the new instructions - *how to create a secure backup with size limit on Mountain Lion*:



I recently ditched my [Macbook Air and I'm working almost exclusively on my iPad][i] but my wife has one Air and we also have a [Mac Mini][i16]. I bought a new Time Capsule (2TB version) and now I want to use 1TB for Mac Mini backups, 500GB for MacBook Air backups and 500GB for other media. Here's what I did step by step on both Macs:

1) After a successful Mountian Lion installation set up a regular Time Machine backup in the System Preferences. Mountain Lion gives the option to "encrypt backup" so please check it. It's very important (and [it wasn't there in Lion][old]). It will prompt you for backup password - set one up.

2) Perform a standard backup. Ideally, before you go to sleep, it may take a while.

3) You should have a "Machine_Name.sparsbundle" file on your Time Capsule or external hard drive. In my case it was "Niunia.sparsebundle" as my Mac Mini is called "Niunia" (don't ask!). Turn off Time Machine backups for now.

4) The geeky stuff (it's easy) - as mentioned above I decided to have close to 1TB for Mini backup, so I chose 950GB. As I'm backing up to Time Capsule, it mounts my TC disk in /Volumes/Data/ on my Mac. Open Terminal and type this (you need to be an Administrator of your Mac):

`hdiutil resize -size 950g /Volumes/Data/Niunia.sparsebundle`

Now to make sure the Time Machine doesn't reset this setting, you need to type this:

`chflags uchg /Volumes/Data/Niunia.sparsebundle/Info.*`

5) Now turn the Time Machine backups again. It will backup your Mac nicely and your backup disk size will be encrypted and limited to the size you specified above (in my case 950GB)

6) *Optional step:* Do the same thing for your other Mac. I set up my wife's Macbook Air with 256 SSD for 500GB backup size.

7) *Optional step:* As in my [previous article][old] I totally recommend switching off Time Machine backups and downloading an app called **[Time Machine Editor][te]** to handle Time Machine scheduling. I just hate it that Time Machine backups up every hour. It's too often for me. With this app I set up the backup every 6 hours. Easy and sweet.

There we are, thanks to [many great comments][old] on my past article and great comments by the reader Stefan, I have a size-limited and fully encrypted Time Machine backup running smoothly on all of my Macs in the family, backing up to a single Time Capsule.

***Question:** Did you manage to back up successfully on Mountain Lion? Any other tips and tricks regarding backups?*

[te]: http://timesoftware.free.fr/timemachineeditor/
[n]: http://www.nozbe.com/
[ns]: http://www.nozbe.com/signup
[p]: /magazine/
[s]: /productive_show
[pr]: /productivity
[t]: http://twitter.com/MSliwinski
[i]: /ipadonly
[e]: /how-i-use-evernote
[d]: http://db.tt/kD7Liux
[old]: /mac-osx-lion-secure-backup-to-time-capsule-wi
[i16]: /part-16-why-i-still-need-a-mac-mini-ipad-as-m

[ipad]: /7-ways-the-new-apple-ipad-will-increase-your
[i0]: /ipad-as-my-main-computer-prologue
[i1]: /part-1-the-clouds-ipad-as-my-main-computer
[i2]: /part-2-writing-ipad-as-my-main-computer
[i3]: /part-3-designing-flows-ipad-as-my-main-comput
[i4]: /part-4-email-clouds-and-apis-ipad-as-my-main
[i5]: /part-5-traveling-ipad-as-my-main-computer
[i6]: /part-6-portability-and-fun-ipad-as-my-main-co
[i7]: /part-7-simplifications-and-annoyances-ipad-as
[i8]: /part-8-the-back-end-magic-ipad-as-my-main-com
[i9]: /part-9-social-media-ipad-as-my-main-computer
[i10]: /part-10-they-keyboard-or-the-lack-of-it-ipad
[i11]: /part-11-docs-and-spreadsheets-and-mountain-li
[i12]: /part-12-web-sites-as-apps-appification-ipad-a
[i13]: /part-13-kiss-keep-it-simple-stupid-ipad-as-my
[i14]: /part-14-appletv-air-plays-magically-ipad-as-m
[i15]: /part-15-why-iphone-matters-ipad-as-my-main-co
[i17]: /ipadonly-jobs
[iv]: /my-ipad-only-accessories-vs-steve-wozniaks-ga

[n]: https://michael.gratis/nozbe