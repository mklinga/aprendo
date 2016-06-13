import SuccessViewerModule from './successViewer'
import SuccessViewerController from './successViewer.controller'
import SuccessViewerComponent from './successViewer.component'
import SuccessViewerTemplate from './successViewer.html'

import { expect } from 'chai'

describe('SuccessViewer', () => {
  let $rootScope, makeController

  beforeEach(window.module(SuccessViewerModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new SuccessViewerController()
    }
  }))

  describe('Controller', () => {
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController()
      expect(controller).to.have.property('name')
    })
  })

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(SuccessViewerTemplate).to.match(/{{\s?vm\.name\s?}}/g)
    })
  })

  describe('Component', () => {
      let component = SuccessViewerComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(SuccessViewerTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SuccessViewerController)
      })
  })
})