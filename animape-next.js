class Animape {
  constructor(params = {}) {
    this.selector = params.selector ? params.selector : '[data-animape]';
    this.distance = params.distance ? params.distance : 50;
    this.verbose = params.verbose ? params.verbose : false;
    this.scrollElements = document.querySelectorAll(this.selector);
  }

  init() {
    if (this.verbose) console.log(this);

    this.scrollElements.forEach(el => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('animape-visible');
            observer.unobserve(el);
          }
        });
      }, { rootMargin: `-${this.distance}px` });
      observer.observe(el);
    });
  }
}
