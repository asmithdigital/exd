---
layout: default
title: About
nav_id: about
permalink: /about/
---
<main>

  <section class="page-banner">
    <div class="wrap">
      <span class="pill-label">About EXD</span>
      <h1 class="h-page">A small firm with a long track record</h1>
      <p>Twenty years working with banks, insurers, motoring groups, and travel brands — organisations where getting it wrong has real consequences.</p>
    </div>
  </section>

  <section class="section">
    <div class="stat-grid">
      <div><div class="stat-val">20yr</div><div class="stat-lab">Operating as a practice</div></div>
      <div><div class="stat-val">100%</div><div class="stat-lab">Engagements delivered profitably</div></div>
      <div><div class="stat-val">6</div><div class="stat-lab">Disciplines under one roof</div></div>
    </div>
    <div class="discipline-grid">
      {% for d in site.data.disciplines %}
      <div class="discipline-card"><h4>{{ d.name }}</h4><p>{{ d.description }}</p></div>
      {% endfor %}
    </div>
  </section>

</main>
