/* @flow */

import angular from 'angular'
import prettifyPersonFilter from './prettifyPerson.filter'

const prettifyPersonModule = angular
  .module('prettifyPerson', [])
  .filter('prettifyPerson', prettifyPersonFilter)

export default prettifyPersonModule

