---
tags:
  - iot
---

# Homebridge

## [homebridge-rpi](https://github.com/ebaauw/homebridge-rpi)
1. install with `sudo npm -g i homebridge-rpi` of from UI
1. ensure this command works: `rpi info`
1. [allow remote connections](https://github.com/ebaauw/homebridge-rpi#configure-pigpiod-service) in `sudo raspi-config` -> Interfacing Options -> Remote GPIO ()
1. enable and start pigpiod: `sudo systemctl enable pigpiod` + `sudo systemctl start pigpiod`
1. check that `pigs hwver` gives an output such as `9445664`
1. setup `getState` script: https://github.com/ebaauw/homebridge-rpi#install-getstate-script

## [homebridge-gpio-device](https://github.com/dubocr/homebridge-gpio-device)
1. install wiringpi: `sudo apt-get install wiringpi` or [clone](https://github.com/WiringPi/WiringPi) and `./build`

## UPS
Use a power bank between the charger and the power input of the Pi
## Resources
- https://pinout.xyz/
- https://github.com/homebridge/homebridge-raspbian-image/wiki/How-To-Reset-WiFi
