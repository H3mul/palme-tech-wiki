---
layout: wiki
title: Fixture Inventory
datatable: true
parent: Lighting Department
# Dont list children in nav, but still have breadcrumbs
has_children: false
---

{% assign fixtures_all = site.pages | where: 'inventory.type', 'fixture' %}
{% assign fixture_categories = fixtures_all | map: 'inventory' | map: 'category' | uniq %}


{% for category in fixture_categories -%}

## {{ category | capitalize }}

{% assign fixtures = fixtures_all | where: 'inventory.category', category -%}
{% assign unknown_char = "?" -%}

{% if fixtures.size > 0 %}

<div class="datatable-begin"></div>

{% assign fixture_fields = site.data.fixtures.fields.fixture_fields %}
{% assign category_fields = '' | split: ',' %}
{% assign category_fields = fixture_fields[category] | default: category_fields %}
{% assign fields = fixture_fields.pre | concat: category_fields | concat: fixture_fields.post %}

{% assign fields_mapping = site.data.fixtures.fields.fields %}

{% assign field_titles = '' | split: ',' %}
{% assign field_spacers = '' | split: ',' %}

{% for field in fields %}
    {% assign cap_title = field | capitalize %}
    {% assign title = fields_mapping[field].title | default: cap_title %}
    {% assign field_titles = field_titles | push: title %}

    {% if fields_mapping[field].align == 'center' %}
        {% assign field_spacers = field_spacers | push: ':---:' %}
    {% elsif fields_mapping[field].align == 'left' %}
        {% assign field_spacers = field_spacers | push: ':---' %}
    {% elsif fields_mapping[field].align == 'right' %}
        {% assign field_spacers = field_spacers | push: '---:' %}
    {% else %}
        {% assign field_spacers = field_spacers | push: '---' %}
    {% endif %}
{% endfor %}

| {{ field_titles | join: '|' }} |
| {{ field_spacers | join: '|' }} |

{%- for fixture in fixtures -%}
    {%- assign fixture_fields = '' | split: ',' -%}
        {%- for field in fields -%}
            {%- if field == 'image_url' -%}
                {%- capture data -%}
![]({{ fixture.inventory.image_url | relative_url }}){: width="100" .rounded-10 }
                {%- endcapture -%}
            {%- elsif field == 'item' -%}
                {%- capture data -%}
[{{ fixture.title }}]({{ fixture.url | relative_url }})
                {%- endcapture -%}
            {%- else -%}
                {%- assign data = fixture.inventory[field] | default: unknown_char -%}
            {%- endif -%}
    {%- assign fixture_fields = fixture_fields | push: data -%}
    {%- endfor %}
| {{ fixture_fields | join: '|' }}|
{%- endfor %}

<div class="datatable-end"></div>

{% endif %}
{% endfor %}
