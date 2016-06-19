/* @flow */

export type LanguagesConstant = {
  'en': {
    value: string,
    title: string
  },
  'es': {
    value: string,
    title: string
  }
}

type QuestionnaireConfig = {
  amountOfWords: number
}

export type ConfigObject = {
  questionnaire: QuestionnaireConfig
}
