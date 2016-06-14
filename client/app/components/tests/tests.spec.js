import TestsModule from './tests'
import TestsController from './tests.controller'
import TestsComponent from './tests.component'
import TestsTemplate from './tests.html'

import { expect } from 'chai'

describe('Tests', () => {
  let $rootScope, makeController

  beforeEach(window.module(TestsModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new TestsController()
    }
  }))

  describe('(Controller) TestsController', () => {
    it('has a property isTesting', () => { // erase if removing this.name from the controller
      let controller = makeController()
      expect(controller).to.have.property('isTesting')
    })
  })

  describe('(Component) TestsComponent', () => {
      let component = TestsComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestsTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestsController)
      })
  })
})
