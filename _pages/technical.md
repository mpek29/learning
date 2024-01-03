---
layout: page
title: Technique
permalink: /technical/
description: Voici une liste de cours autour de la thématique de la technique !
nav: true
nav_order: 3
display_categories: [Informatique, Électronique, Mécanique, Maintenance automobile]
---

<!-- pages/technical.md -->
<div class="technical">
{%- if site.enable_technical_categories and page.display_categories %}
  <!-- Display categorized technical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_technical = site.technical | where: "category", category -%}
  {%- assign sorted_technical = categorized_technical | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-technical">
      {%- for technical in sorted_technical -%}
        {% include technical.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display technical without categories -->
  {%- assign sorted_technical = site.technical | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_technical -%}
      {% include technical.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
