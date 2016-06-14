/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './tester.html'
import controller from './tester.controller'
import './tester.scss'

const testerComponent: AngularComponent = {
  restrict: 'E',
  bindings: {
    from: '<',
    to: '<',
    finishTest: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default testerComponent
