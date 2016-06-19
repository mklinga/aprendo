/* @flow */

import type { Logger } from 'types/angular'

class AdminController {

  logger: Logger;

  constructor ($log: Logger) {
    'ngInject'

    this.logger = $log
  }
}

export default AdminController
