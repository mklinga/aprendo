import EditWordModule from './editWord'
import EditWordController from './editWord.controller'
import EditWordComponent from './editWord.component'
import EditWordTemplate from './editWord.html'

import { expect } from 'chai'

describe('EditWord', () => {
  let $rootScope, makeController

  beforeEach(window.module(EditWordModule.name))
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_
    makeController = () => {
      return new EditWordController()
    }
  }))

  describe('(Controller) EditWordController', () => {
    it('has a logger', () => {
      let controller = makeController()
      expect(controller).to.have.property('logger')
    })
  })

  describe('(Template) EditWordTemplate', () => {
    it('has name in template', () => {
      expect(EditWordTemplate).to.match(/<div class="editWord">/g)
    })
  })

  describe('(Component) EditWordTemplate', () => {
      let component = EditWordComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(EditWordTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(EditWordController)
      })
  })
})
