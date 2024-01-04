---
layout: page
title: Psycho/Philo
permalink: /mental/
description: Voici une liste de cours autour de la psychologie et la phylosophie !
nav: true
nav_order: 2
display_categories: [Psychologie/Philosophie adlérienne]
---

<!-- pages/mental.md -->
<div class="technical">
{%- if site.enable_mental_categories and page.display_categories %}
  <!-- Display categorized technical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_mental = site.mental | where: "category", category -%}
  {%- assign sorted_mental = categorized_mental | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-technical">
      {%- for mental in sorted_mental -%}
        {% include mental.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display mental without categories -->
  {%- assign sorted_mental = site.mental | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_mental -%}
      {% include mental.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
