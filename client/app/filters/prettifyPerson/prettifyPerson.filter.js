/* @flow */

const PRETTIFIED = {
  '1st': '1st person (I)',
  '2nd': '2nd person (you)',
  '3rd': '3rd person (he/she/it)',
  '1stplural': '1st plural (we)',
  '2ndplural': '2nd plural (you)',
  '3rdplural': '3rd plural (they)'
}

const prettifyPersonFilter: () => Function = () => {
  return function (input) {
    return PRETTIFIED[input]
  }
}

export default prettifyPersonFilter

