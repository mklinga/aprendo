/* @flow */

import type { QuestionWordPair } from 'types/word'

class TesterController {

  correctAnswers: number;
  index: number;
  questionnaire: Array<QuestionWordPair>;

  constructor ($log: Object, QuestionWordFactory: Object) {
    'ngInject'

    this.questionnaire = QuestionWordFactory.getQuestionnaire(10)

    this.index = 0
    this.correctAnswers = 0
  }
}

export default TesterController
