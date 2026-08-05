---
layout: default
title: Home
nav_id: home
---
<main>

  <section class="hero">
    <div class="wrap">
      <div class="badge"><span class="dot"></span> Open for new projects</div>
      <h1 class="h-hero">We turn a goal into <mark>something people actually use</mark></h1>
      <p>Discovery, design, and delivery — one team, one thread, from first conversation to shipped result. Twenty years working with banks, insurers, and motoring brands.</p>
      <a href="{{ '/start-a-project/' | relative_url }}" class="btn btn-primary">Start a project →</a>
    </div>
  </section>

  <div class="portfolio">
    <div class="p-row">
      {% assign teaser = site.data.cases | slice: 0, 2 %}
      {% for c in teaser %}
      <div class="p-col">
        <a href="{{ '/work/' | append: c.id | append: '/' | relative_url }}" class="p-img{% if forloop.first %}{% else %} short{% endif %}" style="background:linear-gradient(135deg,{{ c.accent | default: '#dbeafe' }},#eef2ff);">
          <span class="p-tag" style="color:var(--brand-strong);">{{ c.sector }} · {{ c.year }}</span>
          <span class="p-title" style="color:var(--ink);">{{ c.client }}</span>
        </a>
      </div>
      {% endfor %}
    </div>
    <div style="text-align:center;"><a href="{{ '/work/' | relative_url }}" class="btn btn-secondary">See more work →</a></div>
  </div>

  <section class="features">
    <div class="features-row">
      <h2>What we bring to every engagement</h2>
      <div class="feature-grid">
        {% for s in site.data.services %}
        <div class="feature">
          <div class="feature-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 12l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3>{{ s.name }}</h3>
          <p>{{ s.description }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="sectors">
    <h2>Sectors we know well</h2>
    <div class="pill-row">
      <span class="pill">Financial Services</span><span class="pill">Insurance</span><span class="pill">Motoring</span>
      <span class="pill">Travel &amp; Hospitality</span><span class="pill">Logistics</span><span class="pill">Public Sector</span>
    </div>
  </section>

  <div class="testimonial-band">
    <div class="testimonial-inner">
      <blockquote>&ldquo;They sat with our team every step of the claims redesign. It never felt like an outside vendor.&rdquo;</blockquote>
      <div class="avatar-ph">SC</div>
      <div class="name">Sarah Chen</div>
      <div class="role">Customer Operations</div>
    </div>
  </div>

  <section class="home-cta">
    <h2>The work starts with a conversation.</h2>
    <a href="{{ '/start-a-project/' | relative_url }}" class="btn btn-primary">Start a project →</a>
  </section>

</main>
