---
date: 2022-07-15
tags:
	- markdown
---

# [Gist](https://gist.github.com/)

Github's gist service let's you store [text files](https://gist.github.com/7279503e6c3fc923447cbce6a1e4d9f9) that can be embedded in websites.

## [[api]]
By hosting json files such as [response.json](https://gist.github.com/dnnsmnstrr/09a2559a9a970de5e8e9e5c2eaf1183b#file-response-json), I can serve static "API" responses to some of my own projects and services, such as my [[redirect]] api

## Embedding

To hide the Github footer, add this:
```
<style>
.gist .gist-meta { display:none; }
</style>
```

### `<script>`-Tag

<script src="https://gist.github.com/dnnsmnstrr/76c3b6765089bff0e35e239418e0ee2b.js"></script>

To embed a specific file out of multiple attached to single a gist, append this: `?file=filename.md`

<script src="https://gist.github.com/dnnsmnstrr/7279503e6c3fc923447cbce6a1e4d9f9.js?file=example2.txt"></script>

### `<iframe>`

<iframe src="https://gist.github.com/dnnsmnstrr/7279503e6c3fc923447cbce6a1e4d9f9.pibb"></iframe>



## Links
- [Example Gist](https://gist.github.com/dnnsmnstrr/7279503e6c3fc923447cbce6a1e4d9f9)
- [My Gists](https://gist.github.com/dnnsmnstrr)
- https://gist.github.com/
