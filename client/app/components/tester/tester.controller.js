class TesterController {
  constructor ($log, QuestionWordFactory) {
    'ngInject'

    this.questionnaire = QuestionWordFactory.getQuestionnaire(10)

    this.index = 0
    this.correctAnswers = 0
  }
}

export default TesterController
