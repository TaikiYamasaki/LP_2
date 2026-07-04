function toggleFaq(item) {
  const isOpen = item.classList.contains('is-open');
  document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
  if (!isOpen) item.classList.add('is-open');
}

function toggleNav() {
  const nav = document.querySelector('.site-nav');
  const btn = document.querySelector('.hamburger');
  nav.classList.toggle('is-open');
  btn.classList.toggle('is-open');
}

function closeNav() {
  document.querySelector('.site-nav').classList.remove('is-open');
  document.querySelector('.hamburger').classList.remove('is-open');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.site-nav .nav-link').forEach(link => {
    link.addEventListener('click', closeNav);
  });
});
