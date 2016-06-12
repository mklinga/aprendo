/* @flow */

import type { Logger } from 'types/angular'

let logger

class TestWordController {

  constructor ($log: Logger) {
    'ngInject'
    logger = $log
  }

  guess (answer: string) {
    logger.info('guessing ' + answer)
  }
}

export default TestWordController
