---
date: 2021-02-07
tags:
  - dev
  - macos
---
# macOS

My OS of choice. The setup and configuration is managed via my [[dotfiles]].

## Apps

My main  apps:

- [Chrome](https://www.google.com/chrome/), trying out [Arc](https://arc.net)
- [[spotify]] - [[music]] is always necessary
- VSCode - [[ide]]
- [[raycast]] - "Spotlight"-like Search/Launcher-Bar (previously: [[alfred]])
- [[bettertouchtool]] - Gestures & Shortcuts

Some open source projects I use daily:

- [[brew]]
- [[barrier]]
- [[finicky]]
- [[brew]]
- [Mattermost](https://mattermost.com/) and [Jitsi Meet](https://github.com/jitsi/jitsi-meet-electron) for Work

Other useful apps:

- [MonitorControl](https://github.com/MonitorControl/MonitorControl) - Control Brightness, Volume, Contrast, Input Source, Resolution, etc. of your external monitors
- Genki Arcade - Connect with the [ShadowCast](https://www.genkithings.com/products/shadowcast) to view HDMI input via USB-C

## Development

- Xcode

Native apps I use:

- Xcode
- Terminal.app
- Finder
- Notes.app
- Logic


## Setup
### Reset Steps

1. Ensure all data is backed up or can be lost
2. Open System Preferences
3. Click on "System Preferences" in the menu bar and select `Erase All Content and Settings`
4. Continue

## Tips

- Select text within hyperlinks by [holding down](https://twitter.com/MBoffin/status/1218668903586394112) <kbd>option</kbd> while selecting 🤯
- Set <kbd>caps lock</kbd> to <kbd>control</kbd> or [[hyperkey]]
- [Apps in my `~/Applications`-folder](https://gist.github.com/dnnsmnstrr/41c9e140ab7629e489f4ee1265bf85b0):
```sh
ls -1 /Applications | pbcopy
```
- Get state of webcam: `log stream --predicate 'subsystem contains "com.apple.UVCExtension" and composedMessage contains "Post PowerLog"'`

### Text Replacement

The following text shortcuts make my life easier across iOS and macOS:

- `@@` -> `dennismuensterer@aol.com`
- `@@@` -> `dennismuensterer@gmail.com`
- `@@@@` -> `dennismuensterer@icloud.com`

## Hardware

- My first Mac: MacBook Pro 13" (early 2011)
  - [mactracker](mactracker://7100F247-2CF4-4C33-BE57-948881304DA7)
- Touch bar: MacBook Pro 13" (2018)
  - [mactracker](mactracker://EB72B355-E76D-4028-BB50-B5BE4001AA65)
- First Apple Silicon: M3 MacBook Air 13" (2024)

## Resources

- [`mac-cli`](https://github.com/guarinogabriel/Mac-CLI) - useful command line tools for macOS [[dev]]s
- [Setup Guides](https://sourabhbajaj.com/mac-setup/)
- list of my installed applications in [gist](https://gist.github.com/dnnsmnstrr/41

## See also

- [[ios]]
