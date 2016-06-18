/* @flow */

import angular from 'angular'
import * as _ from 'lodash'
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
  .constant('_', _)
  .constant('LANGUAGES', LANGUAGES)
  .constant('DEFAULT_LANGUAGE', 'en')
  .constant('PALABRA_API', 'http://localhost:9000')
