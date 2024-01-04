---
layout: page
title: Psycho/Philo
permalink: /psycho_philo/
description: Voici une liste de cours autour de la psychologie et la phylosophie !
nav: true
nav_order: 2
display_categories: [Psychologie/Philosophie adlérienne]
---

<!-- pages/psycho_philo.md -->
<div class="technical">
{%- if site.enable_psycho_philo_categories and page.display_categories %}
  <!-- Display categorized technical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_psycho_philo = site.psycho_philo | where: "category", category -%}
  {%- assign sorted_psycho_philo = categorized_psycho_philo | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-technical">
      {%- for psycho_philo in sorted_psycho_philo -%}
        {% include psycho_philo.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display psycho_philo without categories -->
  {%- assign sorted_psycho_philo = site.psycho_philo | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_psycho_philo -%}
      {% include psycho_philo.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
