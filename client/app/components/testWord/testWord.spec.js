import TestWordModule from './testWord'
import TestWordController from './testWord.controller'
import TestWordComponent from './testWord.component'
import TestWordTemplate from './testWord.html'

import { expect } from 'chai'

describe('TestWord', () => {
  let makeController

  beforeEach(window.module(TestWordModule.name))
  beforeEach(inject((_$rootScope_) => {
    makeController = () => {
      return new TestWordController()
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
      expect(TestWordTemplate).to.match(/{{\s?vm\.name\s?}}/g)
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
