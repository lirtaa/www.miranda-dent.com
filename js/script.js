// Scroll reveal
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: .15 });
els.forEach(el => io.observe(el));

// Price list tabs
const plTabs = document.querySelectorAll('.pricelist-tabs button');
const plPanels = document.querySelectorAll('.pricelist-panel');
plTabs.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');
    plTabs.forEach(b => b.classList.toggle('active', b === btn));
    plPanels.forEach(p => p.classList.toggle('active', p.getAttribute('data-panel') === target));
  });
});

// Mobile menu toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.cssText = open
    ? ''
    : 'display:flex;flex-direction:column;position:absolute;top:82px;left:0;right:0;background:#fff;padding:24px 32px;gap:20px;border-bottom:1px solid #DCE1E8;';
});
