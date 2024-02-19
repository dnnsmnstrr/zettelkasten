---
date: 2020-08-04
tags:
  - overview
  - workflow/alfred
  - mac
---

# [Alfred](https://www.alfredapp.com)

A customizable version of the macOS Spotlight tool. I have been transitioning to [[raycast]] as my main launcher.

> Recently, I have mainly been using [[raycast]], which supports most of the main features of Alfred and has a better store, so this page is kind of outdated

## Snippets
Alfred allows the creation of Snippets, which can be auto-expanded when a certain keyword is typed. Some of my favorites are `mdl` for [[markdown]] links and [[emoji]]-completion (`:emoji:`). Some of my own snippets are shared at https://github.com/dnnsmnstrr/workflows#snippets

## Searches
These custom searches can be suggested when Alfred receives a query that it does not recognise (Fallback Search). There are built-in searches for common sites like Google, Wikipedia or Youtube, but here are some of my own (they can be installed by clicking on the link):
- [GitHub](alfred://customsearch/Search%20GitHub%20for%20%27%7Bquery%7D%27/github/utf8/nospace/https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3D%7Bquery%7D%26amp%3Bref%3Dopensearch)
- [Genius](alfred://customsearch/Search%20Genius%20for%20%27%7Bquery%7D%27/genius/utf8/nospace/https%3A%2F%2Fgenius.com%2Fsearch%3Fq%3D%7Bquery%7D)
- [Alfred Forum](alfred://customsearch/Search%20the%20Alfred%20Forum%20for%20%27%7Bquery%7D%27/forum/utf8/nospace/https%3A%2F%2Fwww.alfredforum.com%2Fsearch%2F%3Fq%3D%7Bquery%7D)
- [[bettertouchtool]] [Forum](alfred://customsearch/Search%20the%20BTT%20Community%20for%20%27%7Bquery%7D%27/btt/utf8/nospace/https%3A%2F%2Fcommunity.folivora.ai%2Fsearch%3Fq%3D%7Bquery%7D)
- [Know Your Meme](alfred://customsearch/Search%20Know%20Your%20Meme%20for%20%27%7Bquery%7D%27/kym/utf8/nospace/https%3A%2F%2Fknowyourmeme.com%2Fsearch%3Fq%3D%7Bquery%7D)
- [Urban Dictionary](alfred://customsearch/Search%20Urban%20Dictionary%20for%20%27%7Bquery%7D%27/ud/utf8/nospace/https%3A%2F%2Fwww.urbandictionary.com%2Fdefine.php%3Fterm%3D%7Bquery%7)
- [TV Tropes](alfred://customsearch/Search%20TV%20Tropes%20for%20%27%7Bquery%7D%27/trope/utf8/nospace/https%3A%2F%2Ftvtropes.org%2Fpmwiki%2Fsearch_result.php%3Fq%3D%7Bquery%7D)
- [Snopes](alfred://customsearch/Search%20Snopes%20for%20%27%7Bquery%7D%27/snopes/utf8/nospace/https%3A%2F%2Fwww.snopes.com%2F%3Fs%3D%7Bquery%7D)

## [Workflows](https://github.com/dnnsmnstrr/workflows)
- [alfred](https://github.com/dnnsmnstrr/alfred-zettelkasten)-[[zettelkasten]]
- [workflow²](https://github.com/dnnsmnstrr/alfred-workflow-workflow)

## Development

### [Alfy](https://github.com/sindresorhus/alfy)
I mainly use this framework, as it allows me to create workflows using [[js]]

### Symlinking
`npx alfred-link`
~~Link current directory to workflows directory: `ln -s "$(pwd)" ~/.dotfiles/alfred/workflows`~~

#### [Script filters](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/)

```json
{"items": [
    {
        "uid": "desktop",
        "type": "file",
        "title": "Desktop",
        "subtitle": "~/Desktop",
        "arg": "~/Desktop",
        "autocomplete": "Desktop",
        "icon": {
            "type": "fileicon",
            "path": "~/Desktop"
        }
    }
]}
```
##### Modifiers
```js
"mods": {
  "cmd": {
    "valid": true,
    "arg": "",
    "subtitle": ""
  }
}

mods: {
  alt: {
    valid: true,
    arg: `${alfy.input}`,
    subtitle: `${alfy.input}`
  }
}
```
#### Icons
Using [workflow²](https://github.com/dnnsmnstrr/alfred-workflow), you can search for built-in icons in `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/` and generate icon paths.

##### macOS icns
Using [workflow²](), you can search for built-in icons in `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/`

##### Icons for Apps
```json
// in js
icon: {
    type: 'fileicon',
    path: '/Applications/APPNAME.app'
},

// hardcoded
"icon": {
  "path": "/Applications/APPNAME.app/Contents/Resources/APP_ICON.icns"
}
```

#### Environment Variables
```js
const { VARIABLE } = process.env;
```

- [](https://www.alfredforum.com/topic/9070-handling-workflowenvironment-variables/)

# External Links

- [Alfred Gallery](https://alfred.app) - Official Workflow Gallery
- [BTT Workflow](https://alfred.app/workflows/dnnsmnstrr/btt/) by me (https://github.com/dnnsmnstrr/alfred-btt)
- [Cheatsheet](https://www.alfredapp.com/help/getting-started/cheatsheet/)
- [Script Filter JSON API](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/)
- [Emoji Snippets](joelcalifa.com/blog/alfred-emoji-snippet-pack)
- [My Workflows](https://github.com/dnnsmnstrr/workflows)
