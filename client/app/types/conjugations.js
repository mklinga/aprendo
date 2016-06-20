/* @flow */

export type ConjugationsType = {
  get: (id: number) => Promise,
  getLookupTable: () => Promise
}

