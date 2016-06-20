/* @flow */

import type { Logger, RestangularType, Scope } from 'types/angular'
import type { Word } from 'types/word'
import type { TimeConjugationsType } from 'types/timeconjugations'

class EditWordController {

  logger: Logger;
  $scope: Scope;
  word: Word;
  timeConjugations: {} | TimeConjugationsType;

  constructor ($log: Logger, $scope: Scope, $stateParams: { id: number },
               Restangular: RestangularType, TimeConjugations: TimeConjugationsType) {
    'ngInject'

    this.logger = $log
    this.$scope = $scope
    this.timeConjugations = {}

    if (!$stateParams.id) {
      this.logger.error('No id found for word!')
      return
    }

    this.getWord($stateParams.id, Restangular)
    this.getConjugationNames(TimeConjugations)
  }

  async getConjugationNames (TimeConjugations: TimeConjugationsType) {
    this.timeConjugations = await TimeConjugations.getLookupTable()
    this.$scope.$apply()
    this.logger.debug('retrieved', this.timeConjugations)
  }

  async getWord (id: number, Restangular: RestangularType) {
    this.word = await Restangular.all('words').get(id)
    this.logger.debug('Word', id, 'fetched')
    this.$scope.$apply()
  }
}

export default EditWordController
