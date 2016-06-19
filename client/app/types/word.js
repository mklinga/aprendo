/* @flow */

export type WordConjugationValue = {
  '1st': string,
  '2nd': string,
  '3rd': string,
  '1stplural': string,
  '2ndplural': string,
  '3rdplural': string
}

export type WordValue = {
  id: number,
  irregular: boolean,
  infinitive: string,
  language_id: number,
  type_id: number
}

export type WordConjugation = {
  id: number,
  word_id: number,
  person_conjugation_id: number,
  time_conjugation_id: number,
  value: string
}

export type QuestionWord = {
  word: WordValue,
  conjugation: WordConjugation
}

export type QuestionWordPair = {
  question: QuestionWord,
  answer: QuestionWord
}

export type LastAnswer = {
  success: boolean,
  value: string
}
