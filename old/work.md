---
layout: old-default
title: Our Work
nav_id: work
permalink: /old/work/
---
<main>

  <section class="section card-bg page-banner" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; gap:2rem; align-items:end;">
        <div>
          <div class="pill bg-coral-light">
            <span class="pill-dot" style="background:var(--coral);"></span>
            <span class="pill-label text-coral">Our work</span>
          </div>
          <h1 class="h-page">Results that earned the repeat.</h1>
        </div>
        <p class="muted" style="font-size:1rem; max-width:36rem;">Every case here is real work, a real client, and a real number. We've chosen them because the problem was hard and the answer wasn't obvious.</p>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="wrap section-pad">
      <div class="portfolio-grid reveal-stagger">
        {% for c in site.data.cases %}
        <a href="{{ '/old/work/' | append: c.id | append: '/' | relative_url }}" class="portfolio-tile">
          <img src="{{ c.img }}" alt="{{ c.img_alt }}">
          <div class="portfolio-tile-info">
            <span class="portfolio-tile-tag">{{ c.sector }} · {{ c.year }} · {{ c.metrics[0].value }} {{ c.metrics[0].label }}</span>
            <span class="portfolio-tile-title">{{ c.client }}</span>
          </div>
        </a>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="photo-strip" style="background:#B8C0B8;">
    <img src="https://images.unsplash.com/photo-1580934174026-8142803ebb5b?w=1400&h=420&fit=crop&auto=format" alt="Sticky notes organised on a white wall during a design workshop">
  </section>

  <section class="section reveal">
    <div class="wrap" style="padding:3.5rem 0 4rem;">
      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:2.5rem;">
        <h2 class="h-cta">Next could be yours.</h2>
        <a href="{{ '/old/start-a-project/' | relative_url }}" class="btn btn-coral">Start a project →</a>
      </div>
    </div>
  </section>

</main>
