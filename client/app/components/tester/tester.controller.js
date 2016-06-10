class TesterController {
  constructor () {
    this.words = [
      { type: 'verb', irregular: true, value: 'tengo', translation: 'I have' },
      { type: 'verb', irregular: true, value: 'vamos', translation: 'We go' }
    ]

    this.index = 0
    this.correctAnswers = 0
  }
}

export default TesterController
