---
layout: page
title: Santé physique
permalink: /physical/
description: Voici une liste de cours autour de la santé physique
nav: true
nav_order: 3
display_categories: [Sport, Alimentation]
---

<!-- pages/physical.md -->
<div class="course">
{%- if site.enable_physical_categories and page.display_categories %}
  <!-- Display categorized physical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_physical = site.physical | where: "category", category -%}
  {%- assign sorted_physical = categorized_physical | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="course">
    <ul class="ul-course">
      {%- for course in sorted_physical -%}
        {% include course.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}
{%- endif -%}
</div>
