---
layout: page
title: Psycho/Philo
permalink: /psycho_philo/
description: Voici une liste de cours autour de la psychologie et philosophie !
nav: true
nav_order: 2
display_categories: [Psychologie/Phylosophie adlérienne]
---

<!-- pages/technical2.md -->
<div class="technical">
{%- if site.enable_technical2_categories and page.display_categories %}
  <!-- Display categorized technical2 -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_technical2 = site.technical2 | where: "category", category -%}
  {%- assign sorted_technical2 = categorized_technical2 | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
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
