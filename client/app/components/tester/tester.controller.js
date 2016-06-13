/* @flow */

import type { Logger } from 'types/angular'
import type { QuestionWordPair } from 'types/word'

class TesterController {

  correctAnswers: number;
  index: number;
  logger: Logger;
  questionnaire: Array<QuestionWordPair>;

  constructor ($log: Object, QuestionWordFactory: Object) {
    'ngInject'

    this.logger = $log

    this.questionnaire = QuestionWordFactory.getQuestionnaire(10)

    this.index = 0
    this.correctAnswers = 0
  }

  getResponse (isCorrect: boolean) {
    this.logger.info(isCorrect)
    if (this.index !== this.questionnaire.length) {
      this.index++
    } else {
      // end game, show misses
    }
  }
}

export default TesterController
