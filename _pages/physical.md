---
layout: page
title: Santé physique
permalink: /physical/
description: Voici une liste de cours autour de la santé physique
nav: true
nav_order: 3
display_categories: [Sport, Alimentation)]
---

<!-- pages/physical.md -->
<div class="technical">
{%- if site.enable_physical_categories and page.display_categories %}
  <!-- Display categorized physical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_physical = site.physical | where: "category", category -%}
  {%- assign sorted_physical = categorized_physical | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-physical">
      {%- for physical in sorted_physical -%}
        {% include physical.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display physical without categories -->
  {%- assign sorted_physical = site.physical | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_physical -%}
      {% include physical.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
