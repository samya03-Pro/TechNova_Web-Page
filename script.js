// mobile menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  // scroll reveal — checks position on scroll so nothing stays stuck invisible
  const revealEls = document.querySelectorAll('.reveal');
  function checkReveal(){
    revealEls.forEach(el => {
      if (el.classList.contains('in')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        el.classList.add('in');
      }
    });
  }
  let revealTicking = false;
  function onScrollReveal(){
    if (!revealTicking) {
      window.requestAnimationFrame(() => {
        checkReveal();
        revealTicking = false;
      });
      revealTicking = true;
    }
  }
  window.addEventListener('scroll', onScrollReveal);
  window.addEventListener('resize', onScrollReveal);
  checkReveal(); // run once for anything already in view on load

  // back to top
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 500);
  });
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // contact form (demo — no backend)
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks! Your message has been noted — we'll be in touch soon.";
    formNote.style.color = 'var(--accent)';
    form.reset();
  });
