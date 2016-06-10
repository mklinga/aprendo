import TesterModule from './tester'
import TesterController from './tester.controller'
import TesterComponent from './tester.component'
import TesterTemplate from './tester.html'

import { expect } from '../../../../node_modules/chai/chai'

describe('Tester', () => {
  let makeController

  beforeEach(window.module(TesterModule.name))
  beforeEach(inject((_$rootScope_) => {
    makeController = () => {
      return new TesterController()
    }
  }))

  describe('Controller', () => {
    // controller specs
    it('has a property "words"', () => { // erase if removing this.name from the controller
      let controller = makeController()
      expect(controller).to.have.property('words')
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
