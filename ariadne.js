// Ariadne — animazioni leggere vanilla JS
(function(){
  'use strict';
  // Fade-in progressivo con IntersectionObserver
  if('IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('ari-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.15, rootMargin: '0px 0px -80px 0px'});
    document.querySelectorAll('.ari-fade').forEach(el => observer.observe(el));
  } else {
    // Fallback: mostra subito
    document.querySelectorAll('.ari-fade').forEach(el => el.classList.add('ari-visible'));
  }
  // Parallax leggero con requestAnimationFrame
  const parallaxEls = document.querySelectorAll('.ari-parallax');
  if(parallaxEls.length > 0){
    let ticking = false;
    function updateParallax(){
      const scrolled = window.pageYOffset;
      parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const offset = rect.top + scrolled;
        const relativeScroll = scrolled - offset;
        if(rect.top < window.innerHeight && rect.bottom > 0){
          const translate = Math.max(-20, Math.min(20, relativeScroll * 0.05));
          el.style.transform = `translateY(${translate}px)`;
        }
      });
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if(!ticking){
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, {passive: true});
    updateParallax();
  }
})();
