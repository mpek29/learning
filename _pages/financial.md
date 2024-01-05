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
<div class="technical">
{%- if site.enable_financial_categories and page.display_categories %}
  <!-- Display categorized financial -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_financial = site.financial | where: "category", category -%}
  {%- assign sorted_financial = categorized_financial | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-financial">
      {%- for financial in sorted_financial -%}
        {% include financial.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display financial without categories -->
  {%- assign sorted_financial = site.financial | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_financial -%}
      {% include financial.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
