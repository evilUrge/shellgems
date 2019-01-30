---
title: "Puppeteer + Firebase = Test headless in the cloud"
date: 1544486400
draft: false
---
![Post image](https://firebasestorage.googleapis.com/v0/b/shell-gems.appspot.com/o/posts%2Ffirepuppet.png?alt=media&token=5b826916-13e9-45ca-a7be-e3fa9f24aeaf)
A couple of months ago, I had the opportunity to experiment a bit with Google’s latest competitor for Cypress, Puppeteer.

Just like Cypress, Puppeteer is a node module that includes a headless version of Chrome and a wrapper-controller (similar to Selenium’s webdriver).

One of the key differences between the two is the fact that Puppeteer is purely opensource with no additional dashboards or nice fancy UI’s that costs the user extra. Therefore I’ve decided to experiment with it within one of my favourite edge services. Yes you guessed it => as a Firebase function

So I created the following demo suite project that’s using Express.js and Puppeteer as proof of concept:

https://europe-west1-puppeteerfirebasesuite.cloudfunctions.net/puppeteer/v1/ducksearch?query=hummus&result=3

A puppeteer test that searches in Duckduckgo.
The following handler (ducksearch), accepts the following GET params:
===
* query – term to search in duckduckgo
* result – retrieves a screenshot of the desired result (by default the first one).

The codebase of this suite can be found here: https://github.com/evilUrge/puppeteerFirebaseSuite

To conclude this – Edge is awesome;
