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
<div class="technical">
{%- if site.enable_lifestyle_categories and page.display_categories %}
  <!-- Display categorized lifestyle -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_lifestyle = site.lifestyle | where: "category", category -%}
  {%- assign sorted_lifestyle = categorized_lifestyle | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-lifestyle">
      {%- for lifestyle in sorted_lifestyle -%}
        {% include lifestyle.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display lifestyle without categories -->
  {%- assign sorted_lifestyle = site.lifestyle | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_lifestyle -%}
      {% include lifestyle.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
