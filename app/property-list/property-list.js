import controller from './property-list.controller';
import template from './property-list.html';

// Loading styles
import './property-list.scss';

let propertyList = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default propertyList;