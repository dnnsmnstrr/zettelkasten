---
date: 2021-03-17
tags:
- dev
---

# Redirecting

While working on my #[[api]], I figured out a way to set up a system of dynamic redirects with alias matching.
This means I can define multiple links that all redirect to a specific URL, for example [/instagram](http://muensterer.link/instagram), [/ig](http://muensterer.link/ig) and [/insta](http://muensterer.link/insta) all redirect to my [instagram profile](https://www.instagram.com/dnnsmnstrr/)

This was made possible by setting up a second domain ([muensterer.link](http://muensterer.link)), that forwards requests to the `/redirect` route of my [[api]]. I also modified the 404 page on my homepage to automatically attempt a redirect if the page does not exist.

It even passes on the rest of the URL, so instead of going https://github.com/dnnsmnstrr/dotfiles I can just type [muensterer.link/gh/dotfiles](http://muensterer.link/gh/dotfiles).

There are different ways to access these redirects:

- [`next.muensterer.xyz/api/redirect`](https://next.muensterer.xyz/api/redirect) - the direct api url
- [`http://api.muensterer.xyz/redirect`](http://api.muensterer.xyz/redirect) - the aliased url
- [`https://muensterer.xyz/redirect`](https://muensterer.xyz/redirect)
   - this is possible through a [repository](https://github.com/dnnsmnstrr/redirect) which hosts a simple HTML file via pages and redirects to [muensterer.link](http://muensterer.link)
- [`muensterer.link`](http://muensterer.link)
  - forwards to the api url
- 404 on [muensterer.xyz](https://muensterer.xyz)
  - If a page is not found, there is an automatic redirect attempt with a `noReturn` parameter to avoid infinite loops back to the 404 page
