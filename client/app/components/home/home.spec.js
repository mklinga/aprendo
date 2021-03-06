import HomeModule from './home'
import HomeController from './home.controller'
import HomeComponent from './home.component'
import HomeTemplate from './home.html'

import { expect } from 'chai'

describe('Home', () => {
  let makeController

  beforeEach(window.module(HomeModule.name))
  beforeEach(inject((_$rootScope_) => {
    makeController = () => {
      return new HomeController()
    }
  }))

  describe('Template', () => {
  })

  describe('Component', () => {
      // component/directive specs
    let component = HomeComponent

    it('includes the intended template', () => {
      expect(component.template).to.equal(HomeTemplate)
    })

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs')
    })

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeController)
    })
  })
})
