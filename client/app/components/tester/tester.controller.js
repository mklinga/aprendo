/* @flow */

import type { Logger } from 'types/angular'
import type { QuestionWordPair } from 'types/word'

class TesterController {

  correctAnswers: number;
  total: number;
  index: number;
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
    if (isCorrect) {
      this.correctAnswers++
    } else {
      this.questionnaire.push(this.questionnaire[this.index])
      this.total++
    }

    if (this.index < this.questionnaire.length) {
      this.index++
    } else {
      // show results etc.
    }
  }
}

export default TesterController
