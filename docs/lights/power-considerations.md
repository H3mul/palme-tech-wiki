---
title: Power Considerations
layout: wiki
parent: Lighting Department
---

{% include toc_header.md %}

## Hardware Limits

*There's a bit of leeway in these numbers, since single phase AC voltage doesn't fully convert to actual power. Setting max to P = VI is a good rule of thumb.*

- Each dimmer channel controls 2 outlets and has a common 10A replaceable fuse - **1.2kW max** per channel
- Dimmers are each powered by **14-17AWG** extension cables, that should handle **20A MAX** for runs under 50ft. This limits total consistent power per dimmer to **2.4kW max** 
	
- Currently, 4 dimmers are powered by the same 2-phase power outlet with a 30A (we think, need to check) auto-fuse; **may trip when we get past 7.5kW total load**

## Tips

- Distribute consistent load (eg, allocate mutually exclusive lights to same dimmer)
- If coexisting lights break the max power threshold, we don't have to power them full blast - dim them
- Incandescent lights have current spikes proportionally to how quickly they turn on. Filament has much lower cold resistance that gradually rises as it heats up and starts blackbody radiation. Can easily trip fuses if a lot of lights turn on instantaneously, I usually set a default fade of 1s in QLC