---
layout: default
title: How This Works
nav_id: how-this-works
permalink: /how-this-works/
---
<main>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">How this works</span>
      <h1 class="display-title">A clear process, every time.</h1>
      <p class="hero-text">You should always know what's happening and why. Here's exactly how an engagement moves, start to finish.</p>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      {% for s in site.data.steps %}
      <div class="stage-row">
        <span class="stage-num">0{{ forloop.index }}</span>
        <div><h3>{{ s.phase }}</h3><p>{{ s.summary }}</p></div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section muted-bg" style="text-align:center;">
    <div class="wrap">
      <h2 class="section-title" style="margin:0 auto 1.5rem; text-align:center;">Ready to start with the first conversation?</h2>
      <a href="{{ '/#contact' | relative_url }}" class="btn btn-dark">Get in touch →</a>
    </div>
  </section>

</main>
