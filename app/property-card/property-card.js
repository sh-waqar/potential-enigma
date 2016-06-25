import controller from './property-card.controller';
import template from './property-card.html'

let propertyCard = {
  bindings: {
  	data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default propertyCard;