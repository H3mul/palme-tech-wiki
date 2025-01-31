---
title: LED RGB Par Lights
inventory:
    type: fixture
    category: Dmx
    quantity: 2
    image_url: https://m.media-amazon.com/images/I/51vGxZ4GQDL._AC_.jpg


---

{% include light-summary.md %}

Features
:  
- 36 RGB LED
- Strobe modes
- IR remote + DMX control

## Considerations

{: .warning }
> This fixture is actually a collection of cheap knock-offs that are hit or miss. Test extensively

Had major issues with [this one](https://www.amazon.ca/Lighting-Stage-36x1W-Channel-Remote/dp/B06XSMKFFM):


![clean signal]({{ 'assets/img/led_par_signal_1.jpg' | relative_url }}){: .w-50 }
_Clean DMX signal (data+ top, data- bottom)_

![attenuated signal]({{ 'assets/img/led_par_signal_2.jpg' | relative_url }}){: .w-50 }
_DMX signal attenuation on the data+ line when passing through the bad fixture_

While the one listed in [sources](#sources) works perfectly and shares an identical DMX channel profile.

## Sources

- [Amazon Listing](https://www.amazon.ca/gp/product/B07W6VYLY3)

- [Manual](https://images.thdstatic.com/catalog/pdfImages/bc/bc714ade-93ea-53f4-8c76-03b9045d59a5.pdf)

- [QLC Profile](https://github.com/H3mul/palme-tech/blob/main/qlc/Fixtures/EasyDancing-RGB-LED.qxf)

## Images

![details](https://m.media-amazon.com/images/I/61DAY4Bi85L._AC_.jpg){: .w-50 }
_Fixture details_

