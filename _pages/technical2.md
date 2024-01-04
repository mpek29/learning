---
layout: page
title: Technique
permalink: /technical2/
description: Voici une liste de cours autour de la thématique de la technique !
nav: true
nav_order: 4
display_categories: [Informatique, Électronique, Mécanique, Maintenance automobile]
---

<!-- pages/technical2.md -->
<div class="technical2">
{%- if site.enable_technical2_categories and page.display_categories %}
  <!-- Display categorized technical2 -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_technical2 = site.technical2 | where: "category", category -%}
  {%- assign sorted_technical2 = categorized_technical2 | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical2">
    <ul class="ul-technical2">
      {%- for technical2 in sorted_technical2 -%}
        {% include technical2.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display technical2 without categories -->
  {%- assign sorted_technical2 = site.technical2 | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_technical2 -%}
      {% include technical2.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
