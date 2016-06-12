import TestWordModule from './testWord'
import TestWordController from './testWord.controller'
import TestWordComponent from './testWord.component'
import TestWordTemplate from './testWord.html'

import { expect } from 'chai'

describe('TestWord', () => {
  let makeController

  beforeEach(window.module(TestWordModule.name))
  beforeEach(inject((_$rootScope_, _$log_) => {
    makeController = () => {
      return new TestWordController(_$log_)
    }
  }))

  describe('Controller', () => {

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
