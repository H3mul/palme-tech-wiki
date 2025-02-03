---
layout: wiki
title: Fixture Inventory
datatable: true
parent: Lighting Department
# Dont list children in nav, but still have breadcrumbs
has_children: false
---

{% assign fixtures = site.pages | where: 'inventory.type', 'fixture' %}

{% assign unknown_char = "N/A" -%}
{% if fixtures.size > 0 %}

<div class="datatable-begin"></div>

{% assign field_attrs = site.data.inventory.fields %}
{% assign field_order = site.data.inventory.order %}

{% assign field_titles = '' | split: ',' %}
{% assign field_spacers = '' | split: ',' %}

{% for field in field_order %}
    {% assign cap_title = field | capitalize %}
    {% assign title = field_attrs[field].title | default: cap_title %}
    {% assign field_titles = field_titles | push: title %}

    {% if field_attrs[field].align == 'center' %}
        {% assign field_spacers = field_spacers | push: ':---:' %}
    {% elsif field_attrs[field].align == 'left' %}
        {% assign field_spacers = field_spacers | push: ':---' %}
    {% elsif field_attrs[field].align == 'right' %}
        {% assign field_spacers = field_spacers | push: '---:' %}
    {% else %}
        {% assign field_spacers = field_spacers | push: '---' %}
    {% endif %}
{% endfor %}

| {{ field_titles | join: '|' }} |
| {{ field_spacers | join: '|' }} |

{%- for fixture in fixtures -%}
    {%- assign fixture_fields = '' | split: ',' -%}
        {%- for field in field_order -%}
            {%- if field == 'image_url' -%}
                {%- capture data -%}
![]({{ fixture.inventory.image_url | relative_url }}){: width="100" .rounded-10 }
                {%- endcapture -%}
            {%- elsif field == 'item' -%}
                {%- capture data -%}
[{{ fixture.title }}]({{ fixture.url | relative_url }})
                {%- endcapture -%}
            {%- elsif field == 'category' -%}
                {%- assign data = fixture.inventory.category | capitalize | default: unknown_char -%}
            {%- else -%}
                {%- assign data = fixture.inventory[field] | default: unknown_char -%}
            {%- endif -%}
    {%- assign fixture_fields = fixture_fields | push: data -%}
    {%- endfor %}
| {{ fixture_fields | join: '|' }}|
{%- endfor %}

<div class="datatable-end"></div>

{% endif %}
