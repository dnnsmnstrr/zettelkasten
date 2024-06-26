---
date: 2021-01-01
tags:
- dev
---
# [API](https://github.com/dnnsmnstrr/api)

My personal api is available at `https://dnnsmnstrr.vercel.app/api/`

## Available routes:

| Route | Description |
| :-------------: | :------------- |
| [`/dennis`](https://next.muensterer.xyz/api/dennis) | Returns information about me |
| [`/events`](https://next.muensterer.xyz/api/events) | A list of events in my life (used for my [life-timeline](https://dnnsmnstrr.github.io/life)) |
| [`/social`](https://next.muensterer.xyz/api/social) | Returns a json of my [social-urls](https://gist.github.com/dnnsmnstrr/09a2559a9a970de5e8e9e5c2eaf1183b) |
| `/social/` + (`facebook`, `twitter`, `instagram`, `linkedin`, `github`, `youtube`, `spotify`, `telegram`) | Gets a redirect to the given profile page |
| [`/playlist`](https://next.muensterer.xyz/api/playlist) | Returns a json of my [[spotify]] playlists |
| `/playlist/` + ([`current`](https://next.muensterer.xyz/api/playlist/current)) | Gets a redirect to a specific playlist |
| [`/playlist/random`](https://next.muensterer.xyz/api/playlist/random) | Redirects to a random playlist |
| [`/redirect`](https://next.muensterer.xyz/api/redirect) | Dynamically returns a [[redirect]], matched to a list of [aliases](https://github.com/dnnsmnstrr/api/blob/master/pages/api/redirect/redirects.js) with fallback to social links and my homepage |

Much of the data made available through this api is stored in [gists](https://gist.github.com/dnnsmnstrr).

<script src="https://gist.github.com/dnnsmnstrr/a36fa8e855b19e9ebddb8a2878103b04.js"></script>

## Resources
- [Sheety](https://sheety.co/) turns a spreadsheet into an API
