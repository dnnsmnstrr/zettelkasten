---
date: 2020-09-23
tags:
- dev
- linux
- making
---

# [Raspberry Pi](https://www.raspberrypi.org)
My Pi Collection
- Pi 3B
- Pi Zero W + Zero 2
- Pi 4 (4GB)
- CM4 (in my [[homeassistant]] yellow)
- [Pico](https://www.raspberrypi.org/products/raspberry-pi-pico/) (Microcontroller)

## Tools
- [PiKISS](https://github.com/jmcerrejon/PiKISS)
- [SD Card Formatter](https://www.sdcard.org/downloads/formatter/) - for when you want to make an sdcard usable after burning an OS to it

## Images
- [RetroPie](https://retropie.org.uk/)
  - For retro [[gaming]]
- [OctoPi](https://github.com/guysoft/OctoPi)
  - Used for [[3DPrinting]]
- [chilipie](https://github.com/futurice/chilipie-kiosk)
  - full-screen-chrome kiosk-mode
- [DietPi](https://dietpi.com/)
  - [Pi Hole](https://pi-hole.net) - DNS server powering my [[homelab]]
  - [RPi Cam Control](https://dietpi.com/docs/software/camera/#rpi-cam-control)
- [HomeAssistant](https://www.home-assistant.io/)

## Commands
### Config
`raspi-config`

### Update

```
sudo apt-get --yes update
sudo apt-get --yes upgrade
```
From [pi-tips.md](https://gist.github.com/rdmarsh/5070295)

### Cleanup
Remove unused apps and run cleaning functions

```sh
# http://raspberry.tips/faq/raspberry-pi-speicherplatz-voll-sd-karte-aufraeumen
sudo apt-get purge wolfram-engine
sudo apt-get remove --purge libreoffice*
sudo apt-get purge --auto-remove scratch
sudo apt-get remove --purge sonic-pi

# apt cleaning
sudo apt-get --yes autoremove
sudo apt-get --yes autoclean
sudo apt-get --yes clean

# Remove old logs
sudo rm -v /var/log/*.gz

# Find big files
sudo find / -type f -size +100M


```

## Networking

### Wifi Setup

wpa_supplicant

```
network={
	ssid="SSID"
	psk=PASSWORD
}
```

## Docker

- [Setup](https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl)
- [Containers](https://hub.docker.com/u/hypriot)
- run in privileged mode for GPIO-access: `docker run --device /dev/ttyAMA0:/dev/ttyAMA0 --device /dev/mem:/dev/mem --privileged -p {ports} {image}`

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

## Resources
- http://pi.bek.no/ - Pi Notes
- https://www.raspberrypi.com/software/ - Raspberry Pi Imager


---
> 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
