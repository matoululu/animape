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
      this.unregister(e.detail.element);
    });
  }

  init() {
    if (this.verbose) console.log('Animape: ', this)

    // Set up IntersectionObserver for each animape element
    this.animapeElements.forEach((el) => {
      if (el.classList.contains('animape')) return // Already initialized

      let marginDistance = `-${this.distance}px`

      if (el.classList.contains('animape-instant')) marginDistance = `0`;

      el.classList.add('animape')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (this.verbose) console.log('Animape triggered by: ', el)
              el.classList.add('animape-visible')
              observer.unobserve(el)
            }
          })
        },
        { rootMargin: marginDistance }
      )
      observer.observe(el)
    })
  }

  unregister(element) {
    if (this.verbose) console.log("Unregistering: ", element);
    if (!element.classList.contains('animape')) return; // Not initialized

    element.classList.remove('animape');
    element.classList.remove('animape-visible');
  }
}
