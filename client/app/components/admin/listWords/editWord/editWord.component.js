/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './editWord.html'
import controller from './editWord.controller'
import './editWord.scss'

const editWordComponent: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default editWordComponent
