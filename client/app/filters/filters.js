/* @flow */

import angular from 'angular'
import prettifyPerson from './prettifyPerson/prettifyPerson'

export default angular.module('app.filters', [
  prettifyPerson.name
])
