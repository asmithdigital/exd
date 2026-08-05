---
layout: old-default
title: Start a Project
nav_id: start
permalink: /old/start-a-project/
---
<main>

  <section class="section card-bg page-banner" style="border-top:none;">
    <div class="wrap">
      <div style="display:grid; gap:2rem; align-items:end;">
        <div>
          <div class="pill bg-coral-light">
            <span class="pill-dot" style="background:var(--coral);"></span>
            <span class="pill-label text-coral">Start a project</span>
          </div>
          <h1 class="h-page">Tell us what you're working on.</h1>
        </div>
        <div>
          <p class="muted" style="font-size:.95rem; max-width:36rem; margin-bottom:1.25rem;">We read every submission ourselves. If it sounds like a good fit, we'll suggest a short call. If it isn't, we'll say so and try to point you somewhere useful.</p>
          <p class="muted" style="font-size:.9rem;">We respond within two working days.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="wrap" style="padding-bottom:5rem;">
    <form id="intakeForm" style="max-width:56rem; margin:0 auto;">

      <div class="form-section">
        <p class="pill-label muted" style="margin-bottom:1.5rem;">Who you are</p>
        <div class="form-grid-3">
          <input type="text" name="name" class="form-input" placeholder="Your name" required>
          <input type="text" name="team" class="form-input" placeholder="Organisation / team" required>
          <input type="email" name="email" class="form-input" placeholder="Email address" required>
        </div>
      </div>

      <div class="form-section">
        <p class="pill-label muted" style="margin-bottom:1.5rem;">What you're trying to solve or achieve</p>
        <textarea name="problem" class="form-textarea" rows="6" placeholder="What's the problem? What have you already tried? What makes it hard? The more context you give us, the better we can tell you whether we can help." required></textarea>
      </div>

      <div class="form-section">
        <p class="pill-label muted" style="margin-bottom:1.5rem;">Which kind of expertise you think you need</p>
        <div class="chip-row" id="expertiseChips" data-multi="true">
          <button type="button" class="chip-option" data-value="Discovery & Research">Discovery &amp; Research</button>
          <button type="button" class="chip-option" data-value="Service Design">Service Design</button>
          <button type="button" class="chip-option" data-value="UX & Product Design">UX &amp; Product Design</button>
          <button type="button" class="chip-option" data-value="Content Design">Content Design</button>
          <button type="button" class="chip-option" data-value="Design Systems">Design Systems</button>
          <button type="button" class="chip-option" data-value="Not sure yet">I'm not sure yet</button>
        </div>
      </div>

      <div class="form-section">
        <p class="pill-label muted" style="margin-bottom:1.5rem;">How urgent it is</p>
        <div class="chip-row" id="urgencyChips" data-color="teal">
          <button type="button" class="chip-option" data-value="Within the next few weeks">Within the next few weeks</button>
          <button type="button" class="chip-option" data-value="Within the next couple of months">Within the next couple of months</button>
          <button type="button" class="chip-option" data-value="No fixed timeline right now">No fixed timeline right now</button>
        </div>
      </div>

      <div class="form-section">
        <p class="pill-label muted" style="margin-bottom:1.5rem;">Roughly how big a piece of work this feels like</p>
        <div style="display:flex; flex-direction:column; gap:.75rem;" id="sizeChips" data-color="amber">
          <button type="button" class="chip-option" data-value="A focused piece — a few weeks" style="text-align:left;">A focused piece — a few weeks</button>
          <button type="button" class="chip-option" data-value="A meaningful engagement — a couple of months" style="text-align:left;">A meaningful engagement — a couple of months</button>
          <button type="button" class="chip-option" data-value="A substantial programme — several months or more" style="text-align:left;">A substantial programme — several months or more</button>
          <button type="button" class="chip-option" data-value="Not sure yet" style="text-align:left;">I'm not sure yet</button>
        </div>
      </div>

      <div style="padding-top:2rem;">
        <button type="submit" class="btn btn-coral">Send →</button>
      </div>
    </form>

    <div id="confirmState" style="display:none;">
      <div class="pill bg-teal-light">
        <span class="pill-dot" style="background:var(--teal);"></span>
        <span class="pill-label text-teal">Submitted</span>
      </div>
      <h1 class="h-page" style="max-width:18ch; margin-bottom:1.25rem;">We'll be in touch within two working days.</h1>
      <p class="muted" style="font-size:1rem; max-width:38rem;">If what you've described sounds like a good fit, we'll suggest a short introductory call. No pitch, no deck — just a conversation about whether we can help.</p>
    </div>
  </div>

</main>

<script>
document.querySelectorAll('.chip-row, [id$="Chips"]').forEach((group) => {
  const multi = group.dataset.multi === 'true';
  const color = group.dataset.color;
  group.querySelectorAll('.chip-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (multi) {
        btn.classList.toggle('selected');
      } else {
        group.querySelectorAll('.chip-option').forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
      }
      if (color) btn.classList.toggle(color, btn.classList.contains('selected'));
    });
  });
});

const form = document.getElementById('intakeForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Stage 1: no backend yet — this just shows the confirmation state.
  // Stage 2 will POST this to Supabase and fire a notification email.
  form.style.display = 'none';
  document.getElementById('confirmState').style.display = 'block';
});
</script>
