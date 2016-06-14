import WordAnswerController from './wordAnswer.controller'
import WordAnswerComponent from './wordAnswer.component'
import WordAnswerTemplate from './wordAnswer.html'

import { expect } from 'chai'

describe('(Component) WordAnswer', () => {
  let $rootScope, $log, makeController

  beforeEach(inject((_$rootScope_, _$log_) => {
    $rootScope = _$rootScope_
    $log = _$log_
    makeController = () => {
      return new WordAnswerController($log)
    }
  }))

  describe('(Controller) WordAnswerController', () => {
    let controller
    
    beforeEach(() => {
      controller = makeController()
      controller.guess = sinon.spy()
    })

    it('Should send a guess when keyPress recieves <Enter>', () => {
      expect(controller.guess.callCount).to.equal(0)

      controller.keyPress({ which: 27 })
      expect(controller.guess.callCount).to.equal(0)

      controller.keyPress({ which: 32 })
      expect(controller.guess.callCount).to.equal(0)

      controller.keyPress({ which: 13 })
      expect(controller.guess.callCount).to.equal(1)
    })

    it('Should clear out the answer on guess', () => {
      controller.answer = 'word'
      controller.keyPress({ which: 13 })
      expect(controller.answer).equal('')
    })

    it('Should send out the answer on guess', () => {
      controller.answer = 'word'
      controller.keyPress({ which: 13 })
      expect(controller.guess.calledWith({ answer: 'word' })).to.equal(true)
    })
  })

  describe('(Template) WordAnswerTemplate', () => {
    it('has an input in template', () => {
      expect(WordAnswerTemplate).to.match(/<input/g)
    })
  })

  describe('(Component) WordAnswerComponent', () => {
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
