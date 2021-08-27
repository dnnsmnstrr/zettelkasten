---
date: 2020-09-23
tags:
- dev
- linux
- making
---

# [Raspberry Pi](https://www.raspberrypi.org)
My Pi Collection
- Pi 2B
- Pi Zero W
- Pi 4 (4GB)
- [Pico](https://www.raspberrypi.org/products/raspberry-pi-pico/) (Microcontroller)

## [RetroPie](https://retropie.org.uk/)

- Tetris
- Super Mario Kart

## [OctoPi](https://github.com/guysoft/OctoPi)
Used for [[3DPrinting]]

## Docker
- [Setup](https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl)
- [Containers](https://hub.docker.com/u/hypriot)

## Pico

- [MicroPython](https://datasheets.raspberrypi.org/pico/raspberry-pi-pico-python-sdk.pdf)
  - Connect from [[macos]]: `screen /dev/tty.usbmodem` + tab-complete
  - [Copy files](https://www.raspberrypi.org/forums/viewtopic.php?t=301927#p1811516) over using [rshell](https://github.com/dhylands/rshell)
  ```sh
  # connect to pico
  rshell --buffer-size=30 -p /dev/tty.usbmodem0000000000001 -a

  # copy single file
  cp main.py /pyboard

  # sync all files in folder
  cp -r developer/micropython/*.py /pyboard/

  # launch into a REPL-shell
  repl
  ```


> 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
