---
layout: page
title: Tutoriels
permalink: /tutorials/
description: Voici une liste de tutoriels très utiles !
nav: true
nav_order: 2
---

<!-- pages/tutorials.md -->
<div class="tutorials">
  <!-- Display categorized tutorials -->
  {%- assign sorted_tutorials = site.tutorials | sort: "importance" %}
  <!-- Generate link for each tutorial -->
  <ul class="ul-tuto">
    {%- for tutorial in sorted_tutorials -%}
      {% include tutorials.html %}
    {%- endfor %}
  </ul>
</div>
