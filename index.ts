import IntersectionObserverClass from './classes/IntersectionObserverClass';


// Intersection observer for animated observedItem lines
const observedItems = document.querySelectorAll('.observedItem');
if (observedItems) {
  new IntersectionObserverClass(observedItems);
}
