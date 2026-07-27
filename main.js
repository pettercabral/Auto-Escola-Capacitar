// ================================================
// CFC CAPACITAR — Global JS
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Nav Toggle ──
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 7px)' : '';
      spans[1].style.opacity  = navLinks.classList.contains('open') ? '0' : '';
      spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -7px)' : '';
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  // ── Scroll Animation ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── FAQ Accordion ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Active Nav Link ──
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  // ── Sticky Header shadow ──
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 20 ? '0 4px 24px rgba(13,27,75,0.25)' : '';
    });
  }

});
