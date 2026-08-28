---
layout: default
title: Work
nav_id: work
permalink: /work/
---
<main>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">Proof</span>
      <h1 class="display-title">Real work, not a portfolio of ideas.</h1>
      <p class="hero-text">Every case here is real — a real organisation, a real problem, a real outcome.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="case-grid">
        {% for c in site.data.cases %}
        <a href="{{ '/work/' | append: c.id | append: '/' | relative_url }}" class="case-card">
          <span class="case-meta">{{ c.sector }} · {{ c.year }}</span>
          <h3>{{ c.client }}</h3>
          <p>{{ c.headline }}</p>
          <div class="case-metrics">
            {% for m in c.metrics limit:2 %}
            <div><div class="val">{{ m.value }}</div><div class="lab">{{ m.label }}</div></div>
            {% endfor %}
          </div>
        </a>
        {% endfor %}
      </div>
    </div>
  </section>

</main>
