import TesterModule from './tester'
import TesterController from './tester.controller'
import TesterComponent from './tester.component'
import TesterTemplate from './tester.html'

import questionWordFactory from 'factories/questionWord/questionWord.factory'

import { expect } from 'chai'

describe('Tester', () => {
  let makeController

  const TOTAL_ANSWERS = 10

  beforeEach(window.module(TesterModule.name))
  beforeEach(inject((_$rootScope_, _$log_) => {
    makeController = () => {
      const controller = new TesterController(_$log_, new questionWordFactory(_$log_))
      controller.finishTest = sinon.spy()
      return controller
    }
  }))

  describe('Controller', () => {
    let controller

    describe('props', () => {
      beforeEach(() => {
        controller = makeController()
      })

      it('has an array questionnaire', () => {
        expect(controller).to.have.property('questionnaire')
        expect(controller.questionnaire).to.be.an('array')
      })

      it('has index', () => {
        expect(controller).to.have.property('index')
      })

      it('has correctAnswers', () => {
        expect(controller).to.have.property('correctAnswers')
      })
    })

    describe('(Method) getResponse', () => {
      beforeEach(() => {
        controller = makeController()
      })

      it('Should be a function', () => {
        expect(controller.getResponse).to.be.a('function')
      })

      it('Should increment correctAnswers if isCorrect is true', () => {
        expect(controller.correctAnswers).to.equal(0)
        controller.getResponse(true)
        expect(controller.correctAnswers).to.equal(1)
      })

      it('Should NOT increment correctAnswers if isCorrect is false', () => {
        expect(controller.correctAnswers).to.equal(0)
        controller.getResponse(false)
        expect(controller.correctAnswers).to.equal(0)
      })

      it('Should increase index until the questionnaire.length is reached', () => {
        expect(controller.index).to.equal(0)
        for (let i = 1; i < (controller.questionnaire.length + 10); i++) {
          controller.getResponse(true)
          expect(controller.index).to.equal(Math.min(i, (controller.questionnaire.length - 1)))
        }
      })

      it('Should push wrong answers again into the questionnaire', () => {
        expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS)
        expect(controller.total).to.equal(TOTAL_ANSWERS)

        for (let i = 0; i < 5; i++) { controller.getResponse(false) }

        expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS + 5)
        expect(controller.total).to.equal(TOTAL_ANSWERS + 5)

        // right answers won't effect the length
        for (let i = 0; i < 5; i++) { controller.getResponse(true) }

        expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS + 5)
        expect(controller.total).to.equal(TOTAL_ANSWERS + 5)
      })

      it('Should call finishTest() after TOTAL_ANSWERS right answers', () => {
        expect(controller.finishTest.callCount).to.equal(0)
        for (let i = 1; i < (TOTAL_ANSWERS + 1); i++) {
          controller.getResponse(true)
        }
        expect(controller.finishTest.callCount).to.equal(1)
        expect(controller.finishTest.calledWith({ options: { result: '100%' } })).to.equal(true)
      })

      it('Should calculate the result based on the correct answers', () => {
        for (let i = 1; i < (TOTAL_ANSWERS*2 + 1); i++) {
          controller.getResponse(i % 2 === 0)
        }
        expect(controller.finishTest.calledWith({ options: { result: '50%' } })).to.equal(true)
      })
    })
  })

  describe('Template', () => {
    it('has classname "tester" in template', () => {
      expect(TesterTemplate).to.match(/class="tester"/g)
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
