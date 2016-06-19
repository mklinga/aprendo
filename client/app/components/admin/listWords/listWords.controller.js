/* @flow */

import type { WordValue } from 'types/word'
import type { Logger, Scope, RestangularType } from 'types/angular'

class ListWordsController {

  logger: Logger;
  words: Array<WordValue>;

  constructor ($log: Logger, $scope: Scope, Restangular: RestangularType) {
    'ngInject'

    this.logger = $log
    this.words = []

    this.fetchWords($scope, Restangular)
  }

  async fetchWords ($scope: Scope, Restangular: RestangularType) {
    this.words = await Restangular.all('/words').getList()
    $scope.$apply()
  }
}

export default ListWordsController
