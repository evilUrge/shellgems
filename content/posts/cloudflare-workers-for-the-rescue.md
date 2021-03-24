---
title: "Cloudflare workers"
date: 1616580315
draft: false
description: Cloudflare for the rescue! Solve small production issues by altering your own infra without moving mountains.
---

So a while back Cloudflare introduced their edge solution and in the begging it was a nightmare to debug and deploy a new worker.

Nowdays, they have live examples, amazing documentation - and because their service is literally "located" right after the service NS, it's really on the edge and the response time shows that!

Because I'm a huge fan of Cloudflare workers and their power, I decided to share 2 quick solutions that saved me and the production environment from human made errors that somehow (mm... agile) made it into production.


### Let's start with the first one, a small routing proxy for microservices
 - *Use case:* Having one entry point for all microservices without creating a new bottleneck.
 - *Works by*: Fetching the name of the service from the url, and reroute(! not redirect) the traffic to the desired service.

Snippet:
```js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
async function handleRequest(request) {
  const path = request.url.split('/')
  const urls = JSON.parse(URLS)

  return urls[path[3]] ?
  	fetch(`${urls[path[3]]}/${path.slice(4, path.length).join("/")}`
  ,request)
  : Response.redirect(DEFAULT_URL)
}
```

For that we're gonna use 2 additional environment variables:
```
DEFAULT_URL	= https://www.my-base-url.nl
URLS	= { "users": "https://europe-west3-somerandomid.cloudfunctions.net/users_microservice", "content": "https://europe-west3-somerandomid.cloudfunctions.net/content_microservice", "player": "https://europe-west3-somerandomid.cloudfunctions.net/player_microservice" }
```

_You can also use Cloudflare KV, if you're planning to change those vars frequently_

---



### Quickfix for Google storage missing MIME-types
In GCP sometimes the storage obj doesn't recognize the MIME-Type of a file.
*The real solution for this would be to iterate on all the missing MIME-Type files and mark them* (we did it via 3 liner python script), but that takes time depends on the amount of files.

So for that sole purpose I included this worker as a temporary solution till we'll mark everything.

```js
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let response = await fetch(request.url, request);
    if (response.status !== 200) {
      const fileName = request.url.split('/')[request.url.split('/').length - 1]
      const regExMatch = fileName.match(/\.[0-9a-z]+$/i)
      if (regExMatch) {
        const srcFolder = JSON.parse(EXT_FOLDERS)[regExMatch[0]]
          if (srcFolder) {
            response = await fetch(`https://cdn.my-bucket.nl/${srcFolder}/${fileName}`, request)
                }
            }
        }
    }
    const format = request.url.split('.').slice(-1)[0]
    const mime = JSON.parse(MIME)
    if (!response.headers.get("Content-Type") && Object.keys(mime).includes(format)) {
        response = new Response(response.body, response)
        response.headers.set("Content-Type", mime[format])
    }
    return response;
}
```
And also here we're using here 2 additional environment variables;
```
EXT_FOLDERS =	{ ".png": "img", ".jpg": "img", ".jpeg": "img", ".ttf": "fonts", ".woff": "fonts", ".scss": "css", ".mp3": "media", ".mp4": "media" }
MIME = 	{ "json": "application/json", "js": "application/javascript", "png": "image/png", "htm": "text/html", "html": "text/html", "css": "text/css", "jpg": "image/jpeg", "gif": "image/gif" }
```


And there's so many other amazing use cases for this incredible service!
That's it, just wanted to share those 2 that save my life.
