/* @flow */

import type { Logger } from 'types/angular'

class TestWordController {

  logger: Logger;

  constructor ($log: Logger) {
    'ngInject'
    this.logger = $log
    this.logger.info(this.word)
  }

  guess (answer: string) {
    this.logger.info('guessing ' + answer + ' (correct: ' + this.word.answer.value + ')')
    this.respond({ isCorrect: (answer === this.word.answer.value) })
  }
}

export default TestWordController
