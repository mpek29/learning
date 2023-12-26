---
layout: page
title: Pense-bêtes
permalink: /cheatsheets/
description: Voici une liste de pense-bêtes très utiles !
nav: true
nav_order: 2
---

<!-- pages/cheatsheets.md -->
<div class="cheatsheets">
  <!-- Display categorized cheatsheet -->
  {%- assign sorted_cheatsheets = site.cheatsheets | sort: "importance" %}
  <!-- Generate link for each cheatsheet -->
  <ul class="ul-cheatsheet">
    {%- for cheatsheet in sorted_cheatsheets -%}
      {% include cheatsheets.html %}
    {%- endfor %}
  </ul>
</div>
