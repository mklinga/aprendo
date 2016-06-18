/* @flow */

import type { Logger } from 'types/angular'
import type { QuestionWordPair } from 'types/word'

class TestWordController {

  logger: Logger;
  word: QuestionWordPair;
  respond: ((params: { isCorrect: boolean }) => null);

  constructor ($log: Logger) {
    'ngInject'
    this.logger = $log
    this.logger.debug(this.word)
  }

  guess (answer: string) {
    this.logger.info('guessing ' + answer + ' (correct: ' + this.word.answer.conjugation.value + ')')
    this.respond({ isCorrect: (answer === this.word.answer.conjugation.value) })
  }
}

export default TestWordController
