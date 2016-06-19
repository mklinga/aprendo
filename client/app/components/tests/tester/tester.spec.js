import TesterModule from './tester'
import TesterController from './tester.controller'
import TesterComponent from './tester.component'
import TesterTemplate from './tester.html'

import questionWordFactory from './factories/questionWord/questionWord.factory'
import constants from 'constants.js'

import { expect } from 'chai'
import 'restangular'

describe('Tester', () => {
  let makeController, httpBackend, scope

  const TOTAL_ANSWERS = 10

  beforeEach(window.module(TesterModule.name))
  beforeEach(window.module(constants.name))
  beforeEach(window.module('restangular'))

  describe('Controller', () => {
    let controller

    describe('props', () => {
      beforeEach(inject((_$rootScope_, _$log_, CONFIG, LANGUAGES, Restangular, _$httpBackend_) => {
        httpBackend = _$httpBackend_
        httpBackend
          .expectGET('/questions/random/10')
          .respond([{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":29,"word_id":7,"person_conjugation_id":5,"time_conjugation_id":1,"value":"habéis"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":47,"word_id":8,"person_conjugation_id":5,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":5,"word_id":1,"person_conjugation_id":5,"time_conjugation_id":1,"value":"tenéis"}},"answer":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":11,"word_id":2,"person_conjugation_id":5,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":26,"word_id":7,"person_conjugation_id":2,"time_conjugation_id":1,"value":"has"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":44,"word_id":8,"person_conjugation_id":2,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":4,"irregular":true,"infinitive":"to be (permanent)","language_id":2,"type_id":1},"conjugation":{"id":32,"word_id":4,"person_conjugation_id":2,"time_conjugation_id":1,"value":"are"}},"answer":{"word":{"id":3,"irregular":true,"infinitive":"ser","language_id":1,"type_id":1},"conjugation":{"id":14,"word_id":3,"person_conjugation_id":2,"time_conjugation_id":1,"value":"eres"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":30,"word_id":7,"person_conjugation_id":6,"time_conjugation_id":1,"value":"han"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":48,"word_id":8,"person_conjugation_id":6,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":5,"irregular":true,"infinitive":"estar","language_id":1,"type_id":1},"conjugation":{"id":23,"word_id":5,"person_conjugation_id":5,"time_conjugation_id":1,"value":"estáis"}},"answer":{"word":{"id":6,"irregular":true,"infinitive":"to be (state)","language_id":2,"type_id":1},"conjugation":{"id":41,"word_id":6,"person_conjugation_id":5,"time_conjugation_id":1,"value":"are"}}},{"question":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":7,"word_id":2,"person_conjugation_id":1,"time_conjugation_id":1,"value":"have"}},"answer":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":1,"word_id":1,"person_conjugation_id":1,"time_conjugation_id":1,"value":"tengo"}}},{"question":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":2,"word_id":1,"person_conjugation_id":2,"time_conjugation_id":1,"value":"tienes"}},"answer":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":8,"word_id":2,"person_conjugation_id":2,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":28,"word_id":7,"person_conjugation_id":4,"time_conjugation_id":1,"value":"hemos"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":46,"word_id":8,"person_conjugation_id":4,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":4,"irregular":true,"infinitive":"to be (permanent)","language_id":2,"type_id":1},"conjugation":{"id":36,"word_id":4,"person_conjugation_id":6,"time_conjugation_id":1,"value":"are"}},"answer":{"word":{"id":3,"irregular":true,"infinitive":"ser","language_id":1,"type_id":1},"conjugation":{"id":18,"word_id":3,"person_conjugation_id":6,"time_conjugation_id":1,"value":"son"}}}])

        makeController = () => {
          const fact = new questionWordFactory(_$log_, Restangular, LANGUAGES)
          const controller = new TesterController(_$log_, _$rootScope_.$new(), fact, CONFIG)
          controller.finishTest = sinon.spy()
          return controller
        }

        controller = makeController()
      }))

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

      beforeEach(inject((_$rootScope_, _$log_, LANGUAGES, Restangular, _$httpBackend_, CONFIG) => {
        scope = _$rootScope_.$new()
        httpBackend = _$httpBackend_

        const fact = new questionWordFactory(_$log_, Restangular, LANGUAGES)

        controller = new TesterController(_$log_, scope, fact, CONFIG)
        controller.finishTest = sinon.spy()
        httpBackend
          .expectGET('/questions/random/10')
          .respond([{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":29,"word_id":7,"person_conjugation_id":5,"time_conjugation_id":1,"value":"habéis"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":47,"word_id":8,"person_conjugation_id":5,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":5,"word_id":1,"person_conjugation_id":5,"time_conjugation_id":1,"value":"tenéis"}},"answer":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":11,"word_id":2,"person_conjugation_id":5,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":26,"word_id":7,"person_conjugation_id":2,"time_conjugation_id":1,"value":"has"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":44,"word_id":8,"person_conjugation_id":2,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":4,"irregular":true,"infinitive":"to be (permanent)","language_id":2,"type_id":1},"conjugation":{"id":32,"word_id":4,"person_conjugation_id":2,"time_conjugation_id":1,"value":"are"}},"answer":{"word":{"id":3,"irregular":true,"infinitive":"ser","language_id":1,"type_id":1},"conjugation":{"id":14,"word_id":3,"person_conjugation_id":2,"time_conjugation_id":1,"value":"eres"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":30,"word_id":7,"person_conjugation_id":6,"time_conjugation_id":1,"value":"han"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":48,"word_id":8,"person_conjugation_id":6,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":5,"irregular":true,"infinitive":"estar","language_id":1,"type_id":1},"conjugation":{"id":23,"word_id":5,"person_conjugation_id":5,"time_conjugation_id":1,"value":"estáis"}},"answer":{"word":{"id":6,"irregular":true,"infinitive":"to be (state)","language_id":2,"type_id":1},"conjugation":{"id":41,"word_id":6,"person_conjugation_id":5,"time_conjugation_id":1,"value":"are"}}},{"question":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":7,"word_id":2,"person_conjugation_id":1,"time_conjugation_id":1,"value":"have"}},"answer":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":1,"word_id":1,"person_conjugation_id":1,"time_conjugation_id":1,"value":"tengo"}}},{"question":{"word":{"id":1,"irregular":true,"infinitive":"tener","language_id":1,"type_id":1},"conjugation":{"id":2,"word_id":1,"person_conjugation_id":2,"time_conjugation_id":1,"value":"tienes"}},"answer":{"word":{"id":2,"irregular":false,"infinitive":"have","language_id":2,"type_id":1},"conjugation":{"id":8,"word_id":2,"person_conjugation_id":2,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugation":{"id":28,"word_id":7,"person_conjugation_id":4,"time_conjugation_id":1,"value":"hemos"}},"answer":{"word":{"id":8,"irregular":false,"infinitive":"to have (to do something)","language_id":2,"type_id":1},"conjugation":{"id":46,"word_id":8,"person_conjugation_id":4,"time_conjugation_id":1,"value":"have"}}},{"question":{"word":{"id":4,"irregular":true,"infinitive":"to be (permanent)","language_id":2,"type_id":1},"conjugation":{"id":36,"word_id":4,"person_conjugation_id":6,"time_conjugation_id":1,"value":"are"}},"answer":{"word":{"id":3,"irregular":true,"infinitive":"ser","language_id":1,"type_id":1},"conjugation":{"id":18,"word_id":3,"person_conjugation_id":6,"time_conjugation_id":1,"value":"son"}}}])

        httpBackend.flush()
      }))

      it('Should be a function', () => {
        expect(controller.getResponse).to.be.a('function')
      })

      it('Should increment correctAnswers if isCorrect is true', (done) => {
        expect(controller.correctAnswers).to.equal(0)

        window.setTimeout(() => {
          expect(controller.questionnaire.length).to.equal(10)
          controller.getResponse(true)
          expect(controller.correctAnswers).to.equal(1)
          done()
        }, 500)
      })

      it('Should NOT increment correctAnswers if isCorrect is false', (done) => {
        window.setTimeout(() => {
          expect(controller.correctAnswers).to.equal(0)
          controller.getResponse(false)
          expect(controller.correctAnswers).to.equal(0)
          done()
        },1)
      })

      it('Should increase index until the questionnaire.length is reached', (done) => {
        window.setTimeout(() => {
          expect(controller.index).to.equal(0)
          for (let i = 1; i < (controller.questionnaire.length + 10); i++) {
            controller.getResponse(true)
            expect(controller.index).to.equal(Math.min(i, (controller.questionnaire.length - 1)))
          }
          done()
        },1)
      })

      it('Should push wrong answers again into the questionnaire', (done) => {
        window.setTimeout(() => {
          expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS)
          expect(controller.total).to.equal(TOTAL_ANSWERS)

          for (let i = 0; i < 5; i++) { controller.getResponse(false) }

          expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS + 5)
          expect(controller.total).to.equal(TOTAL_ANSWERS + 5)

          // right answers won't effect the length
          for (let i = 0; i < 5; i++) { controller.getResponse(true) }

          expect(controller.questionnaire.length).to.equal(TOTAL_ANSWERS + 5)
          expect(controller.total).to.equal(TOTAL_ANSWERS + 5)
          done()
        }, 1)
      })

      it('Should call finishTest() after TOTAL_ANSWERS right answers', (done) => {
        window.setTimeout(() => {
          expect(controller.finishTest.callCount).to.equal(0)
          for (let i = 1; i < (TOTAL_ANSWERS + 1); i++) {
            controller.getResponse(true)
          }
          expect(controller.finishTest.callCount).to.equal(1)
          expect(controller.finishTest.calledWith({ options: { result: '100%' } })).to.equal(true)
          done()
        }, 1)
      })

      it('Should calculate the result based on the correct answers', (done) => {
        window.setTimeout(() => {
          for (let i = 1; i < (TOTAL_ANSWERS*2 + 1); i++) {
            controller.getResponse(i % 2 === 0)
          }
          expect(controller.finishTest.calledWith({ options: { result: '50%' } })).to.equal(true)
          done()
        }, 1)
      })
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
