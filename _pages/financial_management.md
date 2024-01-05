---
layout: page
title: Gestion financière
permalink: /financial_management/
description: Voici une liste de cours autour de la gestion financière
nav: true
nav_order: 5
display_categories: [Budgétisation, Investissement]
---

<!-- pages/financial_management.md -->
<div class="technical">
{%- if site.enable_financial_management_categories and page.display_categories %}
  <!-- Display categorized financial_management -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_financial_management = site.financial_management | where: "category", category -%}
  {%- assign sorted_financial_management = categorized_financial_management | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-financial_management">
      {%- for financial_management in sorted_financial_management -%}
        {% include financial_management.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display financial_management without categories -->
  {%- assign sorted_financial_management = site.financial_management | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_financial_management -%}
      {% include financial_management.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
