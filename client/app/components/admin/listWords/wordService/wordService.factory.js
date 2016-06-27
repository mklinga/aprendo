/* @flow */

import type { Logger, RestangularType } from 'types/angular'
import type { WordServiceType } from 'types/wordService'

const WordServiceFactory = function ($log: Logger, Restangular: RestangularType): WordServiceType {
  'ngInject'

  this.getWord = async (id: number) => {
    const word = await Restangular.all('words').get(id)
    $log.debug('Word', word, 'fetched')
    const conjugationValues = word.conjugations
      .reduce((value, current) => {
        if (!value[current.time_conjugation_id]) {
          value[current.time_conjugation_id] = {}
        }

        value[current.time_conjugation_id][current.person_conjugation_id] = current
        return value
      }, {})

    $log.debug(this.conjugationValues)
    return { word, conjugationValues }
  }

  return {
    get: this.getWord
  }
}

export default WordServiceFactory
