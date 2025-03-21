---
title: "Cloudflare Workers for the Rescue"
date: 1533254400
draft: false
description: "How Cloudflare Workers helped me solve a complex problem"
tags: ["Cloudflare", "serverless", "edge computing", "microservices", "performance"]
categories: ["Development"]
---

![Cloudflare Workers](/img/cloudflare.png)

> TLDR(אמ;לק) – Using Cloudflare Workers to solve a complex problem with minimal code.

I recently had a problem that needed to be solved quickly and efficiently. The solution came in the form of Cloudflare Workers, a serverless platform that allows you to run JavaScript code at the edge of Cloudflare's network.

Here's what I needed to do:

1. Create a simple API endpoint
2. Handle requests and responses
3. Process data in real-time
4. Scale automatically

Cloudflare Workers was the perfect solution because:

1. **Easy to Deploy**
   - No server setup required
   - Just write your code and deploy
   - Automatic scaling

2. **Fast Performance**
   - Code runs at the edge
   - Low latency
   - Global distribution

3. **Cost-Effective**
   - Pay only for what you use
   - Free tier available
   - No infrastructure costs

4. **Simple to Use**
   - JavaScript/TypeScript support
   - Built-in APIs
   - Great documentation

Here's a simple example of a Cloudflare Worker:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const data = await request.json()

  // Process the data
  const result = processData(data)

  return new Response(JSON.stringify(result), {
    headers: { 'Content-Type': 'application/json' }
  })
}

function processData(data) {
  // Your processing logic here
  return {
    status: 'success',
    data: data
  }
}
```

The worker will:
1. Listen for incoming requests
2. Parse the JSON data
3. Process it according to your logic
4. Return a JSON response

You can deploy this worker using the Cloudflare Dashboard or the Wrangler CLI:

```bash
# Install Wrangler
npm install -g @cloudflare/wrangler

# Login to Cloudflare
wrangler login

# Deploy your worker
wrangler publish
```

Cloudflare Workers is a powerful tool that can help you solve complex problems with minimal code. It's especially useful for:

- API endpoints
- Data processing
- Content transformation
- A/B testing
- Load balancing

If you're looking for a serverless solution that's easy to use and scales well, give Cloudflare Workers a try!

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
