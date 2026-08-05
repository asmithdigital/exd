---
layout: old-default
title: Services
nav_id: services
permalink: /old/services/
---
<main>

  <section class="section card-bg page-banner" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; gap:2rem; align-items:end;" class="editorial-header">
        <h1 class="h-page">Six things we do, done properly.</h1>
        <p class="muted" style="font-size:1.05rem; max-width:36rem;">Not a menu to mix and match — a set of capabilities that work together. Most engagements span several of them, in sequence.</p>
      </div>
    </div>
  </section>

  {% for s in site.data.services %}
  {% assign isEven = forloop.index | modulo: 2 %}
  <section class="editorial-row{% if isEven == 0 %} alt{% endif %}">
    <div class="wrap section-pad">
      <div class="editorial-grid">
        {% if isEven == 0 %}<div class="editorial-img"><img src="{{ s.img }}" alt="{{ s.img_alt }}"></div>{% endif %}
        <div>
          <div style="display:flex; align-items:baseline; gap:1.5rem; margin-bottom:1.5rem; flex-wrap:wrap;">
            <span class="row-number text-{{ s.accent }}">{{ s.n }}</span>
            <h2 class="h-section">{{ s.name }}</h2>
          </div>
          <p style="font-weight:500; font-size:1.05rem; margin-bottom:1rem; max-width:44ch;">{{ s.description }}</p>
          <p class="muted" style="font-size:.9rem; line-height:1.75; margin-bottom:2rem; max-width:46ch;">{{ s.detail }}</p>
          <div class="tag-list">
            {% for d in s.deliverables %}<span class="tag-chip">{{ d }}</span>{% endfor %}
          </div>
        </div>
        {% if isEven != 0 %}<div class="editorial-img"><img src="{{ s.img }}" alt="{{ s.img_alt }}"></div>{% endif %}
      </div>
    </div>
  </section>
  {% endfor %}

  <section class="photo-strip" style="background:#C0CEC8;">
    <img src="https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=1400&h=500&fit=crop&auto=format" alt="Research session sticky notes">
  </section>

  <section class="section card-bg section-pad-sm reveal">
    <div class="wrap">
      <p class="pill-label muted" style="margin-bottom:2rem;">Sectors we know well</p>
      <div class="chip-row">
        {% assign sectors = "Financial Services,Insurance,Motoring,Travel & Hospitality,Logistics,Public Sector" | split: "," %}
        {% for sector in sectors %}
        <span class="sector-chip">{{ sector }}</span>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="wrap" style="padding:4rem 0 4.5rem;">
      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:2.5rem;">
        <h2 class="h-cta">Have something in mind?</h2>
        <div style="display:flex; gap:1rem; flex-wrap:wrap; align-items:center;">
          <a href="{{ '/old/work/' | relative_url }}" class="btn btn-outline">See the work →</a>
          <a href="{{ '/old/start-a-project/' | relative_url }}" class="btn btn-coral">Start a project →</a>
        </div>
      </div>
    </div>
  </section>

</main>
