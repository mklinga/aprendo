import WordQuestionModule from './wordQuestion'
import WordQuestionController from './wordQuestion.controller'
import WordQuestionComponent from './wordQuestion.component'
import WordQuestionTemplate from './wordQuestion.html'

describe('WordQuestion', () => {
  let $rootScope, makeController

  beforeEach(window.module(WordQuestionModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new WordQuestionController()
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
      expect(WordQuestionTemplate).to.match(/{{\s?vm\.name\s?}}/g)
    })
  })

  describe('Component', () => {
      // component/directive specs
      let component = WordQuestionComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(WordQuestionTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WordQuestionController)
      })
  })
})
