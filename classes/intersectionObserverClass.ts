class IntersectionObserverClass {
	elements: NodeListOf<Element>;
	observer: IntersectionObserver;
  
	constructor(elements: NodeListOf<Element>) {
	  this.elements = elements;
	  this.bindings();
	}
  
	bindings() {
	  this.createObserver();
	  this.elements.forEach((divider) => {
		this.observer.observe(divider);
	  });
	}
  
	createObserver() {
	  const options: IntersectionObserverInit = {
		root: null,
		rootMargin: "0px",
		threshold: null,
	  };
  
	  this.observer = new IntersectionObserver(this.handleIntersect, options);
	}
  
	handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
	  entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
		  entry.target.classList.add("is-visible");
		}
	  });
	}
  }
  
  export default IntersectionObserverClass;
  