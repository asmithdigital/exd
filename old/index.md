---
layout: old-default
title: Home
nav_id: home
permalink: /old/
---
<main>

  <!-- HERO: headline + stat pair -->
  <section class="section-pad reveal" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; grid-template-columns:1.4fr 1fr; gap:3rem; align-items:end;" class="hero-top-grid">
        <h1 class="h-hero">We turn a goal into something people actually use</h1>
        <div style="display:flex; gap:2.5rem; padding-bottom:.5rem;">
          <div>
            <p class="h-section text-coral" style="margin-bottom:.3rem;">20yr</p>
            <p class="muted" style="font-size:.9rem;">Working with banks, insurers, and motoring brands</p>
          </div>
          <div>
            <p class="h-section text-coral" style="margin-bottom:.3rem;">100%</p>
            <p class="muted" style="font-size:.9rem;">Engagements delivered profitably</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- GIANT WORDMARK -->
  <div class="giant-wordmark">EXD</div>

  <!-- PHOTO BAND with pill CTA overlay -->
  <section class="photo-band reveal">
    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop&auto=format" alt="Team collaborating around a table with laptops">
    <div class="photo-band-overlay">
      <a href="{{ '/old/work/' | relative_url }}" class="btn btn-white">See the work</a>
      <span style="color:#fff; font-weight:800; font-size:1.3rem; letter-spacing:-.02em;">EXD</span>
    </div>
  </section>

  <!-- MARQUEE TICKER label -->
  <div class="marquee-wrap">
    <div class="marquee-inner">
      {% for i in (1..8) %}
        <span class="marquee-item"><span>Selected Work</span><span>◆</span></span>
      {% endfor %}
    </div>
  </div>

  <!-- PORTFOLIO GRID (2-col) -->
  <section class="section-pad reveal" style="border-top:none;">
    <div class="wrap">
      <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:2rem; flex-wrap:wrap; gap:1rem;">
        <p class="pill-label muted">Featured work</p>
        <p class="muted" style="font-style:italic;">Excellency in creative designs</p>
      </div>
      <div class="portfolio-grid reveal-stagger" style="grid-template-columns:repeat(2,1fr);">
        {% assign teaser_cases = site.data.cases | slice: 0, 4 %}
        {% for c in teaser_cases %}
        <a href="{{ '/old/work/' | append: c.id | append: '/' | relative_url }}" class="portfolio-tile" style="aspect-ratio:16/11;">
          <img src="{{ c.img }}" alt="{{ c.img_alt }}">
          <div class="portfolio-tile-info">
            <span class="portfolio-tile-tag">{{ c.sector }} · {{ c.year }}</span>
            <span class="portfolio-tile-title">{{ c.client }}</span>
          </div>
        </a>
        {% endfor %}
      </div>
      <div style="text-align:center; margin-top:2.5rem;">
        <a href="{{ '/old/work/' | relative_url }}" class="btn btn-outline">View All Work</a>
      </div>
    </div>
  </section>

  <!-- CAPABILITY ROWS -->
  <section class="section-pad reveal">
    <div class="wrap">
      <h2 class="h-page" style="margin-bottom:2rem;">Complex proficiency</h2>
      {% assign cap_services = site.data.services | slice: 0, 4 %}
      {% for s in cap_services %}
      <div class="capability-row">
        <div class="capability-grid">
          <p class="pill-label muted">(0{{ forloop.index }})</p>
          <div>
            <h3 class="h-section" style="margin-bottom:.5rem;">{{ s.name }}</h3>
            <p class="muted">{{ s.description }}</p>
            <div class="capability-sub">
              {% for d in s.deliverables %}<span>{{ d }}</span>{% endfor %}
            </div>
          </div>
          <div class="thumb"><img src="{{ s.img }}" alt="{{ s.img_alt }}"></div>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- STATS GRID -->
  <section class="section-pad reveal">
    <div class="wrap">
      <div class="fact-grid reveal-stagger" id="factGrid">
        <div class="fact-item"><p class="num text-coral">20yr</p><p>Operating as a design practice.</p></div>
        <div class="fact-item"><p class="num text-coral">100%</p><p>Engagements delivered profitably.</p></div>
        <div class="fact-item"><p class="num text-coral">6</p><p>Disciplines under one roof.</p></div>
        <div class="fact-item"><p class="num text-coral">4</p><p>Sectors we know well.</p></div>
        <div class="fact-item"><p class="num text-coral">1</p><p>Team, start to finish, every time.</p></div>
      </div>
    </div>
  </section>

  <!-- CLIENT PILL BADGES -->
  <section class="section-pad reveal">
    <div class="wrap" style="text-align:center;">
      <h2 class="h-page" style="margin-bottom:1.5rem;"><span class="text-coral">Client:</span> Helping brands to grow and say their success stories to the world.</h2>
      <p class="muted" style="max-width:34rem; margin:0 auto 1rem;">We're a small practice with strong capabilities across research, design, and delivery — the same team, start to finish, on every engagement.</p>
      <div class="badge-scatter">
        {% assign clients = "Meridian Travel,Northline Insurance,Solstice Motors,Harbour Banking Group,Velocity Logistics,Crescent Health" | split: "," %}
        {% for c in clients %}<span class="badge-pill">{{ c }}</span>{% endfor %}
      </div>
    </div>
  </section>

  <!-- OVAL CTA -->
  <section class="reveal" style="padding:1rem 0 3rem;">
    <div class="oval-cta">
      <a href="{{ '/old/start-a-project/' | relative_url }}">Let's Work</a>
    </div>
  </section>

  <!-- CLOSING STATEMENT + PHOTO -->
  <section class="section-pad reveal" style="border-top:none;">
    <div class="wrap" style="text-align:center;">
      <h2 class="h-page">It's all about the unique <span class="muted">thinking</span> with <span class="muted">creativity</span> and quality for complex solutions in an easy way</h2>
    </div>
  </section>
  <div class="photo-band" style="height:420px;">
    <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=1600&h=900&fit=crop&auto=format" alt="Person working on a laptop in a relaxed setting">
  </div>

</main>
