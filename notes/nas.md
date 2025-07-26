---
date: 2021-12-19
tags:
  - storage
  - hardware
  - homelab
---
# Network Attached Storage

I took the risk and gave the Ugreen [NASync](https://nas.ugreen.com/de/) DXP 4800 Plus a chance on [[kickstarter]]. The software still needs much work, but I've been positively surprised with the quality of the hardware and found it quite easy to upgrade.

## Things I store
- personal / family photos & videos
- important documents
- music (stuff that isn't available on [[spotify]])
- favorite movies

## Samba share
With a freshly formatted drive plugged into the [[raspberrypi]]:
1. `sudo mkfs.ext4 /dev/sda1` (`sudo fdisk -l` to check of sda1 is correct location)
1. format partition: `sudo mkfs.ext4 /dev/sda1`
1. label partition: `sudo e2label /dev/sda1 LABEL`
1. `sudo chown -R pi /media/<path to partition>` - give permission to modify drive
1. Add samba:
```
sudo apt update
sudo apt upgrade
sudo apt install samba samba-common
```
6. say yes to 'use WINS settings from DHCP', then `sudo nano /etc/samba/smb.conf` 
```text
[SHARE_NAME]
path = /media/PATH_TO_DRIVE
writeable = yes
create mask = 0775
directory mask = 0775
public=no
```
7. add samba user`sudo smbpasswd -a pi`
