---
date: 2020-08-04
tags:
  - dev/web
  - pages
---

# [My website](https://dnnsmnstrr.github.io)

|[muensterer.whateverdomainwascheapest](https://https://dnnsmnstrr.github.io)|
|---|


Hosting on Github [[pages]] is free, but domains usually are not, so I tend to switch domains fairly regularly (whenever renewal would be too expensive).

Some domains I've had:
- muensterer.tech
- muensterer.xyz
- muensterer.link

I also made a personal [[api]], which provides data to some of my #[[projects]], as well as [[redirect]] service with dynamic aliases, so I don't have to remember any links.

Currently, I am working on an extension to the website using [kbar](https://github.com/timc1/kbar). This will enable an [[alfred]]-like interface directly within the page. Try it with <kbd>⌘</kbd> + <kbd>k</kbd>

<iframe src="https://dnnsmnstrr.github.io" title="Current website" width='100%' height='60%'></iframe>

[[social]]

## DNS

Regardless of which Registrar I'm currently using, I try to keep the configuration and set up consistent and minimal. The `dennis.` subdomain directs to my [Universe Landing Page](https://dnnsmnstrr.onuniverse.com)

CNAME & Redirect setup:
| Host | Value |
| :------------- | :------------- |
| CNAME       | dnnsmnstrr.github.io       |
| dennis       | https://dnnsmnstrr.onuniverse.com      |
| api       | https://dnnsmnstrr.vercel.app/api/    |
| *       | https://dnnsmnstrr.vercel.app/api/redirect    |

## Cool Websites

- https://theuselessweb.com/
- [r/place visualization](https://rplace-community.github.io/visualization/)
- https://alteredqualia.com/three/examples/webgl_pasta.html
- https://www.autodraw.com/
