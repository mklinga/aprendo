import SuccessViewerController from './successViewer.controller'
import SuccessViewerComponent from './successViewer.component'
import SuccessViewerTemplate from './successViewer.html'

import { expect } from 'chai'

describe('SuccessViewer', () => {
  let $rootScope, makeController

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new SuccessViewerController()
    }
  }))

  describe('Template', () => {
    it('has amount of correct answers in the template', () => {
      expect(SuccessViewerTemplate).to.match(/{{\s?vm\.correctAnswers\s?}}/g)
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
