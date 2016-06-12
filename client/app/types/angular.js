/* @flow */

export type AngularComponent = {
  restrict: string,
  bindings: Object,
  template: string,
  controller: Function,
  controllerAs: string
}
