import AdminModule from './admin'
import AdminController from './admin.controller'
import AdminComponent from './admin.component'
import AdminTemplate from './admin.html'

import { expect } from 'chai'

describe('Admin', () => {
  let $rootScope, makeController

  beforeEach(window.module(AdminModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new AdminController()
    }
  }))

  describe('(Controller) AdminController', () => {
    it('has a logger', () => { // erase if removing this.name from the controller
      let controller = makeController()
      expect(controller).to.have.property('logger')
    })
  })

  describe('(Template) AdminTemplate', () => {

  })

  describe('(Component) AdminTemplate', () => {
      let component = AdminComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(AdminTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AdminController)
      })
  })
})
