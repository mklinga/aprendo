import TestSelectorModule from './testSelector'
import TestSelectorController from './testSelector.controller'
import TestSelectorComponent from './testSelector.component'
import TestSelectorTemplate from './testSelector.html'

import { expect } from 'chai'

describe('TestSelector', () => {
  let $rootScope, makeController

  beforeEach(window.module(TestSelectorModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new TestSelectorController()
    }
  }))

  describe('Component', () => {
      let component = TestSelectorComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestSelectorTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestSelectorController)
      })
  })
})
