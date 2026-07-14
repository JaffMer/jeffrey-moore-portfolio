const lb=document.createElement('div');
lb.className='lightbox';
lb.innerHTML='<button aria-label="Close">Close ×</button><img alt="Expanded artifact">';
document.body.appendChild(lb);
const lbImg=lb.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(img=>{img.addEventListener('click',()=>{lbImg.src=img.src;lb.classList.add('open')})});
lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.classList.remove('open')});
const revealItems=document.querySelectorAll('.card,.case-card,.artifact,.carousel-item,.snapshot div,.principle,.feature-card');
revealItems.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(Math.min(i%5,4)*40)+'ms'});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}})},{threshold:.10,rootMargin:'0px 0px -24px 0px'});
revealItems.forEach(el=>observer.observe(el));


// v9.0 click-only Portfolio dropdown
document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.nav-item.dropdown');

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector('.nav-drop-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!trigger || !menu) return;

    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const isOpen = dropdown.classList.contains('open');

      document.querySelectorAll('.nav-item.dropdown.open').forEach(function (openDropdown) {
        openDropdown.classList.remove('open');
        const openTrigger = openDropdown.querySelector('.nav-drop-trigger');
        if (openTrigger) openTrigger.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        dropdown.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });

    menu.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.nav-item.dropdown.open').forEach(function (dropdown) {
      dropdown.classList.remove('open');
      const trigger = dropdown.querySelector('.nav-drop-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.nav-item.dropdown.open').forEach(function (dropdown) {
        dropdown.classList.remove('open');
        const trigger = dropdown.querySelector('.nav-drop-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
});

// v9.7 responsive mobile navigation
(function () {
  function initializeMobileNavigation() {
    const menuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const siteNav = document.querySelector('.site-nav');

    if (!menuButton || !navLinks || !siteNav || menuButton.dataset.mobileReady === 'true') return;
    menuButton.dataset.mobileReady = 'true';

    function closeMobileMenu() {
      navLinks.classList.remove('mobile-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      menuButton.textContent = '☰';
      document.querySelectorAll('.nav-item.dropdown.open').forEach(function (dropdown) {
        dropdown.classList.remove('open');
        const trigger = dropdown.querySelector('.nav-drop-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }

    menuButton.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      const opening = !navLinks.classList.contains('mobile-open');
      if (opening) {
        navLinks.classList.add('mobile-open');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Close navigation menu');
        menuButton.textContent = '×';
      } else {
        closeMobileMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', function (event) {
      if (window.innerWidth <= 900 && navLinks.classList.contains('mobile-open') && !siteNav.contains(event.target)) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeMobileMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMobileNavigation);
  } else {
    initializeMobileNavigation();
  }
})();
