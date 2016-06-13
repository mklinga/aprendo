/* @flow */

import type { Logger } from 'types/angular'

class TestSelectorController {

  logger: Logger;

  constructor ($log) {
    'ngInject'

    this.logger = $log
  }
}

export default TestSelectorController
