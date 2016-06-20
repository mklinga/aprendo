/* @flow */

import type { Logger, RestangularType } from 'types/angular'
import type { ConjugationsType } from 'types/conjugations'

const TimeConjugationsFactory = function ($log: Logger, Restangular: RestangularType): ConjugationsType {
  'ngInject'

  this.cachedTimeConjugations = []

  this.returnCached = (id: number) => {
    return new Promise((resolve, reject) => {
      if (!this.cachedTimeConjugations[id]) {
        reject('No such timeconjugation found!')
      }

      this.$log.debug('Returning timeConjugation', id, this.cachedTimeConjugations[id])
      resolve(this.cachedTimeConjugations[id])
    })
  }

  return {
    get: async (id: number) => {
      if (!this.cachedTimeConjugations.length) {
        this.cachedTimeConjugations = await Restangular.all('timeconjugations').getList()
      }

      return this.returnCached(id)
    },
    getLookupTable: async () => {
      if (!this.cachedTimeConjugations.length) {
        this.cachedTimeConjugations = await Restangular.all('timeconjugations').getList()
      }

      return Promise.resolve(
        this.cachedTimeConjugations
          .reduce((lookupMap, value) => {
            lookupMap[value.id] = value
            return lookupMap
          }, {})
      )
    }
  }
}

export default TimeConjugationsFactory
