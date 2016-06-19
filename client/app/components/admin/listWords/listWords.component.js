/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './listWords.html'
import controller from './listWords.controller'
import './listWords.scss'

const listWordsComponent: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default listWordsComponent
