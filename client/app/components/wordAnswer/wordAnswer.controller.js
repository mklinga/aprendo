/* @flow */

import type { Word } from 'types/word'
import type { KeyboardEvent } from 'types/events'
import type { Logger } from 'types/angular'

class WordAnswerController {

  answer: string = '';
  word: Word;
  logger: Logger;
  guess: Function;

  constructor ($log: Logger) {
    'ngInject'
    this.logger = $log
    $log.info(this)
  }

  keyPress (event: KeyboardEvent) {
    // Enter key checks for the answer
    if (event.which === 13) {
      this.guess({answer: this.answer})
    }
  }
}

export default WordAnswerController
