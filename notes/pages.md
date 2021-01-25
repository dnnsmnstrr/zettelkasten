---
date: 2020-08-04
tags:
  - dev
  - todo
---

# Publishing with [Pages](https://pages.github.com/)

## React App

Add the homepage url to the `package.json`. When building with a [Pages-Action](https://github.com/marketplace/actions/deploy-react-app-to-github-pages) this will be used to generate the path to the files referenced in the `index.html`
```json
"homepage": "https://muensterer.xyz/repository",
```
