---
layout: old-default
title: How We Work
nav_id: how-we-work
permalink: /old/how-we-work/
---
<main>

  <section class="section card-bg page-banner" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; gap:2rem; align-items:end;">
        <h1 class="h-page">Six stages. Always in this order.</h1>
        <p class="muted" style="font-size:1.05rem; max-width:36rem;">This is a genuine sequence — work really does move through these stages. Each stage builds on the last, and skipping any of them is how problems get solved in the wrong order.</p>
      </div>
    </div>
  </section>

  {% for s in site.data.steps %}
  <section class="step-row">
    <div class="wrap section-pad">
      <div class="step-grid">
        <div class="step-num-wrap">
          <span class="step-num text-{{ s.accent }}">{{ s.n }}</span>
          <h2 style="font-weight:700; font-size:clamp(1.1rem,2vw,1.4rem); letter-spacing:-.015em;">{{ s.phase }}</h2>
        </div>
        <div style="padding-top:.5rem;">
          <p style="font-weight:600; font-size:clamp(1rem,2vw,1.25rem); line-height:1.55; margin-bottom:1.25rem; max-width:48ch;">{{ s.summary }}</p>
          <p class="muted" style="font-size:.95rem; line-height:1.8; max-width:52ch;">{{ s.body }}</p>
        </div>
      </div>
    </div>
  </section>
  {% endfor %}

  <section class="photo-strip" style="background:#C8D0C4;">
    <img src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=1400&h=480&fit=crop&auto=format" alt="Practitioner writing notes">
  </section>

  <section class="section card-bg section-pad-sm reveal">
    <div class="wrap">
      <p class="pill-label muted" style="margin-bottom:2.5rem;">A few non-negotiables</p>
      <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:2.5rem;" class="principles-grid">
        <div>
          <div style="width:32px; height:3px; background:var(--coral); margin-bottom:1.25rem; border-radius:2px;"></div>
          <h3 style="font-size:1.1rem; letter-spacing:-.015em; margin-bottom:.75rem;">Embedded, not advisory</h3>
          <p class="muted" style="font-size:.9rem;">We're part of the team. We sit with you, attend your meetings, use your tools.</p>
        </div>
        <div>
          <div style="width:32px; height:3px; background:var(--teal); margin-bottom:1.25rem; border-radius:2px;"></div>
          <h3 style="font-size:1.1rem; letter-spacing:-.015em; margin-bottom:.75rem;">One point of contact</h3>
          <p class="muted" style="font-size:.9rem;">The people you meet at the start are the people doing the work.</p>
        </div>
        <div>
          <div style="width:32px; height:3px; background:var(--amber); margin-bottom:1.25rem; border-radius:2px;"></div>
          <h3 style="font-size:1.1rem; letter-spacing:-.015em; margin-bottom:.75rem;">Honest over comfortable</h3>
          <p class="muted" style="font-size:.9rem;">If we think the brief is wrong, we say so. Early honesty is cheaper than late discovery.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="wrap" style="padding:4rem 0 4.5rem;">
      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:2.5rem;">
        <h2 class="h-cta">Ready to get started?</h2>
        <a href="{{ '/old/start-a-project/' | relative_url }}" class="btn btn-coral">Start a project →</a>
      </div>
    </div>
  </section>

</main>

<style>
@media (max-width:760px){ .principles-grid{ grid-template-columns:1fr !important; gap:2rem !important; } }
</style>
