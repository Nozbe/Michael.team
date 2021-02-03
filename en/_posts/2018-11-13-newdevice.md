---
tags: [ipadonly,iphone]
img: "newdevice.jpg"
---

# Quirks and issues when migrating to a new iOS device (case of iPad Pro 11” & iPhone XS)

Yesterday Christmas came early to me and I was setting up new iPad Pro 11” and a pair of new iPhones for me and my wife. I love the new devices but setting them up takes time... and has some issues. Here’s how I came about it and what I think can be improved in this process:

<!--More-->

![{{ page.title }}](/img/{{ page.img }})

## New iOS setup is still a pain...

If you’re upgrading to a newer iOS device the process is still very cumbersome. Apple is trying to make it “look easy” but it still has room for improvement. You have basically two options:

## 1. The “iTunes backup” option

You plug your old iOS device with cable to your Mac and provided you have enough free space there, you open iTunes and in there open the settings of your iOS device, change the setting from “iCloud backup” to “Local backup” and make sure to check the “Encrypt backup” option.

Once that’s done, you unplug your old device and plug in the new one and restore it from the backup you’ve just completed.

I did it yesterday with my wife’s iPhone 6S Plus to XS Max upgrade and it went OK, and it did preserve most of her passwords, but still, after everything was said and done, I had to tap on each and every app to make sure it’s loaded properly (and some weren’t) and in the meantime the iOS was nagging me with requests for iCloud/iTunes/AppStore and other passwords.

## 2. The “iCloud backup” option

You basically make sure you’ve got the latest backup of your iOS device and then power on the new device, sign in to your iCloud account and choose “restore from iCloud backup” and wait until everything gets downloaded via WiFi.

If you have fast Internet connection (which I luckily do) the download part doesn’t take as much time. This is what I did yesterday setting up my new beautiful iPad Pro 11”.

Later I had to go through the same routine of opening each and every app on the new iPad to make sure it works. Some worked out of the box, most asked me to log in again to download everything again...

And the worst part of this option is that you get a lot more prompts for passwords from iOS. Annoyingly so.

## Conclusion? How to make the “upgrade” in more of “it just works” style?

In my ideal world, if I’m replacing an iPhone or iPad, i.e. I will no longer use this iPad but will use the new one (and the same for iPhone), I should just “pair” them, confirm I’m replacing them and they should automagically transfer everything to the new device. Then the new device should “take over everything” and have the same settings, passwords and things as the old one did... and the old one should basically “self destruct” and go back to factory settings.

This is the ideal scenario. Meanwhile here’s something that could be fixed sooner by Apple and 3rd party developers:

## 1. Passwords

I have several “Apple IDs” so I get it why I need to put each of these passwords... but why once is not enough? I had to repeat several passwords many times over, which is frustrating! And defeats the purpose of having long and secure passwords, because if I have to write them several times I’m not inclined to make them longer to basically go against myself!

Also, the password prompt is modal - yes, it takes over the entire screen which is stupid as then I cannot go to 1Password to copy the password from there! Also, in iOS12 passwords are more integrated in the system... but not in these modal views - there’s no way to paste the passwords easily in there.

## 2. 2-factor authenticator

To be more secure you have to use 2FA (2-factor authentication) in as many web sites as possible. I used to use Google authenticator for this but now I’ve changed to [Authy](https://authy.com) as only this app will let me easily migrate 2FA settings to a new device in the future. This time around I had to set them up one by one from scratch.

## 3. Individual apps force you to log out... :-(

Even if you do a full backup and restore, many apps force you to log out. After the migration the app should “just work” and what happens is that you open it, the app notices that you're on a new device and it logs yourself out and asks for credentials again.

The banking apps were even more painful. I get it. Security. But still, it took quite a while to set them all up again.

I wish iOS developers would test their apps - to really see how the upgrade process works with their apps and if it can be improved.

Good thing [Nozbe][n] doesn’t log you out. It just works on the new device :-)

## The process of upgrading an iPhone or iPad is not there yet...

It’s getting better with each version of iOS, but it’s not there yet. I spent many hours yesterday upgrading to a new iPad Pro 11” and to a new iPhone XS. Longer than I thought.

The flip side is that in the process I reviewed all the apps on both the iPhone and the iPad and removed lots of them. Which is great. Now I’ve got significantly fewer apps on my devices which is a good thing. Let's see how long I can keep it that way.

## One last thing...

I’m sure USB-C is the future yet I still have to embrace it. I had to buy many new cables and dongles to be able to the new device... and now both the iPhone and the iPad have the same operating system... but they have completely different cables and dongles. Same software and different hardware... 

Something to get used to.

*- written on my new iPad Pro 11” - first post on this blog written on this beautiful device. More thoughts on it soon...*


[n]: https://michael.gratis/nozbe
[p]: /podcast