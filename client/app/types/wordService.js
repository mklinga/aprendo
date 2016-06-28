/* @flow */

import type { Word } from 'types/word'

export type WordServiceType = {
  get: (id: number) => Promise<Word>,
  save: (word: Word) => Promise
}

