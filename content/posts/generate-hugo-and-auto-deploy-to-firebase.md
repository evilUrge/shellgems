---
title: "Create a Hugo base blog and auto-deploy to Firebase host"
date: 1574513119
draft: false
description: 0 Code, self manage static blog that deploys itself.
tags: ["Hugo", "Firebase", "CI/CD", "CircleCI", "static site", "blogging"]
categories: ["Web Development"]
---

![CircleCI Deployment](/img/circleci.png)

When I started this blog, just like everyone else, I've chosen Wordpress; default in the blogging world (so it seems at least).
Wordpress is well established CMS, BUT IT'S AN OVERKILL.

I had a dedicated VM running alpine with the PHP runtime and Nginx.
Waste of money and resources for a simple blog.

Back then, when I researched for what CMS shall I used; I stumble upon [jekyl](https://jekyllrb.com/) - not a proper CMS but it looked good enough to generate me a nice site right?

Well - as much as it's not a new static-page-generator engine; [Hugo](https://gohugo.io/) gained more and more popularity, and an ex-college of mine was praising it as it was the ideal solution for fast creation and delivery of a website.

I've decided to give it a go, and I fell in love
markdown based content; generates pages within milliseconds(!).


**Moses!** all of a sudden using a heavy PHP based CMS as Wordpress felt like I'm stuck in 2003


So about a year ago I've made that switch and never looked back.
But to spice things up - I've added an easy deploy pipeline that generates and deploy the new content straight to my **Firebase hosting service**.

_I should've written about it earlier - but better now then never ey._

## Hugo
**Can't stress it enough - Hugo is blazing fast!**

First thing - get yourself a [theme](https://themes.gohugo.io/) _Or create yourself one if you want_
My blog is using [hugo-terminal](https://github.com/panr/hugo-theme-terminal) - a minimalist blog; with small modifications from my side.

> Actually you might want to check [**hexo**](https://hexo.io/) OR to the more extensive [**gatsby**](https://www.gatsbyjs.org/) - **just because js is awesome**

### Write your content
Instead of elaborating about how and what - just check this markdown file; notice something cool here
<script src="https://gist-it.appspot.com/github/evilUrge/shellgems/blob/master/content/posts/generate-hugo-and-auto-deploy-to-firebase.md"></script>
**Cool right😎**


## CircleCI
Two ways to go here:

 1. Use a public docker image of [hugo and firebase-tools](https://hub.docker.com/r/nohitme/hugo-firebase/)


 2. Install the latest Hugo every build just like that:

 <script src="https://gist-it.appspot.com/github/evilUrge/shellgems/blob/master/.circleci/config.yml"></script>
 The upside of using the latest Hugo - is if you're having a new theme, or clone an existing theme with git-submodule you'll always have the latest features supported
 > I had an issue when my build failed because the theme added new attributes that the old Hugo engine didn't know how to handle - better safe than paininthefrikkinars


## Firebase hosting
> OR [Surge](https://surge.sh/) OR [Zeit](https://zeit.co/) - doesn't matter

As long as your serving your static pages in a managed solution.
It would be cheaper and easier to manage for later.


# Last words
I haven't written anything using [Cloudflare] to save some traffic.
_lt;dr; save some more by using their free CDN and caching._

But to simplify things - [I've published my blog repository to the public](https://github.com/evilUrge/shellgems)


<center>
So, with almost zero costs, easy setup and zero maintenance
**You don't have any excuses to not have a blog 😀**
</center>
