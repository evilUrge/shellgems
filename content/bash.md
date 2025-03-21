---
title: "➕.bashrc"
date: 1533254400
draft: false
description: "A collection of useful bash aliases for modern development"
tags: ["bash", "aliases", "productivity", "development"]
categories: ["Development"]
---

alias | description
------------- | -------------
`alias c="clear"` | Clear terminal
`alias h="history"` | Show command history
`alias j="jobs -l"` | List jobs
`alias ports="lsof -i -P -n | grep LISTEN"` | Show listening ports
`alias path='echo -e ${PATH//:/\\n}'` | Show PATH in readable format
`alias now='date +"%T"'` | Show current time
`alias nowdate='date +"%d-%m-%Y"'` | Show current date
`alias meminfo='free -m -l -t'` | Show memory info
`alias cpuinfo='lscpu'` | Show CPU info
`alias mkdir='mkdir -pv'` | Create parent directories if needed
`alias wget='wget -c'` | Resume download if possible
`alias top='htop'` | Use htop instead of top
`alias myip='curl ifconfig.co'` | Show public IP
`alias localip='ipconfig getifaddr en0'` | Show local IP
`alias weather='curl wttr.in'` | Show weather
`alias moon='curl wttr.in/Moon'` | Show moon phase
`alias starwars='telnet towel.blinkenlights.nl'` | Watch Star Wars in terminal
`alias matrix='echo -e "\e[1;40m" ; clear ; while :; do echo $LINES $COLUMNS $(( $RANDOM % $COLUMNS)) $(( $RANDOM % 72 )) ;sleep 0.05; done|awk \'{ letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()"; c=$4; letter=substr(letters,c,1);a[$3]=0;for (x in a) {o=a[x];a[x]=a[x]+1; printf "\033[%s;%sH\033[2;32m%s",o,x,letter; printf "\033[%s;%sH%s\033[0;0H",a[x],x,letter;if (a[x] >= $1) { a[x]=0; } } }\'' | Watch Matrix in terminal
`alias docker-clean='docker system prune -af'` | Clean up Docker system
`alias docker-stop='docker stop $(docker ps -aq)'` | Stop all Docker containers
`alias docker-rm='docker rm $(docker ps -aq)'` | Remove all Docker containers
`alias docker-rmi='docker rmi $(docker images -q)'` | Remove all Docker images
`alias docker-compose='docker compose'` | Use new Docker Compose syntax
`alias git-status='git status -sb'` | Show git status
`alias git-log='git log --oneline --graph --decorate'` | Show git log
`alias git-branch='git branch -a'` | List all git branches
`alias git-pull='git pull --rebase'` | Pull with rebase
`alias git-push='git push origin HEAD'` | Push to current branch
`alias git-commit='git commit -m'` | Quick commit
`alias git-stash='git stash save'` | Quick stash
`alias git-stash-pop='git stash pop'` | Quick stash pop
`alias git-clean='git clean -fd'` | Clean untracked files
`alias git-reset='git reset --hard HEAD'` | Reset to last commit
`alias npm-update='npm update -g'` | Update global npm packages
`alias npm-clean='rm -rf node_modules && npm cache clean --force'` | Clean npm
`alias yarn-clean='rm -rf node_modules && yarn cache clean'` | Clean yarn
`alias python='python3'` | Use Python 3
`alias pip='pip3'` | Use pip3
`alias venv='python -m venv'` | Create virtual environment
`alias activate='source venv/bin/activate'` | Activate virtual environment
`alias deactivate='deactivate'` | Deactivate virtual environment
`alias serve='python -m http.server'` | Serve current directory
`alias ports='lsof -i -P -n | grep LISTEN'` | Show listening ports
`alias mkdir='mkdir -pv'` | Create parent directories if needed
`alias wget='wget -c'` | Resume download if possible
`alias top='htop'` | Use htop instead of top
`alias myip='curl ifconfig.co'` | Show public IP
`alias localip='ipconfig getifaddr en0'` | Show local IP
`alias weather='curl wttr.in'` | Show weather
`alias moon='curl wttr.in/Moon'` | Show moon phase
`alias starwars='telnet towel.blinkenlights.nl'` | Watch Star Wars in terminal
`alias matrix='echo -e "\e[1;40m" ; clear ; while :; do echo $LINES $COLUMNS $(( $RANDOM % $COLUMNS)) $(( $RANDOM % 72 )) ;sleep 0.05; done|awk \'{ letters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()"; c=$4; letter=substr(letters,c,1);a[$3]=0;for (x in a) {o=a[x];a[x]=a[x]+1; printf "\033[%s;%sH\033[2;32m%s",o,x,letter; printf "\033[%s;%sH%s\033[0;0H",a[x],x,letter;if (a[x] >= $1) { a[x]=0; } } }\'' | Watch Matrix in terminal
