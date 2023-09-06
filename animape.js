function animape(params = {}) {
  const selector = params.selector ? params.selector : '[data-animape]';
  const distance = params.distance ? params.distance : 50;
  const scrollElements = document.querySelectorAll(selector);

  scrollElements.forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('animape-visible');
          observer.unobserve(el);
        }
      });
    }, { rootMargin: `-${distance}px` });
    observer.observe(el);
  });
}

animape();
