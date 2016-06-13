/* @flow */

import type { Logger } from 'types/angular'

class TestsController {

  isTesting: boolean;
  logger: Logger;
  from: string;
  to: string;

  constructor ($log) {
    'ngInject'

    this.logger = $log
    this.from = 'en'
    this.to = 'es'

    this.isTesting = false
  }

  launchTest (options) {
    this.from = options.from || this.from
    this.to = options.to || this.to
    this.logger.debug('Launching test', options)
    this.isTesting = true
  }
}

export default TestsController
