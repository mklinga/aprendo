/* @flow */

const PRETTIFIED = {
  '1st': 'I',
  '2nd': 'you',
  '3rd': 'he/she/it',
  '1stplural': 'we',
  '2ndplural': 'you (plural)',
  '3rdplural': 'they'
}

const prettifyPersonFilter: () => Function = () => {
  return function (input) {
    return PRETTIFIED[input]
  }
}

export default prettifyPersonFilter

