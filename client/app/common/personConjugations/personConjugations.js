/* @flow */

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import personConjugationsFactory from './personConjugations.factory'

const personConjugationsModule = angular
  .module('personConjugations', [ uiRouter ])
  .factory('PersonConjugations', personConjugationsFactory)

export default personConjugationsModule
