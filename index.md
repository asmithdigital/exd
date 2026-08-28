---
layout: default
title: Home
nav_id: home
---
<main>

  <section class="hero">
    <div class="wrap">
      <h1 class="display-title">Hi, I'm Andrew. I help businesses figure out what's actually worth building next.</h1>
      <p class="hero-text">Websites, customer experience, and AI — one relationship, not five vendors who've never spoken to each other. Twenty years leading design and product teams, now applied directly to your business.</p>
      <div class="hero-actions">
        <a href="{{ '/#contact' | relative_url }}" class="btn btn-dark">Get in touch →</a>
        <a href="{{ '/work/' | relative_url }}" class="btn btn-outline">See the work</a>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <span class="eyebrow">What I do</span>
      <h2 class="section-title">One person who can do it directly, or bring in exactly who you need.</h2>
      <p class="section-lede">Most small businesses end up juggling a web developer, an AI consultant, and a strategy person who've never spoken to each other. This works differently.</p>
      <div class="tier-grid">
        <div class="tier-card">
          <span class="tier-num">01</span>
          <h3>A short, honest conversation</h3>
          <p>Free, no obligation. We work out what's actually going on, and whether it's worth solving now.</p>
        </div>
        <div class="tier-card">
          <span class="tier-num">02</span>
          <h3>A clear, scoped first piece of work</h3>
          <p>A website, a diagnostic, a specific fix — small enough to prove the relationship works before anything bigger.</p>
        </div>
        <div class="tier-card">
          <span class="tier-num">03</span>
          <h3>Ongoing work, or a bigger build</h3>
          <p>Once trust is established — bringing in trusted specialists from my network exactly when the work calls for it.</p>
        </div>
      </div>
      <div style="margin-top:2.5rem;"><a href="{{ '/what-i-do/' | relative_url }}" class="text-link">More on how this works →</a></div>
    </div>
  </section>

  <section class="section muted-bg">
    <div class="wrap">
      <span class="eyebrow">Proof</span>
      <h2 class="section-title">Real work, not a portfolio of ideas.</h2>
      <div class="case-grid">
        {% assign teaser = site.data.cases | slice: 0, 4 %}
        {% for c in teaser %}
        <a href="{{ '/work/' | append: c.id | append: '/' | relative_url }}" class="case-card">
          <span class="case-meta">{{ c.sector }} · {{ c.year }}</span>
          <h3>{{ c.client }}</h3>
          <p>{{ c.headline }}</p>
          <div class="case-metrics">
            {% for m in c.metrics limit:2 %}
            <div><div class="val">{{ m.value }}</div><div class="lab">{{ m.label }}</div></div>
            {% endfor %}
          </div>
        </a>
        {% endfor %}
      </div>
      <div style="margin-top:2.5rem;"><a href="{{ '/work/' | relative_url }}" class="text-link">See all the work →</a></div>
    </div>
  </section>

  <section class="section" id="contact">
    <div class="wrap">
      <span class="eyebrow">Get in touch</span>
      <h2 class="section-title">Tell me what you're working on.</h2>
      <p class="section-lede" style="margin-bottom:2.5rem;">No sales pitch, no jargon. I read every message myself and reply within two working days.</p>
    </div>
    <div class="wrap">
      <div class="contact-section">
        <!--
          FORMSPREE SETUP (one-time, about a minute):
          1. Sign up free at https://formspree.io
          2. Create a new form, name it whatever you like.
          3. Formspree gives you an endpoint like https://formspree.io/f/xxxxxxxx
          4. Replace YOUR_FORM_ID below with that ID.
          Submissions land in your email immediately — no database needed yet.
        -->
        <form id="intakeForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div class="contact-grid">
            <div class="field"><label>Your name *</label><input type="text" name="name" placeholder="Jane Doe" required></div>
            <div class="field"><label>Business name</label><input type="text" name="business" placeholder="Optional"></div>
          </div>
          <div class="field"><label>Email address *</label><input type="email" name="email" placeholder="you@company.com" required></div>
          <div class="field"><label>What are you trying to solve or achieve? *</label><textarea name="message" placeholder="What's going on? What have you already tried?" required></textarea></div>
          <div class="field">
            <label>What kind of help are you after?</label>
            <div class="option-row" data-options="multi">
              <span class="option-pill">A new website</span>
              <span class="option-pill">Understanding my customers better</span>
              <span class="option-pill">Using AI in my business</span>
              <span class="option-pill">A bigger digital project</span>
              <span class="option-pill">Not sure yet</span>
            </div>
          </div>
          <input type="hidden" name="_subject" value="New enquiry from the website">
          <button type="submit" class="btn btn-dark">Send →</button>
        </form>
      </div>
    </div>
  </section>

</main>
