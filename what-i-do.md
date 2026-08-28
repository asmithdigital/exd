---
layout: default
title: What I Do
nav_id: what-i-do
permalink: /what-i-do/
---
<main>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">What I do</span>
      <h1 class="display-title">One relationship, not five vendors.</h1>
      <p class="hero-text">Most small businesses end up managing a web developer, an AI consultant, and a strategy person separately — none of whom talk to each other, or explain things in language you'd actually use. This works differently: one experienced person who can tell you honestly what's worth doing, do it directly when it's simple, and bring in the right specialist when it's not.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <span class="eyebrow">The model</span>
      <h2 class="section-title">Three ways this can go, depending on what you need.</h2>
      <div class="tier-grid">
        <div class="tier-card">
          <span class="tier-num">01 — Direct</span>
          <h3>I build it myself</h3>
          <p>A website, a landing page, a customer journey map — anything where one senior, hands-on person is exactly what the work calls for.</p>
        </div>
        <div class="tier-card">
          <span class="tier-num">02 — Advised</span>
          <h3>I help you decide</h3>
          <p>You're not sure whether AI is worth the investment, or which part of the customer experience to fix first. I give you a straight answer, in plain language.</p>
        </div>
        <div class="tier-card">
          <span class="tier-num">03 — Led</span>
          <h3>I lead, and bring in specialists</h3>
          <p>The work is bigger than one person — a full app, a proper transformation. I scope it, lead it, and bring in trusted people exactly when needed.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section muted-bg">
    <div class="wrap">
      <span class="eyebrow">In practice, that looks like</span>
      <h2 class="section-title">The kind of work this covers.</h2>
      <div class="tier-grid">
        {% for s in site.data.services %}
        <div class="tier-card">
          <h3>{{ s.name }}</h3>
          <p>{{ s.description }}</p>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <section class="section" style="text-align:center;">
    <div class="wrap">
      <h2 class="section-title" style="margin:0 auto 1.5rem; text-align:center;">Not sure which of these you need?</h2>
      <p class="section-lede" style="margin:0 auto 2rem; text-align:center;">That's exactly what the first conversation is for.</p>
      <a href="{{ '/#contact' | relative_url }}" class="btn btn-dark">Get in touch →</a>
    </div>
  </section>

</main>
