export default class Animape {
  constructor(params = {}) {
    this.selector = params.selector ? params.selector : '[data-animape]';
    this.distance = params.distance ? params.distance : 50;
    this.verbose = params.verbose ? params.verbose : false;
    this.animapeElements = document.querySelectorAll(this.selector);

    // Listen for DOM changes to re-init
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (this.verbose) console.log("Animape mutation: ", mutation);
        if (mutation.addedNodes.length) {
          this.animapeElements = document.querySelectorAll(this.selector);
          this.init();
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Listen for unregister events
    document.addEventListener('animape:unregister', e => {
      if (this.verbose) console.log("Animape unregistering: ", e.detail.elementsArray);
      this.unregisterElement(e.detail.elementsArray);
    });
  }

  init() {
    if (this.verbose) console.log("Animape: ", this);

    // Set up IntersectionObserver for each animape element
    this.animapeElements.forEach(el => {
      if (el.classList.contains('animape')) return; // Already initialized

      el.classList.add('animape');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (this.verbose) console.log("Animape triggered by: ", el);
            el.classList.add('animape-visible');
            observer.unobserve(el);
          }
        });
      }, { rootMargin: `-${this.distance}px` });
      observer.observe(el);
    });
  }

  unregisterElement(elements = []) {
    elements.forEach(el => {
      el.classList.remove('animape');
      el.classList.remove('animape-visible');

      const observer = this.getObserver(el);
      if (observer) observer.unobserve(el);

      this.animapeElements = Array.from(this.animapeElements).filter(item => item !== el);
    });
  }
}
