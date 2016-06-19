/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './admin.html'
import controller from './admin.controller'
import './admin.scss'

const adminComponent: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default adminComponent
