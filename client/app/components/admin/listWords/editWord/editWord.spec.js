import EditWordModule from './editWord'
import EditWordController from './editWord.controller'
import EditWordComponent from './editWord.component'
import EditWordTemplate from './editWord.html'

import TimeConjugations from 'common/timeConjugations/timeConjugations.factory'

import { expect } from 'chai'

describe('EditWord', () => {
  let $rootScope, makeController, httpBackend

  beforeEach(window.module(EditWordModule.name))
  beforeEach(window.module('restangular'))
  beforeEach(inject((_$rootScope_, _$httpBackend_, _$log_, Restangular) => {
    $rootScope = _$rootScope_
    httpBackend = _$httpBackend_

    makeController = () => {
      const TC = new TimeConjugations(_$log_, Restangular)
      return new EditWordController(_$log_, $rootScope.$new(), { id: 1 }, Restangular, TC)
    }
  }))

  describe('(Controller) EditWordController', () => {
    it('has a logger', () => {
      let controller = makeController()

      httpBackend.expectGET('/words/1').respond({"value":{"id":7,"irregular":true,"infinitive":"haber","language_id":1,"type_id":1},"conjugations":[{"id":25,"word_id":7,"person_conjugation_id":1,"time_conjugation_id":1,"value":"he"},{"id":26,"word_id":7,"person_conjugation_id":2,"time_conjugation_id":1,"value":"has"},{"id":27,"word_id":7,"person_conjugation_id":3,"time_conjugation_id":1,"value":"ha"},{"id":28,"word_id":7,"person_conjugation_id":4,"time_conjugation_id":1,"value":"hemos"},{"id":29,"word_id":7,"person_conjugation_id":5,"time_conjugation_id":1,"value":"habéis"},{"id":30,"word_id":7,"person_conjugation_id":6,"time_conjugation_id":1,"value":"han"}]})
      httpBackend.expectGET('/timeconjugations').respond([{ id: 1, time: 'preesens' } ])

      httpBackend.flush()
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
