/* @flow */

import type { Logger } from 'types/angular'
import type { LastAnswer, QuestionWordPair } from 'types/word'
import type { ConfigObject } from 'types/constants'

class TesterController {

  correctAnswers: number;
  finishTest: (params: { options: { result: string } }) => null;
  from: string;
  index: number;
  lastAnswer: LastAnswer;
  logger: Logger;
  questionnaire: Array<QuestionWordPair>;
  to: string;
  total: number;

  constructor ($log: Object, $scope: Object, QuestionWordFactory: Object, CONFIG: ConfigObject) {
    'ngInject'

    this.logger = $log

    this.logger.debug(this.from, this.to)
    this.questionnaire = []

    this.index = 0
    this.correctAnswers = 0
    this.total = 0

    QuestionWordFactory
      .getQuestionnaire(CONFIG.questionnaire.amountOfWords)
      .then(data => {
        this.questionnaire = data
        this.total = data.length
        $scope.$apply()
      })
  }

  getResponse (isCorrect: boolean) {
    this.lastAnswer = {
      success: isCorrect,
      value: this.questionnaire[this.index].answer.conjugation.value
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
      const result = (100 * (this.correctAnswers / this.total)) + '%'
      this.logger.debug('result: ' + result)
      this.finishTest({ options: { result } })
    }
  }
}

export default TesterController
