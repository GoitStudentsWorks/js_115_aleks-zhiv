import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
new Accordion('.accordion-container', {
  openOnInit: [0],
  collapse: false,
  beforeOpen: currElement => {
    currElement.classList.add('open');
  },
  beforeClose: currElement => {
    currElement.classList.remove('open');
  },
});
