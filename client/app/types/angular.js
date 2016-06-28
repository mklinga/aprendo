/* @flow */

import type { Word } from 'types/word'

export type AngularComponent = {
  restrict: string,
  bindings: Object,
  template: string,
  controller: Function,
  controllerAs: string
}

export type Scope = {
  $apply: Function
}

export type Logger = {
  debug: Function,
  error: Function,
  info: Function,
  log: Function,
  warn: Function
}

export type RestangularWord = Word & { save: () => Promise }

export type RestangularType = {
  all: (param: string) => RestangularType,
  copy: (item: any) => any,
  customGETLIST: (param: string) => Promise,
  get: (id: any) => Promise,
  getList: () => Promise,
  one: (param: string, id: number) => RestangularType
}

