/* @flow */

import type { AngularComponent } from 'types/angular'

import template from './<%= name %>.html'
import controller from './<%= name %>.controller'
import './<%= name %>.scss'

const <%= name %>Component: AngularComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default <%= name %>Component
