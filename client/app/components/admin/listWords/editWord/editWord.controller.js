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
  WordService: WordServiceType;

  constructor ($log: Logger, $scope: Scope, $stateParams: { id: number },
               WordService: WordServiceType, TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
    'ngInject'

    this.logger = $log
    this.$scope = $scope
    this.conjugationValues = {}
    this.timeConjugations = {}
    this.personConjugations = {}

    this.WordService = WordService

    if (!$stateParams.id) {
      this.logger.error('No id found for word!')
      return
    }

    this.getAsyncData($stateParams.id, TimeConjugations, PersonConjugations)
  }

  saveWord () {
    this.WordService.save(this.word)
  }

  async getAsyncData (id: number, TimeConjugations: ConjugationsType,
                     PersonConjugations: ConjugationsType) {
    await this.getConjugationNames(TimeConjugations, PersonConjugations)
    await this.getWord(id)
  }

  async getConjugationNames (TimeConjugations: ConjugationsType, PersonConjugations: ConjugationsType) {
    this.timeConjugations = await TimeConjugations.getLookupTable()
    this.personConjugations = await PersonConjugations.getLookupTable()
    this.$scope.$apply()
    this.logger.debug('retrieved', this.timeConjugations, this.personConjugations)
  }

  async getWord (id: number) {
    const result = await this.WordService.get(id)

    const conjugationMatch = (time, person) => conjugation =>
          conjugation.time_conjugation_id === Number(time) && conjugation.person_conjugation_id === Number(person)

    // If the word doesn't contain all the necessary fields, we add them as empty
    for (let t in this.timeConjugations) {
      for (let p in this.personConjugations) {
        if (!result.conjugations.find(conjugationMatch(t, p))) {
          this.logger.debug('Missing conjugation', t, p)
          result.conjugations.push({
            word_id: result.value.id,
            person_conjugation_id: Number(p),
            time_conjugation_id: Number(t),
            value: ''
          })
        }
      }
    }
    const conjugationValues = result.conjugations
      .reduce((value, current) => {
        if (!value[current.time_conjugation_id]) {
          value[current.time_conjugation_id] = {}
        }

        value[current.time_conjugation_id][current.person_conjugation_id] = current
        return value
      }, {})

    this.word = result
    this.conjugationValues = conjugationValues

    this.$scope.$apply()
  }
}

export default EditWordController
