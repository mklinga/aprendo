/* @flow */

import angular from 'angular'

const prettifyPersonFilter: () => Function = () => {
  return function (input) {
    return 'filtered' + input
  }
}

const prettifyPersonModule = angular
  .module('prettifyPerson', [])
  .filter('prettifyPerson', prettifyPersonFilter)

export default prettifyPersonModule

