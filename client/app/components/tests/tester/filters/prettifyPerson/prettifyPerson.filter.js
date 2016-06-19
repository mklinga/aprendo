/* @flow */

const PRETTIFIED = {
  /* Spanish */
  '1': {
    '1': 'yo',
    '2': 'tú',
    '3': 'él/ella',
    '4': 'nosotros',
    '5': 'vosotros',
    '6': 'ellos'
  },
  /* English */
  '2': {
    '1': 'I',
    '2': 'you',
    '3': 'he/she/it',
    '4': 'we',
    '5': 'you (plural)',
    '6': 'they'
  }
}

const prettifyPersonFilter: () => Function = () => {
  return function (input, language = 2) {
    return PRETTIFIED[language][input]
  }
}

export default prettifyPersonFilter

