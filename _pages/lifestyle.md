---
layout: page
title: Lifestyle
permalink: /lifestyle/
description: Voici une liste de cours autour de la santé physique
nav: true
nav_order: 6
display_categories: [Minimalisme, Zéro-déchet, Auto-suffisance]
---

<!-- pages/lifestyle.md -->
<div class="course">
{%- if site.enable_lifestyle_categories and page.display_categories %}
  <!-- Display categorized lifestyle -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_lifestyle = site.lifestyle | where: "category", category -%}
  {%- assign sorted_lifestyle = categorized_lifestyle | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="course">
    <ul class="ul-course">
      {%- for course in sorted_lifestyle -%}
        {% include course.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}
{%- endif -%}
</div>
