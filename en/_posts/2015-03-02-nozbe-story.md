---
tags: [nozbe,business,draw]
cover: "nozbe-story.jpg"
---

# Nozbe story - interview with me for "Stories of the best Polish apps"

*This is an interview that I granted at the end of 2014. It [was published on Spidersweb.pl][wyw] - one of the most popular Polish tech-blogs platform. It was a part o a series on Polish apps used internationally authored by [Hubert Taler][h]. If you want to dig deeper about my story, check out my [Interview about Nozbe](https://sliwinski.com/interview) and [my "about" page on this blog](https://sliwinski.com/about) and [my recent blog post about our 8th anniversary](https://sliwinski.com/8nozbe).*

<!--More-->

![{{ page.title }}](/img/{{ page.cover }})

**1. Were the Nozbe apps and web service launched at the same time? Which platform did you focus on at first?**

[Nozbe][n] is not just an app - it's a whole suite of productivity apps for time, tasks and projects management. Apart from the web access, we offer apps for Mac, Windows, Linux, Android… and of course for the iOS platform, meaning iPhones and iPads. When I launched Nozbe in 2007 iPhone had just been presented by Apple. I didn't realize, at the time, how much the world was going to change and thus I thought that Nozbe would be a web app forever...

Even Apple's point of view seemed quite similar - at the very beginning it was only possible to build iPhone web apps, not native ones. I remember it very well - they started selling iPhone in the US in June 2007 and I decided to quickly develop a simple "web app" for iPhones which I called "iNozbe". I made it together with my customers - as I lived in Poland I couldn't even touch the real iPhone... I wrote the code for the first version within a week and I released it for testing. The users who owned iPhones reported how the things were and I would fix the bugs and update the app. My zeal was finally appreciated by the industry in September 2007 and I was invited as a speaker to the Office 2.0 conference to San Francisco. It was then when I got my first iPhone and a chance to see how my app works on it. And there's more...



**2. What were the issues the users might have experienced when using Nozbe at that time?**

The web app wasn't ideal... Obviously, it was possible to work on it a little bit but the Javascript libraries as well as the web browsers were still quite weak then. Nonetheless, as for a 1.0 version, Nozbe wasn't all too bad. 

Soon after, iPhone 3G and AppStore appeared. I realized that I needed a native app. I hired programmers via "Elance" and paid them to build an iPhone app based on my web-based software. Unfortunately the app hit the AppStore quite late and it fell behind the competition also in terms of quality. It was when I decided to cooperate with a Warsaw-based company - [Macoscope][]. They were to develop a proper iPhone and iPad app for me. They took my code and got started right away so that, soon after the iPad premiere, the apps for the two devices were ready. Both were much prettier and more functional than the previous version.

Cooperation with Macoscope was essential to me at that time. My company didn't have any expertize in developing mobile apps and I was still sure that my core business was the web app with the mobile apps being just the extras. And perhaps it true at the time in 2010 when the iPad was introduced. However in 2014, things were totally different - we focused on mobile and we built Nozbe 2.0 from scratch.

**3. I know that at a certain point you were considering using a multiplatform library to build your app. What were the pros and cons of that solution?**

At the time, many cross-platform tools were created (e.g. Appcelerator or Adobe Air) and we followed their development carefully. We tested both solutions: cross-platform and native apps and even more. The advantage of cross-platform is obvious: you write a code and send it to all platforms. The weak side is the fact that your app is neither really "native" nor integrated with the device on which it is being run. The situation became even more complex when Facebook rewrote their app from scratch and made it native. Many people believed that was a "must". We chose something in between...

**4. So in what technology Nozbe Android, Windows and iOS apps are written?**

Here lies the power of Nozbe 2.0: a year ago, I asked my developers to make a simple Nozbe prototype using the latest Javascript libraries. It was supposed to run as smoothly as a native app. The guys made it and I was blown away with the outcome. Both speed and gestures' smoothness were amazing. And so, we decided to develop the app's core using the web technologies and then approach each platform individually by building the particular apps with the use of their native code. That's why our Mac application offers much more keyboard shortcuts than the web app, it is integrated with the OS (meaning you can add new tasks from every location on your Mac) and it has a widget, share extension and a handoff in the Yosemite system. Nozbe iOS8 app includes the widget, share extension and numerous native gestures. Android and Windows versions are going to get integrated with the system really soon as well.

**5. The latest release came along with lots of changes. What did they stem from?**

From the “Mobile first” idea! We designed [Nozbe 2.0][] for iPhone first. Only then, we "extended" it to desktop apps. You can check it out by shrinking Nozbe app window on your desktop. It is fully responsive. We realized that a mobile app is not just an addition to Nozbe. In fact, mobile devices are where people often prefer to run Nozbe nowadays. I understood that we must be able to offer applications for all the popular platforms. We needed to start everything from the very beginning. And so we did. Now, Nozbe 2.0 is the foundation for all our future plans and actions.

Our decision to use the web technologies originated from a whole range of other reasons. The fact that all our apps have the same core code makes the development easier and eliminates certain bugs. It also means that the apps for various platforms are more consistent and we can customize and react to the customers' needs much faster. Most of the updates in Nozbe 2.0 are run in the auto-update mode - the users don't have to download the latest versions from our website or the App Stores.

**6. There are two official versions of Nozbe in App Stores at the moment. Why is that?**

There is just one Nozbe app in iOS App Store. It is still supported by an old "To-do List for Nozbe" application from Macoscope, but it is no longer our official app. We don't take responsibility for that tool any more. There were two Android apps in Google Play at some point indeed. That was because before the 2.0 release, we developed two separate versions: for tablets and smartphones. Nozbe 2.0 works great on Android phones, tablets and phablets so we have removed the old tablet version and asked the users to download the new, universal version.

**7. What did you try to modify and improve in the course of the app development? What is the most interesting and exclusive feature? Is there anything that the users haven't noticed (like my little discovery: the offline version in a file :))?**

A superb but regularly forgotten feature is the use of hashtags and ats that we know from social media. For instance, when typing the task's name in Nozbe, you can also write a # - Nozbe will then instantly suggest what parameter you can add to your task. Example: in order to add a task "Jogging with Paul" in a project called "Fitness" with a specified duration of 1 hour and a date (tomorrow) you will need to type: "Jogging with Paul #Fit #1h #tomorrow". And that's it. Nozbe will guess that "fit" stands for "fitness" and will include all other parameters. We can also use @ sign to mention someone in a comment added in a shared project. And so, when someone writes a comment: "@Michael - what do you think of it?", I receive a notification on my iPhone saying that somebody mentioned me in a certain task.

**8. How many users go for the apps and how many of them choose the web interface?**

It used to be 20/80 before, but now the proportion is 50/50. I presume that the web app will become "just an extra, emergency addition" by the end of the year. It should be a choice of maximum 20% of Nozbe users. Personally, I don't use it at all. I work either on my iPhone, my iPad or Mac... and I always work using the native apps. As you can imagine, I spend almost my day in Nozbe. Everyday. I don't get e-mails from my team members any more. We communicate through tasks and comments in Nozbe. If someone needs something from me, they know they should create a task and delegate it to me. That's why the mobile version is so important to me - I carry my iPhone everywhere with me. 

**9. What were the major obstacles you faced while working on the app for particular platforms?**

There were plenty of them, but for us they seemed to be more of cool challenges rather than problems. As I've mentioned, we want each of our apps to be as much integrated with a given platform as it is possible and to take advantage of the options it offers. That's why we've worked really hard to be able to support the new functions of iOS8, Yosemite... or new Android and Windows 8.1. We still don't have the Windows Modern UI app but we should be releasing it soon. We've also started working on Nozbe for Apple Watch. We really love this kind of challenges. They prevent the IT guys from getting bored. We also have to buy new toys all the time :) I bought [iPhone 6 Plus](https://sliwinski.com/6pluslove), for example, although I thought it was way too big for me. But that is a trend so I needed to follow it. I can't afford to be lagging behind. These are the sacrifices we have to make :)

**10. Did you run the whole development process yourself or you outsourced some parts of it?**

I tried outsourcing before - these were experiments and we got the best results when cooperating with Macoscope. We wouldn't have been able to build our own iPhone and the iPad app at that time. Today, the native apps are integral parts of the Nozbe system, so they need to be absolutely consistent, work perfectly and must stay under our control. This is the reason why we are constantly [looking for talented programmers](https://nozbe.com/jobs) willing to work remotely and make Nozbe better and better. Hundreds of thousands of people from across the world use our application suite to plan their lives everyday. We have a really cool mission and a great responsibility and challenges at the same time. And we truly love it :)

***Question:*** *What do you think about my Nozbe story? Anything else you'd like to ask me?*


[wyw]: http://www.spidersweb.pl/2014/11/historie-polskich-aplikacji-nozbe.html
[h]: http://twitter.com/htaler
[Macoscope]: http://macoscope.net
[Nozbe 2.0]: https://nozbe.com/blog/nozbe-20

[iMagazine]: http://iMagazine.pl
[Dropbox]: http://db.tt/kD7Liux
[Evernote]: /how-i-use-evernote
[It's all about Passion!]: /passion
[Nozbe]: http://nozbe.com/
[#iPadOnly]: http://ipadonlybook.com/
[Productive! Magazine]: http://productivemag.com/
[Productive! Show]: /show
[Twitter]: http://twitter.com/MSliwinski

[n]: https://michael.gratis/nozbe