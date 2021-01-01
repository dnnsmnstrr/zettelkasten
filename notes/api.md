---
date: 2021-01-01
tags:
- dev
---

# API

My personal api is available at `api.muensterer.xyz` or [next.muensterer.xyz/api](https://next.muensterer.xyz/api).
The available routes are:
| Route | Description |
| :------------- | :------------- |
| [`/dennis`](https://next.muensterer.xyz/api/dennis) | Returns information about me |
| [`/events`](https://next.muensterer.xyz/api/events) | A list of events in my life (used for [muensterer.xyz/life](https://muensterer.xyz/life)) |
| [`/social`](https://next.muensterer.xyz/api/social) | Returns a json of my [social-urls](https://gist.github.com/dnnsmnstrr/09a2559a9a970de5e8e9e5c2eaf1183b) |
| `/social/` + (`facebook`, `twitter`, `instagram`, `linkedin`, `github`, `youtube`, `spotify`, `telegram`) | Gets a redirect to the given profile page |
| [`/playlist`](https://next.muensterer.xyz/api/playlist) | Returns a json of my [[spotify]] playlists |
| `/playlist/` + ([`current`](https://next.muensterer.xyz/api/playlist/current)) | Gets a redirect to a specific playlist |

Much of the data made available through this api is stored in [gists](https://gist.github.com/dnnsmnstrr).

<script src="https://gist.github.com/dnnsmnstrr/a36fa8e855b19e9ebddb8a2878103b04.js"></script>
