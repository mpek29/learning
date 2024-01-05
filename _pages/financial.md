---
layout: page
title: Finance
permalink: /financial/
description: Voici une liste de cours autour de la gestion financière
nav: true
nav_order: 5
display_categories: [Budgétisation, Investissement]
---

<!-- pages/financial.md -->
<div class="course">
{%- if site.enable_financial_categories and page.display_categories %}
  <!-- Display categorized financial -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_financial = site.financial | where: "category", category -%}
  {%- assign sorted_financial = categorized_financial | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="course">
    <ul class="ul-course">
      {%- for course in sorted_financial -%}
        {% include course.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}
{%- endif -%}
</div>
