import Module from '../app'
import Controller from './property-list.controller';
import Component from './property-list';
import Template from './property-list.html';

describe('Property List', () => {
  let $rootScope;

  beforeEach(window.module(Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
  }));

  describe('Controller', () => {
    it('It should append the item in saved properties list on Add property', () => {
      let controller = new Controller();
      let item = {
        price: '$826,500',
        agency: {
          brandingColors: {
            primary: '#57B5E0'
          },
          logo: 'http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif'
        },
        id: '3',
        mainImage: 'http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683;fc48fb8a8ef2999b14c027/main.jpg'
      };
      controller.addProperty(item);
      expect(controller.propertiesSaved).toContain(item);
    });

    it('It should remove the item from saved properties list on Remove Property', () => {
      let controller = new Controller();
      let item = controller.propertiesSaved[0];
      controller.removeProperty(0);
      expect(controller.propertiesSaved).not.toContain(item);
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
