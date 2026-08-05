---
layout: default
title: How We Work
nav_id: how-we-work
permalink: /how-we-work/
---
<main>

  <section class="page-banner">
    <div class="wrap">
      <span class="pill-label">Process</span>
      <h1 class="h-page">How it moves</h1>
      <p>A genuine sequence — work really does move through these stages, in this order.</p>
    </div>
  </section>

  <section class="section">
    <div class="section-split">
      <div class="section-label">
        <span class="eyebrow">01–06</span>
        <h2>Six stages, always in order</h2>
        <p>Skipping any of them is how problems get solved in the wrong order.</p>
      </div>
      <div>
        {% for s in site.data.steps %}
        <div class="step-row">
          <span class="num">0{{ forloop.index }}</span>
          <div><h3>{{ s.phase }}</h3><p>{{ s.summary }}</p></div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

</main>
