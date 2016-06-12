import WordQuestionModule from './wordQuestion'
import WordQuestionController from './wordQuestion.controller'
import WordQuestionComponent from './wordQuestion.component'
import WordQuestionTemplate from './wordQuestion.html'

import { expect } from 'chai'

describe('WordQuestion', () => {
  let $rootScope, makeController

  beforeEach(window.module(WordQuestionModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new WordQuestionController()
    }
  }))

  describe('Template', () => {
    it('has h3 that equals word.value', () => {
      expect(WordQuestionTemplate).to.match(/h3.*vm\.word\.value/g)
    })
  })

  describe('Component', () => {
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
