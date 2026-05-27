/* ============================================================
   Nexura main.js — Animations, Interactions, UI
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Page Loader ── */
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 600);
    });
    /* Fallback */
    setTimeout(() => loader.classList.add('hidden'), 2000);
  }

  /* ── Custom Cursor ── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    const animateCursor = () => {
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(animateCursor);
    };
    animateCursor();
    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });
    document.addEventListener('mouseleave', () => {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity  = '1';
      ring.style.opacity = '0.5';
    });
  }

  /* ── Sticky Header ── */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile Menu ── */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav  = document.querySelector('.mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Active Nav Link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Scroll Reveal (IntersectionObserver) ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ── Stagger Reveal ── */
  const staggerEls = document.querySelectorAll('.reveal-stagger');
  if (staggerEls.length) {
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    staggerEls.forEach(el => staggerObserver.observe(el));
  }

  /* ── Counter Animation ── */
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length) {
    const ease = t => t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;
    const animateCount = (el, end, duration = 1600) => {
      const start = performance.now();
      const suffix = el.querySelector('.suffix')?.textContent || '';
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const val = Math.floor(ease(progress) * end);
        const span = el.querySelector('.suffix');
        if (span) {
          el.childNodes[0].textContent = val;
        } else {
          el.textContent = val + '+';
        }
        if (progress < 1) requestAnimationFrame(update);
        else {
          if (span) el.childNodes[0].textContent = end;
          else el.textContent = end + '+';
        }
      };
      requestAnimationFrame(update);
    };
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el  = entry.target;
          const end = parseInt(el.dataset.count, 10);
          animateCount(el, end);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  /* ── 3D Card Tilt ── */
  document.querySelectorAll('[data-tilt]').forEach(card => {
    const strength = parseFloat(card.dataset.tiltStrength) || 8;
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ── Hero Parallax (shapes) ── */
  const heroShapes = document.querySelectorAll('.hero-shape');
  const heroOrbs   = document.querySelectorAll('.hero-orb');
  if (heroShapes.length || heroOrbs.length) {
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      heroShapes.forEach((el, i) => {
        const speed = 0.03 + i * 0.015;
        el.style.transform = `translateY(${sy * speed}px)`;
      });
      heroOrbs.forEach((el, i) => {
        const speed = 0.05 + i * 0.02;
        el.style.transform = `translateY(${sy * speed}px)`;
      });
    }, { passive: true });
  }

  /* ── Portfolio Filter ── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  if (filterBtns.length && portfolioItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
          const cats = item.dataset.cats || '';
          const show = filter === 'all' || cats.includes(filter);
          if (show) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Contact Form ── */
  const contactForm = document.querySelector('#contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit-btn');
      const msg = contactForm.querySelector('.form-message');
      const data = new FormData(contactForm);

      /* Basic validation */
      let valid = true;
      contactForm.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#dc2626';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) return;

      btn.disabled = true;
      btn.style.opacity = '0.7';

      /* Simulate submission (replace with real endpoint) */
      await new Promise(r => setTimeout(r, 1200));

      if (msg) {
        const lang = typeof I18n !== 'undefined' ? I18n.getCurrent() : 'uz';
        const successMsg = {
          uz: 'Rahmat! Xabaringiz yuborildi. Tez orada bog\'lanamiz.',
          ru: 'Спасибо! Ваше сообщение отправлено. Свяжемся с вами в ближайшее время.',
          en: 'Thank you! Your message has been sent. We\'ll get back to you shortly.'
        };
        msg.textContent = successMsg[lang] || successMsg.uz;
        msg.className = 'form-message success';
        contactForm.reset();
      }

      btn.disabled = false;
      btn.style.opacity = '';
    });

    /* Clear error state on input */
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => { field.style.borderColor = ''; });
    });
  }

  /* ── Typewriter Effect (Hero) ── */
  const typeEl = document.querySelector('[data-typewriter]');
  if (typeEl) {
    const words = typeEl.dataset.typewriter.split('|');
    let wi = 0, ci = 0, deleting = false;
    const type = () => {
      const word = words[wi];
      if (!deleting) {
        typeEl.textContent = word.slice(0, ++ci);
        if (ci === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        typeEl.textContent = word.slice(0, --ci);
        if (ci === 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
        }
      }
      setTimeout(type, deleting ? 60 : 100);
    };
    type();
  }

  /* ── Navbar light/dark toggle for light page sections ── */
  const lightSections = document.querySelectorAll('.section--light, .section--light-2');
  if (lightSections.length && header) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) header.classList.add('scrolled--light');
        else header.classList.remove('scrolled--light');
      });
    }, { threshold: 0.3 });
    lightSections.forEach(s => navObserver.observe(s));
  }

});
