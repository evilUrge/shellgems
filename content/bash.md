---
title: "➕.bashrc"
date: 1533254400
draft: false
---

curl   | why
-------------  | -------------
`docker rmi $(docker images -q) -f`  | Delete all docker images
`docker rm $(docker ps -a -q) -f` | Delete all docker containers
`source .env/bin/activate;export PYTHONPATH=$pwd`  | Activate current python env and set PYTHONPATH envparam to current folder
`git branch –merged \|grep -v “\*” \| xargs -n 1 git branch -d`  | Local git branches cleaner
`lsof -i \| grep LISTEN`  | Open ports(OR `netstat -tulpn`)
`npm build && firebase deploy \|\| echo “Failed to build”`  | Rebuild project and deploy to firebase
`VBoxManage startvm {machine name} –type headless`  | Start VM in headless mode
`VBoxManage controlvm {machine name} acpipowerbutton`  | Stop VM in headless mode
`curl -w “@~/.config/.curl-format” -H “Origin: https://duckdcukgo.com” -H “Access-Control-Request-Method: GET” -H “Access-Control-Request-Headers: X-Requested-With” -X OPTIONS –verbose {1}`  | Measure a request(time,cors, header etc) with curl _Don’t forget to use this file as a timestamp formatting and place it somewhere(mine is at ~/.config)_
