/* @flow */

import angular from 'angular'
import * as _ from 'lodash'
import type { ConfigObject, LanguagesConstant } from 'types/constants.js'

// todo: read from db
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

const CONFIG: ConfigObject = {
  questionnaire: {
    amountOfWords: 10
  }
}

export default angular
  .module('app.constants', [])
  .constant('_', _)
  .constant('LANGUAGES', LANGUAGES)
  .constant('CONFIG', CONFIG)
  .constant('DEFAULT_LANGUAGE', 'en')
  .constant('PALABRA_API', 'http://localhost:9000')
