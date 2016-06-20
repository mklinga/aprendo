import <%= upCaseName %>Module from './<%= name %>'
import <%= upCaseName %>Controller from './<%= name %>.controller'
import <%= upCaseName %>Component from './<%= name %>.component'
import <%= upCaseName %>Template from './<%= name %>.html'

import { expect } from 'chai'

describe('<%= upCaseName %>', () => {
  let $rootScope, makeController

  beforeEach(window.module(<%= upCaseName %>Module.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new <%= upCaseName %>Controller()
    }
  }))

  describe('(Controller) <%= upCaseName %>Controller', () => {
    it('has a logger', () => {
      let controller = makeController()
      expect(controller).to.have.property('logger')
    })
  })

  describe('(Template) <%= upCaseName %>Template', () => {
    it('is a div with the name as class', () => {
      expect(<%= upCaseName %>Template).to.match(/<div class="<%= name %>">/g)
    })
  })

  describe('(Component) <%= upCaseName %>Template', () => {
      let component = <%= upCaseName %>Component

      it('includes the intended template',() => {
        expect(component.template).to.equal(<%= upCaseName %>Template)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(<%= upCaseName %>Controller)
      })
  })
})
