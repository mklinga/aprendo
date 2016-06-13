/* @flow */

import type { Logger } from 'types/angular'
import type { LastAnswer, QuestionWordPair } from 'types/word'

class TesterController {

  correctAnswers: number;
  total: number;
  index: number;
  lastAnswer: LastAnswer;
  logger: Logger;
  questionnaire: Array<QuestionWordPair>;

  constructor ($log: Object, QuestionWordFactory: Object) {
    'ngInject'

    this.logger = $log

    this.questionnaire = QuestionWordFactory.getQuestionnaire(10)

    this.index = 0
    this.correctAnswers = 0
    this.total = 10
  }

  getResponse (isCorrect: boolean) {
    this.lastAnswer = {
      success: isCorrect,
      value: this.questionnaire[this.index].answer.value
    }

    if (isCorrect) {
      this.correctAnswers++
    } else {
      this.questionnaire.push(this.questionnaire[this.index])
      this.total++
    }

    if (this.index < (this.questionnaire.length - 1)) {
      this.index++
    } else {
      alert('The end!')
    }
  }
}

export default TesterController
