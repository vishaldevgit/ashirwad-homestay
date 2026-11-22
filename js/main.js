// ── Navbar: transparent on hero, solid on scroll ──
const navbar = document.getElementById('navbar');
const hero = document.getElementById('hero');

if (navbar && hero) {
  navbar.classList.add('navbar--hero');
  const handleScroll = () => {
    const scrolled = window.scrollY > 80;
    navbar.classList.toggle('scrolled', scrolled);
    navbar.classList.toggle('navbar--hero', !scrolled);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
} else if (navbar) {
  // If no hero, always solid
  navbar.classList.add('scrolled');
}

// ── Hero Slideshow ──
const heroSlides = document.querySelectorAll('.hero__slide');
if (heroSlides.length > 1) {
  let currentSlide = 0;
  const advanceSlide = () => {
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    const next = heroSlides[currentSlide];
    // Force Ken Burns to restart on each slide
    next.style.animation = 'none';
    next.offsetHeight; // trigger reflow
    next.style.animation = '';
    next.classList.add('active');
  };
  setInterval(advanceSlide, 7000); // 7s per slide
}

// ── Hero Parallax ──
const heroBgWrap = document.querySelector('.hero__bg-wrap');
if (heroBgWrap) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBgWrap.style.transform = `translateY(${y * 0.28}px)`;
  }, { passive: true });
}

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Mobile Drawer ──
const hamburger = document.querySelector('.hamburger');
const drawer = document.getElementById('mobileDrawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// ── Gallery filter ──
const filterBtns = document.querySelectorAll('[data-filter]');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.gallery-item').forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.display = show ? 'block' : 'none';
    });
  });
});

// ── Gallery Lightbox ──
const galleryItems = document.querySelectorAll('.gallery-item');
if (galleryItems.length > 0) {
  const lightbox = document.createElement('div');
  lightbox.style.position = 'fixed';
  lightbox.style.top = '0';
  lightbox.style.left = '0';
  lightbox.style.width = '100vw';
  lightbox.style.height = '100vh';
  lightbox.style.backgroundColor = 'rgba(0,0,0,0.9)';
  lightbox.style.display = 'none';
  lightbox.style.alignItems = 'center';
  lightbox.style.justifyContent = 'center';
  lightbox.style.zIndex = '1000';
  
  const lbImg = document.createElement('img');
  lbImg.style.maxWidth = '90%';
  lbImg.style.maxHeight = '90%';
  lbImg.style.objectFit = 'contain';
  lightbox.appendChild(lbImg);
  
  const lbClose = document.createElement('button');
  lbClose.innerHTML = '&times;';
  lbClose.style.position = 'absolute';
  lbClose.style.top = '20px';
  lbClose.style.right = '30px';
  lbClose.style.fontSize = '40px';
  lbClose.style.color = '#fff';
  lbClose.style.background = 'none';
  lbClose.style.border = 'none';
  lbClose.style.cursor = 'pointer';
  lightbox.appendChild(lbClose);
  
  document.body.appendChild(lightbox);
  
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      lbImg.src = img.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  
  lbClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  });
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
}
