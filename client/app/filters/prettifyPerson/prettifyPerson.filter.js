/* @flow */

const PRETTIFIED = {
  'en': {
    '1st': 'I',
    '2nd': 'you',
    '3rd': 'he/she/it',
    '1stplural': 'we',
    '2ndplural': 'you (plural)',
    '3rdplural': 'they'
  },
  'es': {
    '1st': 'yo',
    '2nd': 'tú',
    '3rd': 'él/ella',
    '1stplural': 'nosotros',
    '2ndplural': 'vosotros',
    '3rdplural': 'ellos'
  }
}

const prettifyPersonFilter: () => Function = () => {
  return function (input, language = 'en') {
    return PRETTIFIED[language][input]
  }
}

export default prettifyPersonFilter

