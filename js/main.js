// ===== NAVBAR MOBILE =====
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

toggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== TABS =====
document.querySelectorAll('.tabs').forEach(tabGroup => {
  const btns = tabGroup.querySelectorAll('.tab-btn');
  const panelGroupId = tabGroup.dataset.target;
  const panels = document.querySelectorAll(`#${panelGroupId} .tab-panel`);

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels[i]?.classList.add('active');
    });
  });
});

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery-item[data-src]').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

document.getElementById('lightboxClose')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

function closeLightbox() {
  lightbox?.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== GALLERY COLLAPSE =====
document.querySelectorAll('.gallery-grid').forEach(grid => {
  const items = grid.querySelectorAll('.gallery-item');
  if (items.length <= 8) return;

  grid.classList.add('collapsed');

  const btn = document.createElement('button');
  btn.className = 'gallery-toggle-btn';
  btn.innerHTML = `Vedi tutte le foto <span>(${items.length})</span>`;
  grid.after(btn);

  btn.addEventListener('click', () => {
    const isCollapsed = grid.classList.toggle('collapsed');
    btn.innerHTML = isCollapsed
      ? `Vedi tutte le foto <span>(${items.length})</span>`
      : 'Mostra meno';
  });
});

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const msg = form.querySelector('[name="message"]').value;
  const subject = encodeURIComponent(`Contatto dal sito - ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${msg}`);
  window.location.href = `mailto:info@sciclimeerkat.it?subject=${subject}&body=${body}`;
});
