/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import timeConjugationsFactory from './timeConjugations.factory'

const timeConjugationsModule = angular
  .module('timeConjugations', [ uiRouter ])

  .factory('timeConjugations', timeConjugationsFactory)

export default timeConjugationsModule
