
![]({{ page.inventory.image_url | relative_url }}){: .w-50 .rounded-10  }

Inventory
: {{ page.inventory.quantity }}

{% if page.inventory.cone %}
Cone
: {{ page.inventory.cone }}<sup>o</sup> 
{% endif %}

{% if page.inventory.power %}
Power
: {{ page.inventory.power }} W
{% endif %}