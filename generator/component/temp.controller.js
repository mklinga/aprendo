/* @flow */

import type { Logger } from 'types/angular'

class <%= upCaseName %>Controller {

  logger: Logger;

  constructor ($log: Logger) {
    'ngInject'

    this.logger = $log
  }
}

export default <%= upCaseName %>Controller
