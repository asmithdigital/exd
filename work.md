---
layout: default
title: Our Work
nav_id: work
permalink: /work/
---
<main>

  <section class="page-banner">
    <div class="wrap">
      <span class="pill-label">Selected results</span>
      <h1 class="h-page">Work that moved a number</h1>
      <p>Every case here is real work, a real client, and a real number.</p>
    </div>
  </section>

  <div class="portfolio" style="padding-top:80px;">
    {% assign case_pairs = site.data.cases %}
    <div class="p-row">
      {% for c in case_pairs limit:2 %}
      <div class="p-col">
        <a href="{{ '/work/' | append: c.id | append: '/' | relative_url }}" class="p-img{% if forloop.first %}{% else %} short{% endif %}" style="background:linear-gradient(135deg,{{ c.accent | default: '#dbeafe' }},#eef2ff);">
          <span class="p-tag" style="color:var(--brand-strong);">{{ c.sector }} · {{ c.year }}</span>
          <span class="p-title" style="color:var(--ink);">{{ c.client }}</span>
        </a>
      </div>
      {% endfor %}
    </div>
    <div class="p-row">
      {% assign remaining = site.data.cases | slice: 2, 2 %}
      {% for c in remaining %}
      <div class="p-col">
        <a href="{{ '/work/' | append: c.id | append: '/' | relative_url }}" class="p-img{% if forloop.first %} short{% endif %}" style="background:linear-gradient(135deg,{{ c.accent | default: '#dbeafe' }},#eef2ff);">
          <span class="p-tag" style="color:var(--brand-strong);">{{ c.sector }} · {{ c.year }}</span>
          <span class="p-title" style="color:var(--ink);">{{ c.client }}</span>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>

</main>
