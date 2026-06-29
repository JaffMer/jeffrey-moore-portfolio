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
