// Header background / mobile menu
const burgerBtn = document.getElementById('burgerBtn');
const navDrawer = document.getElementById('navDrawer');
if (burgerBtn && navDrawer) {
  burgerBtn.addEventListener('click', () => {
    navDrawer.classList.toggle('open');
  });
}

// Option pills (checkbox = multi-select, radio = single-select)
document.querySelectorAll('[data-options]').forEach((group) => {
  const multi = group.dataset.options === 'multi';
  group.querySelectorAll('.option-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      if (multi) {
        pill.classList.toggle('selected');
      } else {
        group.querySelectorAll('.option-pill').forEach((p) => p.classList.remove('selected'));
        pill.classList.add('selected');
      }
    });
  });
});

// Sticky CTA — hides near the contact form / footer
const stickyCta = document.getElementById('stickyCta');
if (stickyCta) {
  const contactCard = document.querySelector('.contact-card');
  const footerEl = document.querySelector('footer');
  window.addEventListener('scroll', () => {
    const contactVisible = contactCard && contactCard.getBoundingClientRect().top < window.innerHeight;
    const footerVisible = footerEl && footerEl.getBoundingClientRect().top < window.innerHeight;
    if (window.scrollY > 400 && !contactVisible && !footerVisible) {
      stickyCta.classList.add('show');
    } else {
      stickyCta.classList.remove('show');
    }
  });
}

// Contact form submit
const intakeForm = document.getElementById('intakeForm');
if (intakeForm) {
  intakeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.textContent = 'Submitted (prototype only — not wired to a backend yet)';
    toast.classList.add('show');
    clearTimeout(window._t);
    window._t = setTimeout(() => toast.classList.remove('show'), 2600);
  });
}
