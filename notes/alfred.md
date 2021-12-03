---
date: 2020-08-04
tags:
  - overview
  - workflow/alfred
  - mac
---

# [Alfred](https://www.alfredapp.com)

A customizable version of the macOS Spotlight tool.
I keep my Alfred preferences symlinked within the [[dotfiles]] directory.

## Snippets
Alfred allows the creation of Snippets, which can be auto-expanded when a certain keyword is typed. Some of my favorites are `mdl` for [[markdown]] links and [[emoji]]-completion (`:emoji:`)

## [Workflows](https://github.com/dnnsmnstrr/workflows)
- [alfred](https://github.com/dnnsmnstrr/alfred-zettelkasten)-[[zettelkasten]]
- [workflow-workflow](https://github.com/dnnsmnstrr/alfred-workflow-workflow)

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

### Environment Variables
```js
const { VARIABLE } = process.env;
```
# External Links
- [Cheatsheet](https://www.alfredapp.com/help/getting-started/cheatsheet/)
- [Script Filter JSON API](https://www.alfredapp.com/help/workflows/inputs/script-filter/json/)
- [Emoji Snippets](joelcalifa.com/blog/alfred-emoji-snippet-pack)
