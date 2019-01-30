---
title: "Serverless Framework"
date: 1533254400
draft: false
---
![Post image](https://firebasestorage.googleapis.com/v0/b/shell-gems.appspot.com/o/posts%2FScreenshot-from-2018-08-03-09-46-37.png?alt=media)
> TLDR(אמ;לק) – Great potential; deploy microservices and API’s to a great number of serverless services (lambda;google func etc), but far from perfect.

Age of the serverless – stop configure and “autoscale” manually every little service.

I like this mindset; as a devoted user of firebase with nodejsbased functions and an ex-Google app engine with Django rest.

Using a platform SDK to deploy your own code could get addictive. There is something so satisfied deploying your own code to Firebase functions using [firebase-cli](https://www.npmjs.com/package/firebase-tools) or to Google functions with their [cloud SDK](https://cloud.google.com/sdk/).

The main problem with all of these beautiful serverless services is that you’re pretty much locking yourself inside of a very specific realm.

Imagine having a tool like [Terraform](https://www.terraform.io/), but instead of creating a stack based on regular instances or even docker swarm of containers having a framework that can actually deploy your serverless service regardless of what managed platform you wanna use.

Introducing: the serverless framework
===

Recently it became a hot topic – as a great solution to deploy a service without binding yourself to just one service.

As much as it’s a brilliant idea; the implementation so far is far from great – in fact it feels like yet another not fully baked framework that trying to solve a need by just hacking around.

Let’s dive into what I’m referring to as an unbacked service:



Let’s say I want to deploy my demo API to Google Functions:
Unbacked #1
---

I still have to include in my project [serverless-google-cloudfunctions](https://www.npmjs.com/package/serverless-google-cloudfunctions) npm package – what’s the point of trying to create a generic approach to all serverless services if I still have to use a specific service package.


Unbacked #2
---
In the serverless.yml conf file; we have to specify the current provider and a plugin that we use for this provider

The worst part is that we need to map the handlers(which is exactly like when using cloud sdk).


Example for a serverless.yml file:
---
```
service: demo-api

provider:
name: google
runtime: nodejs
project: test-evilurge
credentials: ~/.gcloud/keyfile.json

plugins:
- serverless-google-cloudfunctions
package:
exclude:
- node_modules/**
- .gitignore
- .git/**
PY
functions:
status:
handler: status
events:
  - http: path

test2:
handler: test2
events:
- http: path
```

Unbacked #3
---

Where is Firebase?

Or better yet; where is the community?

Of course, it’s an “opensource” service(not fully; ex having a dashboard is part of the paid subscription), meaning I can commit support for  Firebase func integration.

But it feels like with the need to add “plugins” and having a manifest yml file that specify paths, there’s no real advantage using serverless YET.



BTW; just for the heck of it

in firebase, it’s enough that I’m having their server if I’m not on dev env, and firebase will register all of my routes(unlike in serverless)
```
const express = require('express');
const bodyParser = require('body-parser');

const server = express();


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

require('./conf/urls').urls(server);

if (process.env.NODE_ENV === 'DEV') {
let port = process.env.PORT || 3000;
server.listen(port);
console.log('Server is running on port %s', port)
} else {
module.exports = {api: require('firebase-functions').https.onRequest(server)};
}
```

Conclusion
===

There is a great need to have this kindof framework that will make the work of deploying to those serverless service as more strip and generic as possible.

But as long as we gonna keep using a menifest yaml per project and having to include the service package within our build, there is no real advantage going on.

For the time being, serverless is simply an unbacked idea; Though ill be happy to get back to it one of these days when things will get a bit more simplified.
