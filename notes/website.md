---
date: 2020-08-04
tags:
  - dev/web
  - pages
---

# [My website](https://dnnsmnstrr.github.io)

|[View my homepage](https://dnnsmnstrr.github.io)|
|---|


Hosting on Github [[pages]] is free, but domains usually are not, so I tend to switch domains fairly regularly (whenever renewal would be too expensive). Due to this reason, I usually use `https://dnnsmnstrr.github.io` as the url in most places, which automatically redirects to the current domain.

Some domains I've had:
- [muensterer.tech](https://get.tech/search?DomainName=muensterer)
- muensterer.xyz
- muensterer.link
- muensterer.codes (managed by name.com)
- muensterer.lol (namecheap)

## API
I also run a personal [[api]] service on Vercel, which provides data to some of my [[projects]], as well as a [[redirect]] service with dynamic aliases, so I don't have to remember any links and can just add what I'm looking for to the url of my website.


<iframe src="https://dnnsmnstrr.github.io" title="Current website" width='100%' height='500px'></iframe>

## DNS

Regardless of which Registrar I'm currently using, I try to keep the configuration and set up consistent and minimal. The `dennis.` subdomain directs to my [Universe Landing Page](https://dnnsmnstrr.onuniverse.com)

CNAME & Redirect setup:

| Host | Value |
| :------------- | :------------- |
| CNAME       | dnnsmnstrr.github.io       |
| dennis      | https://dnnsmnstrr.onuniverse.com   |
| api       | https://dnnsmnstrr.vercel.app/api/    |
| *       | https://dnnsmnstrr.vercel.app/api/redirect    |

Just for fun, I've set up the pages deployment to work with [Cloudflare](https://dash.cloudflare.com).

## Build configuration

Initially, I used [Jekyll](https://jekyllrb.com/) to build my website, but I'm migrating to [eleventy](https://www.11ty.dev/) now.

Currently, I am working on an extension to the website using [kbar](https://github.com/timc1/kbar). This will enable an [[alfred]]-like interface directly within the page. Try it with <kbd>⌘</kbd> + <kbd>k</kbd>
Since it uses react, I have to create a bundle with webpack, which is then included in the page.

## Other Domains
- https://dnnsmnstrr.onuniverse.com/
- https://y.at/🤖💻📱⌚🎧
- muensterer.crypto