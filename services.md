---
layout: default
title: Services
nav_id: services
permalink: /services/
---
<main>

  <section class="page-banner">
    <div class="wrap">
      <span class="pill-label">Capabilities</span>
      <h1 class="h-page">What we do</h1>
      <p>Six things we do, done properly — not a menu to mix and match, a set of capabilities that work together.</p>
    </div>
  </section>

  <section class="section">
    <div class="section-split">
      <div class="section-label">
        <span class="eyebrow">01–06</span>
        <h2>Every engagement, start to finish</h2>
        <p>Most projects span several of these, in sequence — not picked à la carte.</p>
      </div>
      <div>
        {% for s in site.data.services %}
        <div class="service-row">
          <span class="num">0{{ forloop.index }}</span>
          <div><h3>{{ s.name }}</h3><p>{{ s.description }}</p></div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

</main>
