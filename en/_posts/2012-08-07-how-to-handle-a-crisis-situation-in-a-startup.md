---
tags: [business,draw]
cover: "how-to-handle-a-crisis-situation-in-a-startup.jpg"
---

# How to handle a crisis situation in a startup?


Let's not talk [about the iPad](/ipadonly) this time :-) Two weeks ago our DNS provider company was attacked (DDoS). Many web sites (including ours) were affected and some were left unreachable for the whole duration of the attack (almost two days!). Fortunately we quickly managed to migrate our [Nozbe][n] DNS thus seeing only a minor impact on our sites but nonetheless, it was a big deal. This post is inspired by the way Zerigo failed to handle the crisis, but I'm NOT writing this to criticize this particular company. I'm writing this to give us all here a blueprint of how to handle a problem like this. What to do when a service you're offering to your customers (and for which they're paying you lots of money!) is not available to them?! Well, here are my conclusions:

<!--More-->

![{{ page.title }}](/img/{{ page.cover }})

  


## Crisis can happen to anyone. It did happen to us few times.

At [Nozbe][n] we've got an amazing infrastructure yet problems did happen in the past (once, when I was on an intercontinental flight to Japan). Sometimes these issues are your fault, sometimes they seem beyond your control. So what to do first?

## 1. Someone must be dedicated only to communication with customers

When a crisis comes, the whole company wants to instinctively fix the issue but there should be at least one person dedicated to only handling the external communication channels with the customers. They should not do anything else. Let the support team handle the emails, programmers and sysadmins handle the problem... and this one person has to keep doing this:

  * At least once every 30 min - 1 hour post the status on the [company's status page](http://status.nozbe.com) (we keep ours on Tumblr)
  * Post these on company's [Twitter page](http://twitter.com/nozbe) and [Facebook page](http://www.facebook.com/nozbe)
  * Keep replying to @replies and Facebook comments all of the time

The company, normally semi-transparent - must change to "fully transparent" in this moment. The "crisis manager" should be asking the rest of the team for ANY updates and post these directly to customers. They should reassure the anxious customers that their data is intact and that the company is working on a fix like crazy. **It's all about trust at this point - and if the customers don't see updates from you, they stop trusting you**.

> Note: Zerigo did some of that, but they were posting updates every 4-5 hours... which is totally unacceptable when their customers' web sites depend on their fix. When we found out that they were not responsive and the crisis looked more serious, we quickly switched DNS servers in [Nozbe][n] even though some of their DNS servers were working and generally our users could access our services. They lost our trust at this point.

## 2. Send customers an email halfway through

Just send them an email explaining what's happening. Let them know you're handling this, you're in control. We're using an external email provider ([GetResponse](http://www.getresponse.com))and since we're kindly convincing our customers to sign up for our Newsletter - we can send them an email anytime as we're not using our infrastructure for that. So there is an email channel we can always use.

Don't send the email too soon, just in time you've got some new updates and are more-less in control of the crisis. Very few customers (relatively) track us on the social media so sending an email makes sure we can reach these who simply have no idea what's happening and haven't checked the updates on Twitter or Facebook or the status blog.

> Note: We didn't get any email from Zerigo. Not until two days later when the situation was resolved. Too late in my opinion. Again, that's why it's important to have someone on the team as the "crisis manager" so that they can actually compose an email like this.

## 3. Find a solution "for now" - a backup plan

When you see the crisis gets bad, find out if you can offer a "hack" or some other "intermediate" solution to the problem. I know it's easier said than done, but prepare for that. In [Nozbe][n] we have our data geo-redundant so actually even if our whole datacenter would burn now, we'd be able to build "another" Nozbe in a different data center in less than an hour with all the customer's data intact. Yep, it's doable ([we have our triple-backup system](http://www.nozbe.com/security) and that's why our customers trust us). If you can't do that (you really can't?) find some other solution - so that at least your users can access some of their data... enable them to do something... anything.

> Note: Zerigo didn't have any backup plan - any backup DNS servers/infrastructure the customers could rely on. I'm not an expert in DNS (that's why I thought I was using experts). When they announced their servers would be unblocked in 12 (or more!) hours, it was devastating. Their competitors were offering a backup plan to Zerigo customers... I wouldn't want my competitors offering backup plans to my customers...

## After the crisis: Figure out how to apologize and make it up to the customers

The crisis is gone, your service is up to speed. How to handle the situation now? What to do with all these affected customers? Again, contact them, send them another email, post a blog post, explain, find a solution for the future and find a way to make it up for the problem your customers were having - give a bonus month of service, maybe an additional feature, a free upgrade... anything that would entice your users to stay with you or at least come back to you after the dust has settled. I'd say a bonus, upgrade or additional feature would be better than just crediting your customers back for the "downtime". What's a few bucks if your web site that potentially brings hundreds if not thousands of dollars in revenue every day was down for a few days?

> Note: Zerigo did send me an email (more on that later), they did post a blog post explaining what happened and how they're going to make sure this won't happen again. And I think they credited me a few bucks back for the "downtime" - yet it feels like a slap in the face instead of a reward.

## When Emailing, be polite, apologetic and talk in the first person - be a friend who failed but wants a second chance

This is the email I got from Zerigo:

> Sent from: noreply@zerigo.com
>
> Subject: _Zerigo DNS outage explanation_
>
> _Dear Zerigo Managed DNS Subscriber,_
> 
> _On July 22nd at 8:30 PM PDT our global network of Zerigo nameservers became the target of a large-scale DDoS attack, saturating bandwidth in multiple data centers. This impacted availability of four of our six global nameservers as well as our management portal. We immediately applied our DDoS mitigation measures, and worked continuously with our carriers to restore service availability. Service was fully restored for all global nameservers, except Dallas and UK, at 12:50 PM PDT on July 23. Our Dallas and UK nameservers were brought back online at 8:00 PM PDT on July 23._
> 
> _These kinds of malicious attacks are not new, however they are becoming more sophisticated. While no amount of protective measures are guaranteed to be 100% sufficient, we are implementing additional safeguards to protect the service from future attacks of this magnitude._
> 
> _We sincerely apologize for the issues caused by this attack._
> 
> _Sincerely,_
> 
> _The Zerigo Support Team_  
> _support@zerigo.com_  
> _+1-720-210-5439_

It's not bad, but let me point out some problems I have with this email:

  * It's sent from "noreply" email address. It gives an image like they really don't want my reply... and yet it's me who is their customer (to their credit, they give email address and phone number at the end of email). If you can, swallow the "out of office emails" and don't send an email from a "noreply" address.
  * I'm not a subscriber. I'm your customer. Don't call me something I'm not.
  * Thanks for explaining what was wrong, but why in a mambo-jambo language so that I don't figure out you were out for two full days? I know you were. I suffered it. There's no reason to hide it.
  * Give more details on what's going to be done to prevent this in the future. What kind of measures? Show that you care.
  * Email sounds like "blaming on the other guys" - it's "their" fault. Always take the blame. Always.
  * How will you make it up for me? By saying you "sincerely apologize"? Not good enough.
  * Who is this "Zerigo Support Team" fella? I don't know this guy. Use real names, sign with your name, preferably the CEO or founder's name. Make it personal, show you care.

_Here's my blueprint for handling a crisis. What's yours? What would you have done better or different?_

Again, this post was not a way to trash talk Zerigo. I'm still their customer and we just moved our DNS servers back to them - I gave them a second chance anyway as they had a great service before the outage so I'm counting on the fact they learned their lesson. As I was watching how (pretty poorly) they handled this crisis I decided to write this post to make sure that when a crisis comes to hit my company, we have a blueprint and a checklist in place. Hope this post helps you and your company as well. And let's hope are not having any crisis anytime soon.


[n]: https://michael.gratis/nozbe