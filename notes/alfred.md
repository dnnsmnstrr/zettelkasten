---
date: 2020-08-04
tags:
  - overview
  - workflow/alfred
  - mac
---

# [Alfred](https://www.alfredapp.com)

A customizable version of the macOS Spotlight tool.
I keep my Alfred preferences symlinked within the [[[dotfiles]]] directory.

## [Workflows](https://github.com/dnnsmnstrr/workflows)
- [[alfred]]-[[zettelkasten]]

## Development

### [Alfy](https://github.com/sindresorhus/alfy)
I mainly use this framework, as it allows me to create workflows using [[js]]

### Symlinking
`npx alfred-link`
~~Link current directory to workflows directory: `ln -s "$(pwd)" ~/.dotfiles/alfred/workflows`~~

### Modifiers
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
### Icons

Using [workflow²](https://github.com/dnnsmnstrr/alfred-workflow), you can search for built-in icons in `/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/` and generate icon paths.

#### Icons for Apps
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
