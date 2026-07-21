(function () {
  'use strict';

  var header = document.getElementById('site-header');
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');
  var yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Pause the hero video when the tab is hidden to save resources on mobile.
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        heroVideo.pause();
      } else {
        heroVideo.play().catch(function () {});
      }
    });
  }
})();
