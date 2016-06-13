/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './tests.html'
import controller from './tests.controller'
import './tests.scss'

const testsComponent: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default testsComponent
