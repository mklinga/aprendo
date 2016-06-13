/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './successViewer.html'
import controller from './successViewer.controller'
import './successViewer.scss'

const successViewerComponent: AngularComponent = {
  restrict: 'E',
  bindings: {
    correctAnswers: '<',
    total: '<',
    questions: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default successViewerComponent
