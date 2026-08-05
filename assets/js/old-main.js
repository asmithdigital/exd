// Text-flip buttons: wrap each .btn's text into the two-copy structure
// the CSS expects, so every button gets the hover effect without needing
// hand-edited markup in every template.
document.querySelectorAll('.btn').forEach((btn) => {
  if (btn.querySelector('.btn-wrap')) return; // already wrapped
  const label = btn.textContent.trim();
  btn.innerHTML = `<span class="btn-wrap"><span class="text-one">${label}</span><span class="text-two">${label}</span></span>`;
});

// Header background on scroll
const header = document.getElementById('siteHeader');
function updateHeader(){
  if (!header) return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Mobile menu toggle
const burgerBtn = document.getElementById('burgerBtn');
const navDrawer = document.getElementById('navDrawer');
if (burgerBtn && navDrawer) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    navDrawer.classList.toggle('open');
    document.body.style.overflow = navDrawer.classList.contains('open') ? 'hidden' : '';
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach((el) => revealObserver.observe(el));

// Eased smooth-scroll for same-page anchor links (easeOutExpo curve,
// matching the reference site's motion language rather than the browser default)
function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
function smoothScrollTo(targetY, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();
  function step() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * easeOutExpo(progress));
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
document.querySelectorAll('a[href*="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const url = new URL(link.href, window.location.href);
    if (url.pathname !== window.location.pathname || !url.hash) return;
    const target = document.querySelector(url.hash);
    if (!target) return;
    e.preventDefault();
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - 80);
  });
});
