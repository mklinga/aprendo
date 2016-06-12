/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './home.html'
import controller from './home.controller'

let homeComponent: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default homeComponent
