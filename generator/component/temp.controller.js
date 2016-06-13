/* @flow */

import type { Logger } from 'types/angular'

class <%= upCaseName %>Controller {

  logger: Logger;

  constructor ($log) {
    'ngInject'

    this.logger = $log
  }
}

export default <%= upCaseName %>Controller
