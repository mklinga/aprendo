/* @flow */

import angular from 'angular'
import type { LanguagesConstant } from 'types/constants.js'

const LANGUAGES: LanguagesConstant = {
  'es': {
    title: 'Español',
    value: 'es'
  },
  'en': {
    title: 'English',
    value: 'en'
  }
}

export default angular
  .module('app.constants', [])
  .constant('LANGUAGES', LANGUAGES)
  .constant('DEFAULT_LANGUAGE', 'en')
