---
layout: page
title: Psycho/Phylo
permalink: /psycho_phylo/
description: Voici une liste de cours autour de la psychologie et la phylosophie !
nav: true
nav_order: 2
display_categories: [Psychologie/Phylosophie adlérienne]
---

<!-- pages/psycho_phylo.md -->
<div class="technical">
{%- if site.enable_psycho_phylo_categories and page.display_categories %}
  <!-- Display categorized technical -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_psycho_phylo = site.psycho_phylo | where: "category", category -%}
  {%- assign sorted_psycho_phylo = categorized_psycho_phylo | sort: "importance" %}
  <!-- Generate cards for each project -->
  <div class="technical">
    <ul class="ul-technical">
      {%- for psycho_phylo in sorted_psycho_phylo -%}
        {% include psycho_phylo.html %}
      {%- endfor %}
    </ul>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display psycho_phylo without categories -->
  {%- assign sorted_technical = site.psycho_phylo | sort: "importance" -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for project in sorted_technical -%}
      {% include psycho_phylo.html %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>
