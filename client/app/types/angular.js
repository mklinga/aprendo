/* @flow */

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

export type RestangularType = {
  all: (param: string) => RestangularType,
  getList: () => Promise,
  customGETLIST: (param: string) => Promise
}

