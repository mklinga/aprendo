/* @flow */

import type { Logger, RestangularType, Scope } from 'types/angular'
import type { Word } from 'types/word'
import type { ConjugationsType } from 'types/conjugations'

class EditWordController {

  logger: Logger;
  $scope: Scope;
  word: Word;
  conjugationValues: {};
  timeConjugations: {} | ConjugationsType;
  personConjugations: {} | ConjugationsType;

  constructor ($log: Logger, $scope: Scope, $stateParams: { id: number },
               Restangular: RestangularType, TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
    'ngInject'

    this.logger = $log
    this.$scope = $scope
    this.conjugationValues = {}
    this.timeConjugations = {}
    this.personConjugations = {}

    if (!$stateParams.id) {
      this.logger.error('No id found for word!')
      return
    }

    this.getAsyncData($stateParams.id, Restangular, TimeConjugations, PersonConjugations)
  }

  async getAsyncData (id: number, Restangular: RestangularType, TimeConjugations: ConjugationsType,
                     PersonConjugations: ConjugationsType) {
    await this.getConjugationNames(TimeConjugations, PersonConjugations)
    await this.getWord(id, Restangular)
  }

  async getConjugationNames (TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
    this.timeConjugations = await TimeConjugations.getLookupTable()
    this.personConjugations = await PersonConjugations.getLookupTable()
    this.$scope.$apply()
    this.logger.debug('retrieved', this.timeConjugations, this.personConjugations)
  }

  async getWord (id: number, Restangular: RestangularType) {
    this.word = await Restangular.all('words').get(id)
    this.logger.debug('Word', this.word, 'fetched')
    this.conjugationValues = this.word.conjugations
      .reduce((value, current) => {
        if (!value[current.time_conjugation_id]) {
          value[current.time_conjugation_id] = {}
        }

        value[current.time_conjugation_id][current.person_conjugation_id] = current
        return value
      }, {})

    this.logger.debug(this.conjugationValues)
    this.$scope.$apply()
  }
}

export default EditWordController
