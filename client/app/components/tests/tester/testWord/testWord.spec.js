import TestWordController from './testWord.controller'
import TestWordComponent from './testWord.component'
import TestWordTemplate from './testWord.html'

import { expect } from 'chai'

describe('TestWord', () => {
  let makeController

  beforeEach(inject((_$rootScope_, _$log_) => {
    makeController = () => {
      const controller = new TestWordController(_$log_)
      controller.respond = sinon.spy()
      return controller
    }
  }))

  describe('Controller', () => {
    let controller
    beforeEach(() => {
      controller = makeController()
      controller.word = {
        question: {
          word: { id: 2001, irregular: true, infinitive: "make", language_id: 2, type_id: 1 },
          conjugation: { id: 2002, word_id: 2001, person_conjugation_id: 3, time_conjugation_id: 1, value: "make" }
        },
        answer: {
          word: { id: 1001, irregular: true, infinitive: "hacer", language_id: 1, type_id: 1 },
          conjugation: { id: 1002, word_id: 1001, person_conjugation_id: 3, time_conjugation_id: 1, value: "hace" }
        }
      }
    })

    describe('(Method) guess()', () => {

      it('should have a guess() function', () => {
        expect(controller.guess).to.be.a('Function')
      })

      it('should call respond when guessing for an answer', () => {
        expect(controller.respond.callCount).to.equal(0)
        controller.guess('word')
        expect(controller.respond.callCount).to.equal(1)
      })

      it('should set the value of respond() based on whether the guess was right', () => {
        controller.guess('wrong answer')
        expect(controller.respond.getCall(0).calledWith({ isCorrect: false })).to.equal(true)
        controller.guess('hace')
        expect(controller.respond.getCall(1).calledWith({ isCorrect: true })).to.equal(true)
      })

    })
  })

  describe('Template', () => {
    it('has <word-answer>', () => {
      expect(TestWordTemplate).to.match(/word-answer/g)
    })
  })

  describe('Component', () => {
    let component = TestWordComponent

    it('includes the intended template', () => {
      expect(component.template).to.equal(TestWordTemplate)
    })

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs')
    })

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TestWordController)
    })

    it('has word as a binding', () => {
      expect(component.bindings).to.have.property('word')
    })
  })
})
