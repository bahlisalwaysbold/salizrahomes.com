// =========================================================
// SALIZRA HOMES LIMITED — main.js
// Handles: project slideshow(s), project grid filtering,
// scroll-reveal animation, footer year, mobile nav close-on-click.
// =========================================================

/* ---------- Preloader ---------- */
/* Runs immediately (script is loaded at the end of <body>, right
   after the preloader markup) rather than waiting for
   DOMContentLoaded, so the shield starts animating as early as
   possible and hides itself once the page — and the animation —
   have both had a moment to breathe. */
(function () {
  var pre = document.getElementById('preloader');
  if (!pre) return;
  document.body.classList.add('preloading');
  var hidden = false;

  function hide() {
    if (hidden) return;
    hidden = true;
    pre.classList.add('is-hidden');
    document.body.classList.remove('preloading');
    setTimeout(function () {
      if (pre.parentNode) pre.parentNode.removeChild(pre);
    }, 700);
  }

  window.addEventListener('load', function () {
    setTimeout(hide, 400);
  });
  // Fallback in case some asset stalls — never trap a visitor behind the loader.
  setTimeout(hide, 2800);
})();

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Homepage background rotation ---------- */
  var heroBackground = document.querySelector('.hero-background');
  if (heroBackground) {
    var heroImages = [
      'images/background images for homepage/morning.jpg',
      'images/background images for homepage/dawn.jpg',
      'images/background images for homepage/fajr.jpg',
      'images/background images for homepage/sunset.jpg',
      'images/background images for homepage/night.jpg',
      'images/background images for homepage/631770653957857832.jpg'
    ];
    var heroIndex = 0;

    heroImages.forEach(function (src) {
      var image = new Image();
      image.src = src;
    });

    setInterval(function () {
      heroIndex = (heroIndex + 1) % heroImages.length;
      heroBackground.style.opacity = '0';
      setTimeout(function () {
        heroBackground.style.backgroundImage = "url('" + heroImages[heroIndex] + "')";
        heroBackground.style.opacity = '1';
      }, 800);
    }, 6000);
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Close mobile nav when a link is clicked ---------- */
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      var navLinks = document.querySelector('.nav-links');
      var toggle = document.querySelector('.nav-toggle');
      if (navLinks && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
      }
    });
  });

  /* ---------- Slideshow(s) — supports multiple per page ---------- */
  document.querySelectorAll('[data-slideshow]').forEach(function (root) {
    var track = root.querySelector('.slideshow-track');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.slide'));
    var dotsWrap = root.querySelector('[data-dots]');
    var prevBtn = root.querySelector('[data-prev]');
    var nextBtn = root.querySelector('[data-next]');
    var current = 0;
    var autoplayTimer = null;
    var AUTOPLAY_MS = 6000;

    if (!track || slides.length === 0) return;

    // Build dots
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to project ' + (i + 1));
      dot.addEventListener('click', function () {
        goTo(i);
        resetAutoplay();
      });
      dotsWrap.appendChild(dot);
    });

    function update() {
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      var dots = dotsWrap.querySelectorAll('.dot');
      dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
    }

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      update();
    }

    function next() { goTo(current + 1); }
    function prevSlide() { goTo(current - 1); }

    if (nextBtn) nextBtn.addEventListener('click', function () { next(); resetAutoplay(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prevSlide(); resetAutoplay(); });

    function startAutoplay() {
      autoplayTimer = setInterval(next, AUTOPLAY_MS);
    }
    function resetAutoplay() {
      clearInterval(autoplayTimer);
      startAutoplay();
    }

    // Pause on hover
    root.addEventListener('mouseenter', function () { clearInterval(autoplayTimer); });
    root.addEventListener('mouseleave', startAutoplay);

    // Basic touch swipe support
    var touchStartX = 0;
    track.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next(); else prevSlide();
        resetAutoplay();
      }
    }, { passive: true });

    update();
    startAutoplay();
  });

  /* ---------- Project grid filter (Projects page) ---------- */
  var filterTabs = document.querySelectorAll('.filter-tab');
  if (filterTabs.length) {
    var cards = document.querySelectorAll('.project-card, .project-card-v2');
    filterTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        filterTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var filter = tab.getAttribute('data-filter');
        cards.forEach(function (card) {
          var status = card.getAttribute('data-status');
          var show = (filter === 'all' || filter === status);
          card.classList.toggle('hidden', !show);
        });
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Progress bar fill-in (Projects page spotlight) ---------- */
  var progressBars = document.querySelectorAll('.progress-bar');
  if ('IntersectionObserver' in window && progressBars.length) {
    var progressObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    progressBars.forEach(function (el) { progressObserver.observe(el); });
  } else {
    progressBars.forEach(function (el) { el.classList.add('in-view'); });
  }

});
