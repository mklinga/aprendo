// @flow

import type { QuestionWord, QuestionWordPair } from 'types/word.js'
import type { LanguagesConstant } from 'types/constants.js'
import type { Logger } from 'types/angular'

type QuestionWordFactoryAnswerType = {
  getQuestionnaire: (amount: number, from: string, to: string) => Array<QuestionWordPair>,
  getQuestionWord: (from: string, to: string) => ?QuestionWordPair
}

type QuestionWordFactoryType = ($log: Logger, LANGUAGES: LanguagesConstant) => QuestionWordFactoryAnswerType

const QuestionWordFactory: QuestionWordFactoryType = ($log, Restangular, LANGUAGES, _) => {
  'ngInject'

  return {
    getWordIdentifier (word: QuestionWord): string {
      return word.id + word.person + word.tense
    },
    getQuestionnaire (amount: number = 10, from: ?string, to: ?string): Promise<Array<QuestionWordPair>> {
      return new Promise((resolve, reject) =>
        Restangular.all('questions').customGETLIST(`random/${amount}`)
          .then(data => resolve(data.plain())))
    }
  }
}

export default QuestionWordFactory

