/* @flow */

export type TimeConjugationsType = {
  get: (id: number) => Promise,
  getLookupTable: () => Promise
}

