---
title: "How to Deploy Firebase Functions App With Any CI"
date: 1534636800
draft: false
description: How to use your CI and deploy to Firebase.
---

![RemoteConf](/img/JenkinsFirebase.png)
Update #1 08.10.18 – Forgot about all I just said; here is an amazing simple way
===
When you’re working with Google product, you need to get used to Google paste.

Recently google published a blog article explaining a little better of how to use their firebase deploy commend for CI purposes

I took the liberty to create a deployment script based on that post: [ci-firebase-deploy-script](https://github.com/evilUrge/ci-firebase-deploy-scipt)

and included a dockerfile based on alpine slim image.

<b>Checkout the README.md for additional information</b>
* * *
Recently, I’ve noticed that there is no real solid solution for deploying your Firebase app via your own CI.

In order to deploy to FB\GCP functions without neither saving any sensitive tokens on the CI instance nor using a paid plugins for such a simple action, we gonna create our own Docker image for deploying purposes.

> Because all the public images on Dockerhub are offering a prepared environment for development purposes for mainly Frontend(Firebase host service) and nothing really for Firebase\GCP Functions so we’re gonna create our own.
Not to mention the fact that most of those images are bloated and the size of the base image strart’s with 500mb!!!

Guide: How to create a dedicated docker image for CI deployment of an FB\GCP functions app
===
> Prerequisites:
---
1. Private Docker registry (Or just use your Docker Hub account).
2. A dedicated Firebase account for CI(Don’t use your own! create a new one and share your project with it).

1.We’re gonna create a new Dockerfile outside of our codebase, the main goal of this is the base for our later, authenticate firebase-cli(we’re gonna use that with Jenkins\CI of your choice).

```docker
FROM node:8-alpineENV NODE_ENV=developmentRUN npm install -g firebase-tools --productionCMD firebase login
```

* Because we pretty much don’t need a lot, we’re gonna use the base image of alpine to save space. In case your’e using the node package of Google BigQuery, make sure to use instead `node:8-slim` and install 'make' `sudo apt-get install make` to compile dependencies.

2.Time to build a base image! let’s execute the following

```shell
docker build -f Dockerfile .
```
Once that done, we’re gonna run our new image and expose port 9005 in order to authenticate firebase within our local machine

```shell
docker run -t -d -p 9005:9005 --name ci-serverless <new-image-hash>
```
In this stage, Firebase will ask if you are willing to submit usage data “anonymously”(of course not!), after that,an OAuth link will be generate. Copy that to your local browser and grant permission with your new CI user in Firebase.

3.Let’s commit our changes, tag and push to a new private docker image

```shell
docker commit <new-image-hash> ci-serverlessdocker tag <new-image-hash> <registery-host>/ci-serverlessdocker push <registery-host>/ci-serverless
```

<b>Don’t forget to create a new job in Jenkins\Bamboo\whatever CI for a serverless deploy and add your new image as a step for deploying your functions project.</b>

4.Money time! Finally we’re gonna create a Dockerfile in our functions project root

```docker
FROM your-docker-registry/our-new-image:versionFROM docker-repos-01.woger.local/ci-serverless:latestARG environmentENV NODE_ENV=$environmentCOPY . /appWORKDIR /app# Todo: Add a comment here for you guys about why it's not mendatoryRUN apt-get install make python -y && \    npm install --production && \    apt-get purge make python -y && \    apt-get autoremove -y# EndRUN firebase use $environmentCMD firebase deploy --only functions
```
Did you noticed something interesting there?
We have specify what environment we want use with firebase-cli.
If you’re happen to really like this solution and also want to implement continuous delivery in all of your environments,  just add a .firebaserc all of your available environments and their firebase project id

```json
{
  "projects": {
    "production": "production-project-id",
    "staging": "staging-project-id"
  }
}
```


And that’s about it!

Easy to maintain and secure enough without generating unnecessary tokens.

Happy coding =]
