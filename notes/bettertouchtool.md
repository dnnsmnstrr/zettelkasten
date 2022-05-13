---
date: 2020-08-07
tags:
  - btt
  - automation
  - workflow
---

# [BetterTouchTool](https://folivora.ai)

My favorite preset: [AquaTouch](https://community.folivora.ai/t/1704)

My own customizations: [HydroTouch](https://github.com/dnnsmnstrr/HydroTouch)


## Setup

- [Import duplicate presets](https://community.folivora.ai/t/cant-import-a-preset-without-replacing/10455/4)
  `defaults write com.hegenberg.BetterTouchTool BTTImportDuplicatePresets YES`

## Development

- most of my named triggers use AppleScript, slowly migrating to JavaScript where possible
- Album Artwork path: `~/Library/Application Support/BetterTouchTool/spotify_cover.png`

### Scripting
Docs: https://docs.folivora.ai/docs/1106_java_script.html

## Troubleshooting

- [Presets gone after update](https://community.folivora.ai/t/how-can-i-restore-my-presets/14976/2)
  - BTT -> Help -> Restore Settings from Backup -> Second-most recent option in the dropdown
