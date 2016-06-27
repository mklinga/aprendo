/* @flow */

import type { Logger, Scope } from 'types/angular'
import type { Word } from 'types/word'
import type { ConjugationsType } from 'types/conjugations'
import type { WordServiceType } from 'types/wordService'

class EditWordController {

  logger: Logger;
  $scope: Scope;
  word: Word;
  conjugationValues: {};
  timeConjugations: {} | ConjugationsType;
  personConjugations: {} | ConjugationsType;

  constructor ($log: Logger, $scope: Scope, $stateParams: { id: number },
               WordService: WordServiceType, TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
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

    this.getAsyncData($stateParams.id, WordService, TimeConjugations, PersonConjugations)
  }

  saveWord () {

  }

  async getAsyncData (id: number, WordService, TimeConjugations: ConjugationsType,
                     PersonConjugations: ConjugationsType) {
    await this.getConjugationNames(TimeConjugations, PersonConjugations)
    await this.getWord(id, WordService)
  }

  async getConjugationNames (TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
    this.timeConjugations = await TimeConjugations.getLookupTable()
    this.personConjugations = await PersonConjugations.getLookupTable()
    this.$scope.$apply()
    this.logger.debug('retrieved', this.timeConjugations, this.personConjugations)
  }

  async getWord (id: number, WordService: WordServiceType) {
    const result = await WordService.get(id)
    this.word = result.word
    this.conjugationValues = result.conjugationValues

    this.$scope.$apply()
  }
}

export default EditWordController
