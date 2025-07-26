---
date: 2022-05-04
tags:
  - homelab
---
# Homeassistant

Now that the chip shortage is slowly subsiding, I was able to get my hands on a [Home Assistant Yellow](https://www.home-assistant.io/yellow/) and a CM4 with 4GB of RAM. 
This now runs my HA server with all the zigbee, Bluetooth and WiFi devices in my smart home connected to it. 

Coincidentally, it fits perfectly into a 3x3 block of the [[gridfinity]] system, which allowed me to build a custom mini server rack with a modular approach. 
## [[Docker]]

Shell: `sudo docker exec -it --user root homeassistant /bin/bash`

Install nano:
```
apk update
apk add nano
```

## HACS

- Alexa Media Player
- Spotcast
- https://github.com/vlebourl/shopping_list
https://hacs.xyz/

# Resources
- https://esphome.io/index.html
