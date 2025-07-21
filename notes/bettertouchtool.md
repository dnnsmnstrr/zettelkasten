---
date: 2020-08-07
tags:
  - btt
  - automation
  - workflow
  - macos
---

# [BetterTouchTool](https://folivora.ai)

BTT is at the core of how I interact with [[macos]]. Most of the gestures and shortcuts I use are handled by this application. It also controls the touchbar and a stream deck where those are available. 

My favorite preset used to be [AquaTouch](https://community.folivora.ai/t/1704), which is sadly not being actively maintained anymore.  
Instead, I have created my own customizations, inspired by AquaTouch: [HydroTouch](https://github.com/dnnsmnstrr/HydroTouch)


## Setup

- [Import duplicate presets](https://community.folivora.ai/t/cant-import-a-preset-without-replacing/10455/4)
  `defaults write com.hegenberg.BetterTouchTool BTTImportDuplicatePresets YES`

## Development

- most of my named triggers used AppleScript, which have mostly been migrated to JavaScript where possible
- Album Artwork for the playing song is stored under this path: `~/Library/Application Support/BetterTouchTool/spotify_cover.png`

### Scripting
Docs: https://docs.folivora.ai/docs/1106_java_script.html

## Troubleshooting

- [Presets gone after update](https://community.folivora.ai/t/how-can-i-restore-my-presets/14976/2)
  - BTT -> Help -> Restore Settings from Backup -> Second-most recent option in the dropdown

## Links
- https://community.folivora.ai/
- https://docs.folivora.ai/