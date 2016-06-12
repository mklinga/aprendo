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
  infinitive: string,
  present: WordConjugationValue
}

export type Word = {
  id: number,
  irregular: boolean,
  language: string,
  relations: Array<number>,
  type: string,
  value: WordValue
}

export type QuestionWord = {
    person: string,
    tense: string,
    id: number,
    language: string,
    value: string
}

export type QuestionWordPair = {
  question: QuestionWord,
  answer: QuestionWord
}
