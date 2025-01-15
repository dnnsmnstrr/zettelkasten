---
date: 2020-08-04
tags:
  - dev/web
  - pages
---
# My website

| [View my homepage](https://dnnsmnstrr.github.io) |
| ------------------------------------------------ |

Hosting on Github [[pages]] is free, but domains usually are not, so I tend to switch domains fairly regularly (whenever renewal would be too expensive). Due to this reason, I usually use `https://dnnsmnstrr.github.io` as the url in most places, which automatically redirects to the current domain.

Some domains I've had:
- [muensterer.tech](https://get.tech/search?DomainName=muensterer)
- muensterer.xyz
- muensterer.link
- muensterer.codes (managed by name.com)
- muensterer.lol (namecheap)

## Slashes 

I enjoy hopping on trends for [Slashpages](https://slashpages.net/) 
Some of the pages I have created:
- [[uses]]
- [[defaults]]
- [[ideas]]
- [[interests]]
- [[now]]

## API

I also run a personal [[api]] service on Vercel, which provides data to some of my [[projects]], as well as a [[redirect]] service with dynamic aliases, so I don't have to remember any links and can just add what I'm looking for to the url of my website.

<iframe src="https://dnnsmnstrr.github.io" title="Current website" width='100%' height='500px'></iframe>

## DNS

Regardless of which Registrar I'm currently using, I try to keep the configuration and set up consistent and minimal.
The `dennis.` subdomain directs to my [Universe Landing Page](https://dnnsmnstrr.onuniverse.com)

CNAME & Redirect setup:

| Host | Value |
| :------------- | :------------- |
| CNAME       | `dnnsmnstrr.github.io`       |
| dennis      | `https://dnnsmnstrr.onuniverse.com`   |
| api       | `https://dnnsmnstrr.vercel.app/api/`    |
| *       | `https://dnnsmnstrr.vercel.app/api/redirect`    |

My current deployment setup goes through [Cloudflare](https://dash.cloudflare.com), giving me additional options to run workers, monitor activity and overall improving page performance.

## Build configuration

Initially, I used [Jekyll](https://jekyllrb.com/) to build my website, but I'm recreating my page with [SvelteKit](https://kit.svelte.dev/) and [shadcn-svelte](https://www.shadcn-svelte.com/).

## Other Domains

- https://dnnsmnstrr.onuniverse.com/
- https://y.at/🤖💻📱⌚🎧
- Blockchain: `muensterer.crypto`, [`muensterer.vet`](https://muensterer.vet.ms/)

## Inspiration

Some cool personal websites I really like or have taken inspiration from:

- https://brianlovin.com/
- https://www.birobirobiro.dev/
- https://brittanychiang.com/
- https://bruno-simon.com/
- https://stephango.com/
- https://nat.org/