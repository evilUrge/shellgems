---
title: "Firebase Functions and Python"
date: 1496534400
cover: pyFirebase.png
draft: false
description: Use python as a function engine in GCP\FB Functions.
---
Update #2: It’s official – beta:
==================
![screenshot](https://firebasestorage.googleapis.com/v0/b/shell-gems.appspot.com/o/posts%2FScreenshot-from-2018-08-21-12-01-31.png?alt=media)
As part of Google Cloud Platform, you can now use Python 3.7 runtime for Django or Flask based webapps!

Guess that it’s not yet implemented in Firebase, but as Firebase it’s just a nicer wrapper for an existing service, then it’s purely just a matter of time.

Thanks Google 🙋

Update #1: Ho-ly shit; It happened.
==================

A “compiler” for flask and Django based python apps.
https://github.com/MartinSahlen/cloud-functions-python

The rest of this post is irrelevant! just ignore all of this and start using with `pip install pycloudfn`.

Yas so have fun with it!

(I know I will)

Gilad =D

> Disclaimer: As part of my job, I’ve started to use Google’s Firebase for a new mobile service we’re developing.
----------------
For those who don’t know Firebase, it’s a set of tools for serving a mobile app. from the Push and SSO to MongoDB and an actual nodejs backend elastic service (which in a way resemblance to GCP App engine which I really love).
The thing is, Firebase backend service currently supports only nodejs .
So as a very clumsy solution for this, which is well known in [GCP Slack community](https://gcp-slack.appspot.com/), is using App engine for the backend side, and Firebase for SSO, Mongo, Push etc.
Luckily, ever since Google acquired Firebase. it made it as part of the whole GCP tools. which means that once you creating a GCP project, you can simply deploy your app to AppEngine, and use Firebase for all of it’s other perks.
Firebase is amazing. it took me time to admit it.
----------------
If you’re an indie developer, you getting every cloud service you can imagine for free, and then just change it to a “Pay as you go” free once you have real traffic.
I just wish that one day I could use Django REST framework within Firebase backend service.
In the meantime, at least we have [this wrapper](https://github.com/thisbejim/Pyrebase).
----------------
