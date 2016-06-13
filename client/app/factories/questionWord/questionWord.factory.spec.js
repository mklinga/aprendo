import QuestionWordFactory from 'factories/questionWord/questionWord.factory'

import { expect } from '../../../../node_modules/chai/chai'

describe('(Factory) QuestionWordFactory', () => {
  let questionWordFactory

  beforeEach(inject(_$log_) => {
    questionWordFactory = new QuestionWordFactory(_$log_)
  })

  it('Should return an object', () => {
    expect(questionWordFactory).to.be.an('object')
  })

  describe('(Method) getQuestionWord', () => {
    let word

    beforeEach(() => {
      word = questionWordFactory.getQuestionWord()
    })

    it('Should return an object with a question and an answer', () => {
      expect(word).to.be.an('object')
      expect(word).to.have.a.property('question')
      expect(word).to.have.a.property('answer')
    })

    it('Should return a question with proper fields', () => {
      expect(word.question).to.be.an('object')
      expect(word.question.id).to.exist
      expect(word.question.person).to.exist
      expect(word.question.tense).to.exist
      expect(word.question.value).to.exist
    })

    it('Should return a answer with proper fields', () => {
      expect(word.answer).to.be.an('object')
      expect(word.answer.id).to.exist
      expect(word.answer.person).to.exist
      expect(word.answer.tense).to.exist
      expect(word.answer.value).to.exist
    })

    it('Should return a question on a wanted language', () => {
      word = questionWordFactory.getQuestionWord('en', 'es')
      expect(word.question.language).to.equal('en')
      word = questionWordFactory.getQuestionWord('es', 'en')
      expect(word.question.language).to.equal('es')
    })

    it('Should select from the given set of words', () => {
      const WORDS = [
        { id: 9999, language: 'mock', value: { present: { '1st': 'tengo', '2nd': 'tienes' } }, relations: [ 8888 ] },
        { id: 8888, language: 'bock', value: { present: { '1st': 'have', '2nd': 'have' } }, relations: [ 9999 ] }
      ]

      word = questionWordFactory.getQuestionWord('mock', 'bock', WORDS)
      expect(word.question.language).to.equal('mock')

      word = questionWordFactory.getQuestionWord('bock', 'mock', WORDS)
      expect(word.question.language).to.equal('bock')
    })

  })

  describe('(Method) getQuestionnaire', () => {
    let words

    beforeEach(() => {
      words = questionWordFactory.getQuestionnaire()
    })

    it('Should be an array', () => {
      expect(words).to.be.an('array')
    })

    it('Should give a wanted amount of words', () => {
      words = questionWordFactory.getQuestionnaire(3)
      expect(words).to.have.a.lengthOf(3)

      words = questionWordFactory.getQuestionnaire(5)
      expect(words).to.have.a.lengthOf(5)
    })
  })


})
