---
title: "What all small cloud platforms truly missing? (and how am I gonna face that)"
date: 1525392000
draft: false
---
Not all of us need to use one of the a huge cloud platform as AWS and GCP.  but recently after working on a migration project that required me to transfer everything to DigitalOcean, I noticed something that is truly missing.

I’m not talking about a managed services such as: RDS\Cloudsql, ELB with Autosacle, AppEngine, ECP or anything  else that makes these huge providers covered so many services

> Full disclosure: today I enrolled to DigitalOcean early access for a container orchestration based on Kubernetes.

I’m talking about provisioning your machine ssh key into a new instance

meaning that if I got used to just use the gcloud SDK to ssh into an instance

`gcloud compute ssh my-instance --zone=europe-west1-c`

Nowadays, I have to ssh with a root user and then add all the keys of my teammates.

Better yet; In some small providers such as Vultr and TransIP you actually need to do that from the browser and not to mention to modify `/etc/ssh/sshd_config` for only accept keys.

Seem like a trivial thing to have these days, but the small player can’t really focus on developing their own CLI tools for developers.

> Theres some cool solutions out there including ansible playbook that deals with that
See the following amazing article of “How To Manage SSH Keys Using Ansible“

Fortunately, I had a great opportunity to work with a highly skilled DevOps that introduced me to Ansible.

Starting to cover up all the teammate’s ssh keys

But then I couldn’t stop wondering of what if I’ll have a built-in CLI tool to provision bulk of ssh keys and also to actually ssh into a machine via alias(meaning no need to add loads of new aliases to .zshrc).

I started to work on some small tool that actually does exactly what Ansible covered for us, provisioning ssh keys.

> [SSH Key provisioner](https://github.com/evilUrge/ssh-key-provisioner)

At the beginning it was plain and simple, iterate on a list of hosts.

Later it occurred to me that nobody gonna manages this hosts JSON files, So I added a build in integration with Vultr API and DigitalOcean API.

And now I started to fancy the idea of converting this to a CLI tool that will also hook up to the user .bashrc and will create a main alias to ssh.

Can’t say really when and what’s next, all I know is that I really love DigitalOcean and their amazing technical articles(you probably read their posts once), and of course Vultr – They pretty much responsible for the drop of cloud platform prices and increment of the micro-instances specs.
