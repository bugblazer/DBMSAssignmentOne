document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form   = e.target;
  const inputs = form.querySelectorAll('[required]');
  let   valid  = true;

  // Reset & re-validate
  inputs.forEach(el => {
    el.style.borderColor = '';
    if (!el.value.trim()) {
      el.style.borderColor = 'var(--error)';
      valid = false;
    }
  });

  if (valid) {
    document.getElementById('successModal').classList.add('show');
    form.reset();
    form.querySelectorAll('input, select').forEach(el => {
      el.style.borderColor = '';
    });
  }
});

function closeModal() {
  document.getElementById('successModal').classList.remove('show');
}
