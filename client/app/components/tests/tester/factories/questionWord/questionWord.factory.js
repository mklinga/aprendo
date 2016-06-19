/* @flow */

import type { QuestionWordPair } from 'types/word.js'
import type { LanguagesConstant } from 'types/constants.js'
import type { Logger, RestangularType } from 'types/angular'

type QuestionWordFactoryAnswerType = {
  getQuestionnaire: (amount: number, from: string, to: string) => Promise<Array<QuestionWordPair>>
}

type QuestionWordFactoryType = ($log: Logger, Restangular: RestangularType, LANGUAGES: LanguagesConstant) =>
  QuestionWordFactoryAnswerType

const QuestionWordFactory: QuestionWordFactoryType = ($log, Restangular, LANGUAGES, _) => {
  'ngInject'

  return {
    getQuestionnaire (amount: number = 10, from: ?string, to: ?string): Promise<Array<QuestionWordPair>> {
      return new Promise((resolve, reject) => (
        Restangular.all('questions').customGETLIST(`random/${amount}`)
          .then(data => resolve(data.plain()))
      ))
    }
  }
}

export default QuestionWordFactory

