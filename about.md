---
layout: default
title: About
nav_id: about
permalink: /about/
---
<main>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">About</span>
      <h1 class="display-title">Andrew Smith, Founder.</h1>
    </div>
  </section>

  <section class="section">
    <div class="wrap about-grid">
      <div class="about-photo"><img src="{{ '/assets/img/andrew.jpg' | relative_url }}" alt="Andrew Smith"></div>
      <div class="about-body">
        <p>I'm based in Adelaide. I've spent twenty years across product design, front-end development, and leading design and product teams — most recently running an experience design practice inside a large member-based organisation.</p>
        <p>I care about how good decisions actually get made — evidence over opinion, and systems that make quality repeatable rather than dependent on who happens to be in the room. Along the way I've built research functions from nothing, led design systems through formal governance, mapped customer journeys that became the shared reference point across whole organisations, and led the build of a working AI orchestration layer that let a shrinking team do more without adding headcount.</p>
        <p>Now I'm bringing that same thinking directly to smaller businesses — websites, customer experience, and AI, explained without the jargon, and led properly when the work needs more than one person.</p>
      </div>
    </div>
  </section>

  <section class="section muted-bg">
    <div class="wrap">
      <span class="eyebrow">What I bring</span>
      <h2 class="section-title">Range, with one thread running through it.</h2>
      <div class="tier-grid">
        {% for d in site.data.disciplines %}
        <div class="tier-card"><h3>{{ d.name }}</h3><p>{{ d.description }}</p></div>
        {% endfor %}
      </div>
    </div>
  </section>

</main>
