---
title: "Howto use Firebase RemoteConfig in your project as a vault"
date: 1609408657
cover: remoteconf.png
draft: false
description: A free easy alternative to Hashicorp vault which requires zero to non setup.
---
```
Disclaimer: Firebase remote config main purpose is to push new configuration for mobile apps!
As it gains popularity, and because it's a free-to-use managed service that requires no real efforts to setup, I had the chance to experiment with it and utilize it within a project I worked on in the build level of a CI.
```
_It's been a while_

Recently I solved a small repetitive challenge we're all facing with new projects - allowing the change of configurations on the fly without having to change anything in the codebase.

As the project manager I worked with always changed his mind about enabling different services and changing texts and translations in a service of ours, I've decided to once and for all solve this with an easy-to-use service that will allow him to change whatever he wants without nagging any of the developers.

A common open source solution is [Hashicorp vault](https://www.vaultproject.io/). But because it takes time to setup, and due to the fact I wanted the project manager to use it I had to find something with a better user-friendly interface.

Firebase has their RemoteConfig, a great service to propagate configurations to a mobile app - Defo not our use case, but because it's all ready to use and have a great interface to work with, I've decided to give it a shot and try to include it in our CI build pipeline.

So, first thing because all of our projects are written in JS, it made sense to include a build script in nodejs for the CI to execute on build.

Lucky, Firebase admin module includes access to remote config. So I wrote the following build script:

```js
const admin = require("firebase-admin")

admin
.initializeApp({
  credential: admin.credential.cert(
    ['production', 'staging'].includes(process.env.NODE_ENV)
      ? require('./gcp.json')
      : JSON.parse(process.env.FIREBASE_ADMIN_SDK)) // Can be replaced by just using the service account json file above
      ,databaseURL: process.env.FIREBASE_DATABASE_URL})
.remoteConfig()
.getTemplate()
  .then(content =>
    require('fs').writeFile('remoteConfig.json', JSON.stringify(content.parameterGroups), 'utf8',
      (err) => err
        ? console.error(`failed to write remote conf: ${err}`)
        : process.exit()))
  .catch(err => console.error(`failed fetching remote conf: ${err}`))
```

This script creates a JSON file in the root of the project `remoteConfig.json`.
To make things even easier to the dev team, I've modified the package.json to include our new fetch conf script:
```Json
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test": "npm run unit",
    "fetch": "node .fetchconfig.js",
    "build": "node .fetchconfig.js && node build/build.js"
  },
```

Dus everytime our CI (github action) was triggered -> on the npm build level -> fetch firebase remote conf!

Easy right!
But that's not covering the use case of when the project owner publish *NEW* conf, and he wants to see it on staging

For that soul purpose you can deploy a dedicated firebase function that listens to remote config and triggers a build in your CI!

https://cloud.google.com/functions/docs/calling/firebase-remote-config#functions_firebase_remote_config-nodejs

_In our case, I had to use Github API to trigger our Github Action pipeline._

That's it!
Oh yeah, COVID sucks and I don't remember a thing from this past year.

Fin.
