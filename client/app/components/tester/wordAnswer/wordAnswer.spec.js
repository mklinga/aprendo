import WordAnswerController from './wordAnswer.controller'
import WordAnswerComponent from './wordAnswer.component'
import WordAnswerTemplate from './wordAnswer.html'

import { expect } from 'chai'

describe('WordAnswer', () => {
  let $rootScope, $log, makeController

  beforeEach(inject((_$rootScope_, _$log_) => {
    $rootScope = _$rootScope_
    $log = _$log_
    makeController = () => {
      return new WordAnswerController($log)
    }
  }))

  describe('Controller', () => {

  })

  describe('Template', () => {
    it('has an input in template [REMOVE]', () => {
      expect(WordAnswerTemplate).to.match(/<input/g)
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

      it('has a word as a binding', () => {
      expect(component.bindings).to.have.property('word')
      })
  })
})
