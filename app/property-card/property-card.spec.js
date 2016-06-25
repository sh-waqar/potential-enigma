import Module from '../app'
import Controller from './property-card.controller';
import Component from './property-card';
import Template from './property-card.html';

describe('Property Card', () => {
  let $rootScope;

  beforeEach(window.module(Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Controller', () => {
    it('Action label should be Remove property for items in saved list', () => {
      let controller = new Controller();
      expect(controller.actionLabel).toBe('Remove Property');
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Component;

    it('should include the intended template', () => {
      expect(component.template).toBe(Template);
    });

    it('Should invoke the right controller', () => {
      expect(component.controller).toBe(Controller);
    });
  });
});
