/* @flow */

import type { Logger, RestangularType, RestangularWord } from 'types/angular'
import type { WordServiceType } from 'types/wordService'
import type { Word } from 'types/word'

const WordServiceFactory = function ($log: Logger, Restangular: RestangularType): WordServiceType {
  'ngInject'

  // this.serializeWord = (conjugations: Array<WordConjugation>): Word => {

  // }

  this.getSingleWord = async (id: number): Promise<Word> => {
    return await Restangular.one('words', id).get()
  }

  this.saveWord = async (word: Word) => {
    const newWord: RestangularWord = Restangular.copy(word)
    newWord.id = newWord.value.id
    $log.debug('Saving', word)
    newWord.save()
  }

  return {
    get: this.getSingleWord,
    save: this.saveWord
  }
}

export default WordServiceFactory
