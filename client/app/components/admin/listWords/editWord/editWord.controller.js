/* @flow */

import type { Logger } from 'types/angular'
import type { Word } from 'types/word'

class EditWordController {

  logger: Logger;
  word: Word;

  constructor ($log: Logger, $scope, $stateParams, Restangular) {
    'ngInject'

    this.logger = $log
    this.$scope = $scope

    if (!$stateParams.id) {
      this.logger.error('No id found for word!')
      return
    }

    this.getWord($stateParams.id, Restangular)
  }

  async getWord (id: number, Restangular) {
    this.word = await Restangular.all('words').get(id)
    this.logger.debug('Word', id, 'fetched')
    this.$scope.$apply()
  }
}

export default EditWordController
