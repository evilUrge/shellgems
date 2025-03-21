---
title: "SSH Key Provisioner"
date: 1533254400
draft: false
description: "A Python CLI tool to provision SSH keys to your servers"
tags: ["Python", "SSH", "CLI", "automation", "security"]
categories: ["Development"]
---

![SSH Key Provisioner](/img/sshkey.png)

> TLDR(אמ;לק) – A Python CLI tool to provision SSH keys to your servers

I've been working on a new project lately, a Python CLI tool that helps you provision SSH keys to your servers. The idea came from a need to manage multiple SSH keys across different servers, and I wanted to make it easier to do so.

The tool is called `ssh-key-provisioner` and it's available on GitHub. Here's what it does:

1. Reads your SSH keys from a specified directory
2. Connects to your servers using SSH
3. Adds your public keys to the authorized_keys file
4. Supports multiple servers and multiple keys

Here's how to use it:

```bash
# Install the tool
pip install ssh-key-provisioner

# Run the tool
ssh-key-provisioner --keys-dir ~/.ssh --servers server1.example.com server2.example.com
```

The tool will:
1. Read all your public keys from the specified directory
2. Connect to each server
3. Add your keys to the authorized_keys file
4. Show you the progress and any errors that occur

You can also specify a single key to provision:

```bash
ssh-key-provisioner --key ~/.ssh/id_rsa.pub --servers server1.example.com
```

The tool is still in development, but it's already functional. I'm working on adding more features like:

- Support for different SSH key types
- Backup of existing authorized_keys file
- Support for different SSH ports
- Support for different SSH users

You can find the source code on GitHub: [ssh-key-provisioner](https://github.com/evilurge/ssh-key-provisioner)

Let me know if you have any questions or suggestions!
