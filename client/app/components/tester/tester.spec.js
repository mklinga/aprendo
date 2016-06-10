import TesterModule from './tester'
import TesterController from './tester.controller'
import TesterComponent from './tester.component'
import TesterTemplate from './tester.html'

import questionWordFactory from 'factories/questionWord/questionWord.factory'

import { expect } from '../../../../node_modules/chai/chai'

describe('Tester', () => {
  let makeController

  beforeEach(window.module(TesterModule.name))
  beforeEach(inject((_$rootScope_, _$log_) => {
    makeController = () => {
      return new TesterController(_$log_, new questionWordFactory())
    }
  }))

  describe('Controller', () => {
    let controller

    beforeEach(() => {
      controller = makeController()
    })

    describe('questionnaire', () => {
      it('exists', () => {
        expect(controller).to.have.property('questionnaire')
      })

      it('has 10 items', () => {
        expect(controller.questionnaire).to.have.length(10)
      })
    })

    describe('index', () => {
      it('exists', () => {
        expect(controller).to.have.property('index')
      })
    })

    describe('correctAnswers', () => {
      it('exists', () => {
        expect(controller).to.have.property('correctAnswers')
      })
    })

  })

  describe('Template', () => {
    it('has name "Tester" in template', () => {
      expect(TesterTemplate).to.match(/Test/g)
    })
  })

  describe('Component', () => {
    let component = TesterComponent

    it('includes the intended template', () => {
      expect(component.template).to.equal(TesterTemplate)
    })

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs')
    })

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TesterController)
    })
  })
})
