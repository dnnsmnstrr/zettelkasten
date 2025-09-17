---
date: 2022-05-13
tags:
  - homelab
---
# Homelab

My homelab journey started off by running various services on an old Dell Optiplex PC, mostly with [[docker]] containers. For the OS I had chosen [Linux Mint](https://www.linuxmint.com/).
After noticing how high the power consumption of the old computer was, I switched to running multiple [[raspberrypi]] devices, totaling to just a portion of what the PC was using in energy. 

### Mini-Rack
While upgrading to a raspberry pi 5, I created a tiny server rack using aluminum extrusion profiles cut to about 20cm in length and multiple screw-together [[gridfinity]] baseplates. 
The following devices are housed in this setup:
- Networking switch
- Pi 2b and Pi 5 + CM5
- Home Assistant Yellow with CM4
- Flic Hub LR
- Samsung T5 SSD

### NAS
My [[nas]] runs some of my local services, mainly related to entertainment and data backups

## Services

### [[homeassistant]]

- Running on a CM4 with an NVMe-SSD
- https://www.home-assistant.io/

### Octoprint

- For [[3dPrinting]]
- running on a Pi Zero W2, connected to the printer via USB
- https://octoprint.org/

### Nextcloud

- Local cloud storage
- Runs on a Raspberry Pi Compute Module 5 with nextcloudpi

## Infrastructure

### Router

Currently a [FRITZ!Box](http://fritz.box/).
Wired connections go through a Netgear GS308 Switch with 8 Ports.

> **Warning:** This is a warning section. Please take note of the important information here.

### Pi Hole

DNS server and ad blocking on a Raspberry Pi 2b

- https://pi-hole.net

### NGINX Proxy Manager
Serves as a reverse proxy, which I can point URLs such as [`pi-hole`](http://pi-hole) to, which are then redirected/forwarded to a specific port or IP address.

- https://nginxproxymanager.com/

### Dashboard

- https://github.com/gethomepage/homepage/
- https://github.com/bastienwirtz/homer
- https://dashy.to/
- [OliveTin](https://www.olivetin.app/) - config at `etc/OliveTin/config.yaml`
  - `sudo nano /etc/OliveTin/config.yaml`
  - `sudo systemctl restart OliveTin.service` after changes
