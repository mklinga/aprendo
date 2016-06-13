/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './testSelector.html'
import controller from './testSelector.controller'
import './testSelector.scss'

const testSelectorComponent: AngularComponent = {
  restrict: 'E',
  bindings: {
    launchTest: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default testSelectorComponent
