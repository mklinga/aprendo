/* @flow */

import type { Logger } from 'types/angular'

type LaunchOptions = {
  from: string,
  to: string
}

type FinishOptions = {
  result: string
}

class TestsController {

  isTesting: boolean;
  logger: Logger;
  from: string;
  to: string;

  constructor ($log: Logger) {
    'ngInject'

    this.logger = $log

    this.isTesting = false
  }

  launchTest (options: LaunchOptions) {
    this.from = options.from || this.from
    this.to = options.to || this.to
    this.logger.debug('Launching test', options)
    this.isTesting = true
  }

  finishTest (options: FinishOptions) {
    this.logger.debug('Finishing test', options.result)
    this.isTesting = false
  }
}

export default TestsController
