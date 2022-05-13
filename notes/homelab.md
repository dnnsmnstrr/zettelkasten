---
date: 2022-05-13
tags:
  - homeserver
---

# Homelab

I run various services on an old Dell Optiplex PC, mostly in [[docker]] containers.
For the OS I chose [Linux Mint](https://www.linuxmint.com/).

## Services

### [[homeassistant]]

- docker-compose in `~/homeassistant`
- https://www.home-assistant.io/

### Octoprint

- For [[3dPrinting]]
- docker-compose in `~/octoprint`
- https://octoprint.org/

### Nextcloud

- Local cloud storage
- Installed with snap
- https://snapcraft.io/nextcloud

## Infrastructure

### Router

Currently a [FRITZ!Box](http://fritz.box/).
For more wired connections I use a Netgear GS308 Switch with 8 Ports.

### Pi Hole

DNS server and ad blocking

- https://pi-hole.net

### NGINX Proxy Manager
Serves as a reverse proxy, which I can point URLs such as [`pi-hole`](http://pi-hole) to, which are then redirected/forwarded to a specific port or IP address.

- https://nginxproxymanager.com/

### Dashboard

- https://github.com/bastienwirtz/homer
- https://dashy.to/
