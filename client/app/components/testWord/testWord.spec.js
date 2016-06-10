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

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  })

  describe('Controller', () => {
  })

  describe('Template', () => {
    it('has <h1>', () => {
      expect(TestWordTemplate).to.match(/h1/g)
    })
  })

  describe('Component', () => {
    // component/directive specs
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
  })
})
