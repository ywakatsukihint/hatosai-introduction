document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  const backToTop = document.querySelector('.back-to-top');
  const header = document.querySelector('header');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 300);
    }
    if (header) {
      header.classList.toggle('scrolled', scrollY > 50);
    }
  });
});
