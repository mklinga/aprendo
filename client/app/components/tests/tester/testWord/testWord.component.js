/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './testWord.html'
import controller from './testWord.controller'
import './testWord.scss'

let testWordComponent: AngularComponent = {
  restrict: 'E',
  bindings: {
    word: '<',
    respond: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default testWordComponent
