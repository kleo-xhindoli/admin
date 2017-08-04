import InfoCardsCreateModule from './infoCardsCreate'
import InfoCardsCreateController from './infoCardsCreate.controller';
import InfoCardsCreateComponent from './infoCardsCreate.component';
import InfoCardsCreateTemplate from './infoCardsCreate.html';

describe('InfoCardsCreate', () => {
  let $rootScope, makeController;

  beforeEach(window.module(InfoCardsCreateModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new InfoCardsCreateController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(InfoCardsCreateTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = InfoCardsCreateComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(InfoCardsCreateTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(InfoCardsCreateController);
      });
  });
});
