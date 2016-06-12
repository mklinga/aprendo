import WordAnswerModule from './wordAnswer'
import WordAnswerController from './wordAnswer.controller'
import WordAnswerComponent from './wordAnswer.component'
import WordAnswerTemplate from './wordAnswer.html'

describe('WordAnswer', () => {
  let $rootScope, makeController

  beforeEach(window.module(WordAnswerModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new WordAnswerController()
    }
  }))

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  })

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController()
      expect(controller).to.have.property('name')
    })
  })

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WordAnswerTemplate).to.match(/{{\s?vm\.name\s?}}/g)
    })
  })

  describe('Component', () => {
      // component/directive specs
      let component = WordAnswerComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(WordAnswerTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WordAnswerController)
      })
  })
})
