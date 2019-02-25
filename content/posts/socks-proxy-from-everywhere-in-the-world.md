---
title: "Socks Proxy From Everywhere in the World"
date: 1492300800
cover: ff2.png
draft: false
description: Use any ssh server as a SOCKS proxy.
---
Ever wonder if you can use your raspberry pi/ec2/any kind of ssh instance as a proxy?

I had the same kind of thought as part of my awesome times with my old raspberry, and I’ve found a simple method to make any ssh server into a sock proxy.

We’ll start by running the following command:

```shell
ssh -D 3213 -C -N user@host.com -p 22
```

*little argument explanation:*

    D – Port the sock proxy going to bind in the localhost
    C – Compresses the data before sending it (pretty cool if you ask me)
    N- Create a ‘silent session’, where nothing is being sent nor receive(great for this usage).
    p – Port of the ssh host(default 22)

As for now, we manage to open a sock connection tunnel to port 3123.

Next, we going to configure localhost:3213 as our SOCKS proxy in Firefox.

Open Firefox and go to Preferences -> Advance -> Network tab
![Screenshot](https://firebasestorage.googleapis.com/v0/b/shell-gems.appspot.com/o/posts%2Fff1.png?alt=media)

In the connection section, click on “settings”:

As much as I love Chromium, Firefox comes with a built-in support for a SOCKS proxy, which is an advantage.

if you like to configure the same for Chrome, please refer to [‘Configuring a SOCKS proxy server in Chrome‘](https://www.chromium.org/developers/design-documents/network-stack/socks-proxy) article on how to use chrome flag for SOCKS proxy.

If you liked it as much as I did just add it to your bashrc\zshrc as an alias 🙂

That’s my first post btw, and it’s pretty exciting!
