/* @flow */

const TimeConjugationsFactory = ($log, Restangular) => {
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
    get: (id: number) => {
      if (!this.cachedTimeConjugations.length) {
        this.cachedTimeConjugations = [ { id: 1, time: 'present' }, { id: 2, time: 'imperfect' } ]
      }

      return this.returnCached(id)
    }
  }
}

export default TimeConjugationsFactory
