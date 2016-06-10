import template from './tester.html'
import controller from './tester.controller'
import './tester.scss'

let testerComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default testerComponent
