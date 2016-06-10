import QuestionWordFactory from 'factories/questionWord/questionWord.factory'

import { expect } from '../../../../node_modules/chai/chai'

describe('(Factory) QuestionWordFactory', () => {
  let questionWordFactory

  beforeEach(() => {
    questionWordFactory = new QuestionWordFactory()
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

    it('Should return a question that is different than answer', () => {
      expect(word.answer).to.not.deep.equal(word.question)
    })
  })

  describe('(Method) getQuestionnaire', () => {
    let words

    beforeEach(() => {
      words = questionWordFactory.getQuestionnaire()
    })

    it('Should exist', () => {
      expect(words).to.exist
    })

    it('Should have n amount of words', () => {
      words = questionWordFactory.getQuestionnaire(3)
      expect(words).to.have.a.lengthOf(3)
    })
  })


})
