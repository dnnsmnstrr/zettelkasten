---
date: 2021-02-07
tags:
  - dev
  - macos
---

# macOS

My OS of choice. The setup and configuration ist managed via my [[dotfiles]].

## Apps

My main  apps:
- [Chrome](https://www.google.com/chrome/)
- [[spotify]] - [[music]] is always necessary
- [[atom]] - [[ide]]
- [[alfred]] - "Spotlight"-like Search/Launcher-Bar
- [[btt]] - Gestures & Shortcuts
- [[spotify]]

Some open source apps I use daily:
- [[brew]]
- [[barrier]]
- [[finicky]]
- [[brew]]
- [Mattermost](https://mattermost.com/) and [Jitsi Meet](https://github.com/jitsi/jitsi-meet-electron) for Work

## Development
- Xcode

Native Apps I Use:
- Xcode
- Terminal.app
- Finder
- Notes.app
- Logic


## Reset Steps
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

## Resources
- [`mac-cli`](https://github.com/guarinogabriel/Mac-CLI) - useful command line tools for macOS [[dev]]s

## See also
- [[ios]]
