/* @flow */

export type AngularComponent = {
  restrict: string,
  bindings: Object,
  template: string,
  controller: Function,
  controllerAs: string
}

export type Logger = {
  info: Function,
  error: Function
}
