---
layout: old-default
title: About
nav_id: about
permalink: /old/about/
---
<main>

  <section class="section card-bg page-banner" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; gap:2rem; align-items:end;">
        <div>
          <div class="pill bg-teal-light">
            <span class="pill-dot" style="background:var(--teal);"></span>
            <span class="pill-label text-teal">About</span>
          </div>
          <h1 class="h-page">A small firm with a long track record.</h1>
        </div>
        <p class="muted" style="font-size:1rem; max-width:36rem;">EXD has been a practice for twenty years. We work with banks, insurers, motoring groups, and travel brands — organisations where getting it wrong has real consequences.</p>
      </div>
    </div>
  </section>

  <section class="split section reveal">
    <div class="split-content" style="border-right:1px solid var(--border);">
      <div style="padding:clamp(2rem,5vw,3.5rem);">
        <div class="stat-grid">
          <div><p class="stat-value text-coral">20 years</p><p class="stat-label">Operating as a practice</p></div>
          <div><p class="stat-value text-teal">100%</p><p class="stat-label">Engagements delivered profitably</p></div>
          <div><p class="stat-value text-amber">6</p><p class="stat-label">Disciplines under one roof</p></div>
        </div>
        <p class="muted" style="font-size:.95rem; max-width:36rem; margin-bottom:1.25rem;">We're not VC-backed, not chasing headcount growth, and not managing your account around a sales target. We take a small number of engagements at a time and stay close to them.</p>
        <p class="muted" style="font-size:.95rem; max-width:36rem;">Quality holds up because research, design, and content aren't handed off between separate teams — they move together on every engagement, under one roof, from the first conversation to the shipped result.</p>
      </div>
    </div>
    <div class="split-img">
      <img src="https://images.unsplash.com/photo-1686771416317-b964cc4e0002?w=800&h=600&fit=crop&auto=format" alt="Two people in a collaborative research conversation">
    </div>
  </section>

  <section class="section section-pad reveal">
    <div class="wrap">
      <p class="pill-label muted" style="margin-bottom:2.5rem;">The practice is built from six disciplines</p>
      <div class="discipline-grid reveal-stagger">
        {% for d in site.data.disciplines %}
        <div class="discipline-card">
          <h3>{{ d.name }}</h3>
          <p>{{ d.description }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="photo-strip" style="background:#B4BEC0;">
    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&h=420&fit=crop&auto=format" alt="Team working together at a whiteboard">
  </section>

  <section class="section card-bg reveal">
    <div class="wrap section-pad">
      <div style="display:grid; gap:3rem;" class="access-grid">
        <div>
          <p class="pill-label text-teal" style="margin-bottom:1.25rem;">Care and accessibility</p>
          <h2 class="h-section">We design for everyone using what we build.</h2>
        </div>
        <p class="muted" style="font-size:.95rem;">Not just the easiest or most profitable user. Accessibility is a matter of craft and professional standards, not a selling point or a compliance checkbox. Every component we produce meets WCAG 2.2 AA. Every content decision accounts for plain language. We test with users across a wide range of abilities and contexts, and we expect the same of the teams we work alongside.</p>
      </div>
    </div>
  </section>

  <section class="section reveal">
    <div class="wrap" style="padding:3.5rem 0 4rem;">
      <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:2.5rem;">
        <h2 class="h-cta">Interested in working together?</h2>
        <a href="{{ '/old/start-a-project/' | relative_url }}" class="btn btn-coral">Start a project →</a>
      </div>
    </div>
  </section>

</main>

<style>
@media (min-width:860px){ .access-grid{ grid-template-columns:1fr 1fr; gap:5rem; } }
</style>
