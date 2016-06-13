import template from './wordQuestion.html'
import controller from './wordQuestion.controller'
import './wordQuestion.scss'

let wordQuestionComponent = {
  restrict: 'E',
  bindings: {
    word: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default wordQuestionComponent
