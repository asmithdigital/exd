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

// Contact form — submits to Formspree (see comment in the contact section
// for the one-time setup step) instead of just showing a toast and going nowhere.
const intakeForm = document.getElementById('intakeForm');
if (intakeForm) {
  intakeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const toast = document.getElementById('toast');

    document.querySelectorAll('[data-options]').forEach((group, i) => {
      const selected = [...group.querySelectorAll('.option-pill.selected')].map((p) => p.textContent.trim());
      let hidden = intakeForm.querySelector(`input[name="options_${i}"]`);
      if (!hidden) {
        hidden = document.createElement('input');
        hidden.type = 'hidden';
        hidden.name = `options_${i}`;
        intakeForm.appendChild(hidden);
      }
      hidden.value = selected.join(', ');
    });

    const submitBtn = intakeForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const response = await fetch(intakeForm.action, {
        method: 'POST',
        body: new FormData(intakeForm),
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        toast.textContent = "Sent — I'll get back to you within two working days.";
        intakeForm.reset();
        document.querySelectorAll('.option-pill.selected').forEach((p) => p.classList.remove('selected'));
      } else {
        toast.textContent = 'Something went wrong — please try again, or email me directly.';
      }
    } catch (err) {
      toast.textContent = 'Something went wrong — please check your connection and try again.';
    }

    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    toast.classList.add('show');
    clearTimeout(window._t);
    window._t = setTimeout(() => toast.classList.remove('show'), 4000);
  });
}
