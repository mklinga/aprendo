import template from './testWord.html'
import controller from './testWord.controller'
import './testWord.scss'

let testWordComponent = {
  restrict: 'E',
  bindings: {
    word: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
}

export default testWordComponent
