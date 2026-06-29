function toggleFaq(item) {
  const isOpen = item.classList.contains('is-open');
  document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
  if (!isOpen) item.classList.add('is-open');
}
