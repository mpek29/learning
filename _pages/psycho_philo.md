---
layout: page
title: Psycho/Philo
permalink: /psycho_philo/
description: Voici une liste de cours autour de la psychologie et philosophie !
nav: true
nav_order: 2
display_categories: [Psychologie/Phylosophie adlérienne]
---

<!-- pages/psycho_philo.md -->
<div class="course">
{%- if site.enable_psycho_philo_categories and page.display_categories %}
  <!-- Display categorized psycho_philo -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_psycho_philo = site.psycho_philo | where: "category", category -%}
  {%- assign sorted_psycho_philo = categorized_psycho_philo | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="course">
    <ul class="ul-course">
      {%- for course in sorted_psycho_philo -%}
        {% include course.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}
{%- endif -%}
</div>
