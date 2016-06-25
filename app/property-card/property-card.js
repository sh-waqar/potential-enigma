import controller from './property-card.controller';
import template from './property-card.html'

// Loading styles
require('./property-card.scss');

let propertyCard = {
  bindings: {
  	data: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default propertyCard;