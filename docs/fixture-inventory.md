---
layout: post
title: Fixture Inventory
datatable: true
nav_order: 2
---

## Incandescent

{% include datatable.html %}

<div class="datatable-begin"></div>

{% assign lights = site.inventory | where: 'inventory.category', 'light' -%}
{% assign unknown_char = "?" -%}

{% if lights.size > 0 %}

| Inventory | Power (W) | Cone (<sup>o</sup>) | Item | Image |
| --------- | ----- | ---- | ---- | ----- |
{% for light in lights -%}
| {{ light.inventory.quantity | default: unknown_char }}  | {{ light.power | default: unknown_char }} | {{ light.cone | default: unknown_char }} | [{{ light.title }}]({{ light.url | relative_url }}) | ![]({{ light.inventory.image_url | relative_url }})  |
{% endfor %}
{% endif %}

<div class="datatable-end"></div>