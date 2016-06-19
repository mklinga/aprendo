import QuestionWordFactory from './questionWord.factory'
import constants from 'constants.js'

import { expect } from 'chai'
import 'restangular'

describe('(Factory) QuestionWordFactory', () => {
  let questionWordFactory, httpBackend

  beforeEach(window.module(constants.name))
  beforeEach(window.module('restangular'))
  beforeEach(inject((_$log_, LANGUAGES, Restangular, _$httpBackend_)=> {
    httpBackend = _$httpBackend_
    questionWordFactory = new QuestionWordFactory(_$log_, Restangular, LANGUAGES)
  }))

  it('Should return an object', () => {
    expect(questionWordFactory).to.be.an('object')
  })

  describe('(Method) getQuestionnaire', () => {
    let words

    it('Should be a promise', () => {
      words = questionWordFactory.getQuestionnaire()
      expect(words).to.be.an('promise')
    })

    it('Should resolve into an array of words', () => {
      httpBackend
        .expectGET('/questions/random/10')
        .respond([ {}, {} ])

      return new Promise((resolve, reject) => {
        words = questionWordFactory
          .getQuestionnaire(10)
          .then(data => {
            expect(data).to.have.a.lengthOf(2)
            resolve()
          })

        httpBackend.flush();
      })
    })
  })


})
