import template from './successViewer.html'
import controller from './successViewer.controller'
import './successViewer.scss'

let successViewerComponent = {
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
