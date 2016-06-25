import controller from './property-card.controller';
import template from './property-card.html'

// Loading styles
require('./property-card.scss');

let propertyCard = {
  bindings: {
  	data: '<',
  	action: '&',
  	state: '@'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default propertyCard;