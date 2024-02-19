---
date: 2020-08-04
tags:
  - dev
  - todo
---

# Publishing with [Pages](https://pages.github.com/)

GitHub can host static webpages for free with their Pages-Service. This is how I host most of my websites and apps.

## React App

Add the homepage url to the `package.json`. When building with a [Pages-Action](https://github.com/marketplace/actions/deploy-react-app-to-github-pages) this will be used to generate the path to the files referenced in the `index.html`
```json
"homepage": "https://muensterer.xyz/%repository-name%",
```

```yml
# ./github/workflows/pages.yml
name: React app deployment

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Deploy react app to github pages
      uses: tanwanimohit/deploy-react-to-ghpages@v1.0.1
```

Remember to activate the pages feature in the project settings!

## [DNS Config](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
1. Add/Update [CNAME](https://github.com/dnnsmnstrr/dnnsmnstrr.github.io/blob/master/CNAME)
1. Add A-Records

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

### Verification
<https://github.com/settings/pages>
- <https://github.com/settings/pages_verified_domains/>
