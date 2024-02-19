---
date: 2020-09-22
tags:
- making
---

# 3D-Printing

Whenever possible, I try to print things instead of buying them. This makes me more conscious of the actual value of an item and gives me control over how it will be designed and how it will function in the context of my existing setup.
I tend to create modular designs using proven systems like [Polypanels](https://www.makeanything.design/polypanels), [Gridfinity](https://gridfinity.xyz/) or the GoPro-mount, so they will be reusable and replacement parts are easily reproduced when needed. In this way there are also many designs created by other people that will immediately be compatible with mine.

## My Printer
- Creality [CR6-SE](https://www.kickstarter.com/projects/3dprintmill/creality-cr-6-se-leveling-free-diy-3d-printer-kit) - got it from [[kickstarter]]

## [Octoprint](https://octoprint.org/)
My Octoprint instance runs on a [Raspberry Pi](./raspberrypi.md) Zero 2 and lets me control my printer over the local network. ([Don't just make your printer available to the public internet](https://octoprint.org/blog/2018/09/03/safe-remote-access/))

### Setup
- [Octoprint on Raspberry Pi](https://community.octoprint.org/t/guide-install-octoprint-on-a-raspberry-pi-running-raspbian/2337)
- Printer Profile: CR6-SE
  - Bed Size: 235 x 235 x 250
### Plugins
- Creality Temperature Fix
- OctoEverwhere
- [[homeassistant]]

## Things I’ve Printed
- IKEA Hooks (Skadis, Tertial, Tisken)
- Tube Squeezer
- Cable Clips
- [Polypanels](https://www.makeanything.design/polypanels) (shoutout @ [makeanything](https://www.youtube.com/channel/UCVc6AHfGw9b2zOE_ZGfmsnw) - one of my favorite makers on [[youtube]])
- a MagSafe mount for my iPhone
- Gridfinity storage modules for my [[workshop]], desk and more - designed by [Zack Freedman](https://www.youtube.com/@ZackFreedman), another favorite YouTuber of mine)

## Design Philosophy
- avoid support material
- modularity- break down components into smaller parts where possible (avoid risk of loss when prints fail)
- consider the direction of the print - horizontal layers are not as strong
- use existing connections instead of creating new ones (compatibility, reusability)
- Share designs (still working on this step)

## Software
For quick sketches and simple models I prefer [TinkerCAD](https://tinkercad.com).
My slicer of choice is Cura. It has a nice Octoprint integration and even lets me import models directly from thingiverse or MyMiniFactory

## Links
- https://www.thingiverse.com/dennismuensterer/
- https://www.printables.com/@dnnsmnstrr_304895
