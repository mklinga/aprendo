/* @flow */

import type { Logger, RestangularType } from 'types/angular'
import type { ConjugationsType } from 'types/conjugations'

const PersonConjugationsFactory = function ($log: Logger, Restangular: RestangularType): ConjugationsType {
  'ngInject'

  this.cachedPersonConjugations = []

  this.returnCached = (id: number) => {
    return new Promise((resolve, reject) => {
      if (!this.cachedPersonConjugations[id]) {
        reject('No such personconjugation found!')
      }

      this.$log.debug('Returning personConjugation', id, this.cachedPersonConjugations[id])
      resolve(this.cachedPersonConjugations[id])
    })
  }

  return {
    get: async (id: number) => {
      if (!this.cachedPersonConjugations.length) {
        this.cachedPersonConjugations = await Restangular.all('personconjugations').getList()
      }

      return this.returnCached(id)
    },
    getLookupTable: async () => {
      if (!this.cachedPersonConjugations.length) {
        this.cachedPersonConjugations = await Restangular.all('personconjugations').getList()
      }

      return Promise.resolve(
        this.cachedPersonConjugations
          .reduce((lookupMap, value) => {
            lookupMap[value.id] = value
            return lookupMap
          }, {})
      )
    }
  }
}

export default PersonConjugationsFactory
