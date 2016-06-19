import ListWordsModule from './listWords'
import ListWordsController from './listWords.controller'
import ListWordsComponent from './listWords.component'
import ListWordsTemplate from './listWords.html'

import { expect } from 'chai'

describe('ListWords', () => {

  beforeEach(window.module(ListWordsModule.name))

  describe('(Controller) ListWordsController', () => {

    let $rootScope, controller, httpBackend

    beforeEach(window.module('restangular'))
    beforeEach(inject((_$rootScope_, _$httpBackend_, Restangular, _$log_) => {
      $rootScope = _$rootScope_
      httpBackend = _$httpBackend_
      controller = new ListWordsController(_$log_, _$rootScope_.$new(), Restangular)
    }))

    it('has a logger', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('logger')

    })

    it('Should fetch words from the backend', () => {
      httpBackend
        .expectGET('/words')
        .respond([{}, {}, {}])

      window.setTimeout(() => httpBackend.flush())

      return new Promise(resolve => {
        window.setTimeout(() => {
          expect(controller.words.length).to.equal(3)
          resolve()
        }, 500)
      })
    })

  })

  describe('(Template) ListWordsTemplate', () => {
    it('has <table> in template', () => {
      expect(ListWordsTemplate).to.match(/<table>/g)
    })
  })

  describe('(Component) ListWordsTemplate', () => {
      let component = ListWordsComponent

      it('includes the intended template',() => {
        expect(component.template).to.equal(ListWordsTemplate)
      })

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs')
      })

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ListWordsController)
      })
  })
})
