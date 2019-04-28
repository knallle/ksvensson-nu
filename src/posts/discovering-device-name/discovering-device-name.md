---
title: "Discovering device name"
date: "2019-04-28"
author: 'Kalle'
type: 'Post'
tags: ['linux', 'automation']
published: true
---

When setting up my home automation solution using HomeAssistant, I had to identify the device name of the ConBee stick that I use to control my ZigBee devices.

After some googling, I found a simple solution on [Ubuntu Forums](https://ubuntuforums.org/showthread.php?t=911651).

- Insert the device to the desired USB port (or pull it out if it's already connected.
- In the terminal, type `dmesg`
- Look at the bottom of the printout and identify the device name.


