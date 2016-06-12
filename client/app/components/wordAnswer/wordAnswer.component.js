/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './wordAnswer.html'
import controller from './wordAnswer.controller'
import './wordAnswer.scss'

let wordAnswerComponent: AngularComponent = {
  restrict: 'E',
  bindings: {
    word: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default wordAnswerComponent
