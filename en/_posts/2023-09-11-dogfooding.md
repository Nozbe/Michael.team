---
tags: [business,nozbe]
cover: "dogfooding.jpg"
---

# How we work on features and deploy Nozbe app weekly… while eating dog food?

Last week [I did a guest webinar (in Polish)](/pl/dogfooding/) on how we ship [Nozbe app][n] and I gave all the details… In a nutshell, we break lots of "industry standards", and we eat dog 🐶 food…
<!--More-->

![{{ page.title }}](/img/{{ page.cover }})
## 🎉 NEW FEATURES? We design them and fight!

We have a **"Design"** project in Nozbe where we post suggestions for new features. Each feature is a task. Design decisions are in the comments. When we have our design meeting, we fight over each detail!

![{{ page.title }} design](/img/dogfooding-design.jpg)

## 🧐 Feature is designed? Goes to portfolio of options!

When the feature is designed and has all the specs, it is being dragged down to our **"portfolio of options"** section in "Design" project. It might be chosen in next programming cycle.

## 🔁 Cycle? Yes, we work in 6-weeks cycles!

Taken from [37signals](https://basecamp.com/handbook/09-how-we-work) playbook, we plan 6 weeks in advance and after that we decide again which features to work on in next cycle, which continue, which don't or what to choose from the portfolio.

## 🗄️ Each feature is a new Nozbe project!

We have a project template in Nozbe with "Design", "Development" and "Bugs" sections for each new feature. We group projects from the same dev cycle together. Everyone from the team can access these projects and chime in.

![{{ page.title }} project](/img/dogfooding-project.jpg)

## 🧑‍🎨 Programmers OWN their features!

Each programmer who is assigned to a feature is responsible for it. They follow the design, but they decide how they work on it or when they merge it to our "master" branch.

## ✍️ Programmers journal! Kind of.

Each programmer in their feature project has a special "Status" task with a `#Status` tag. This is where they document their work progress. If me or any manager want to know what's up, we simply check the "Status" tasks!

![{{ page.title }} status](/img/dogfooding-status.jpg)

## 🤝 Code review! A colleague reviews it!

The programmer also chooses a colleague who will review their code. This is all happening in a branch or pull request (PR) on GitHub. We believe in small PRs to avoid bugs. Write. Ship. Test. Repeat.

## ✔️ [Nozbe][n] vs [GitHub](https://github.com/Nozbe)? Where's the discussion?

We discuss the feature's specs, behavior and design in its assigned Nozbe project. We comment on tasks there so that entire team can participate. Programmers comment on code in GitHub (but only code!).

![{{ page.title }} announcements](/img/dogfooding-announcements.jpg)

## 🐶 Dogfooding - we use cutting edge version of Nozbe every day!

When a feature is coded by the programmer, they decide when they're done and merge it to "master". Apps for all the platforms are built automatically… and system forces all of our team to download them… NOW!

## 📢 Entire team tests and eats the dog food!

The programmer/author of the feature announces it to the whole team in our "Dogfooding" project in Nozbe so that everyone can check it out, test it and give their feedback. Many heated 🔥 discussions are happening there!

## 🫵 We really force people to use Dogfooding app!

The "[dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food)" Nozbe builds are being pushed to our company Slack and our sync engine forces us to get the latest app by being really annoying about it. On a normal day we update Nozbe app at least 3 times on each platform!

## 🧘‍♀️ Features wait on Dogfooding at least 1 week!

Even if a feature has been approved by the team, checked out by the Q/A engineer, we don't release it to production for at least a week. This ensures no crazy edge-case issues come up over longer usage.

## 🐞 Bugs do show up!

Even though we have code review, testing and dogfooding, sometimes we ship to production a feature with bugs. This happens, but then we fix the bugs quickly and not sweat 😓 about it, because…

![{{ page.title }} shipping](/img/dogfooding-shipping.jpg)

## 🚂 Shipping train! We ship every week!

Almost every Monday there's an updated Nozbe app shipped to all the customers on all the platforms. All. Of. Them. It's a semi-automatic-semi-manual process but thanks to it there's a fresh [Nozbe][n] for everyone weekly!

## ☑️ P.S. [We love checklists in tasks](https://nozbe.com/tasks?c=michaelteam)!

We have a "Weekly release" project in Nozbe where all the recurring tasks with their pinned comments and checklists are stored. Each week they refresh and we go through it all to ship our app quickly and efficiently!

## ✅ We use Nozbe to design and build Nozbe!

As you can see, not only do we use our application every day, but we also force our team to use the latest version and we actively use Nozbe's features to be able to build it.

## ⁉️ Questions? More detail?

If you have additional questions about our shipping and development process or are curious about our Dogfooding setup, [don't be a stranger and ask me](/contact)!




[n]: https://michael.gratis/nozbe
[np]: https://michael.gratis/nozbepersonal