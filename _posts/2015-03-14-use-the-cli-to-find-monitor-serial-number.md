---
title:  Use the CLI to find monitor serial number
date:   2015-03-14 00:05:18
categories:
- mac
- cli
tags:
- mac
- cli
---

This post is mostly as a reminder for myself.

The serial number for Apple Display monitors is on the bottom of the base. Not a great please to put it if you need to know the serial number.

<!--more-->

Instead of flipping the monitor, laying it down or trying to take a picture of the serial number, use the command line instead.

```bash
echo "$(system_profiler SPDisplaysDataType | grep 'Display Serial Number' | awk '{print $4}')"
```
Or even more simply:

```bash
system_profiler SPDisplaysDataType | grep "Display Serial"
```

This works on all external monitors, not just Apple monitors.
