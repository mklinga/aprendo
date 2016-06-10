class TesterController {
  constructor ($log) {
    'ngInject'

    this.words = [
      {
        id: 1001,
        type: 'verb',
        language: 'es',
        irregular: true,
        value: {
          infinitive: 'tener',
          present: {
            '1st': 'tengo',
            '2nd': 'tienes',
            '3rd': 'tiene',
            '1stplural': 'tenemos',
            '2ndplural': 'tenéis',
            '3rdplural': 'tienen'
          }
        },
        relations: [ 2001 ]
      },
      {
        id: 1002,
        type: 'verb',
        language: 'es',
        irregular: true,
        value: {
          infinitive: 'hacer',
          present: {
            '1st': 'hago',
            '2nd': 'haces',
            '3rd': 'hace',
            '1stplural': 'hacemos',
            '2ndplural': 'hacéis',
            '3rdplural': 'hacen'
          }
        },
        relations: [ 2002 ]
      },
      {
        id: 2001,
        type: 'verb',
        language: 'en',
        irregular: false,
        value: {
          infinitive: 'to have',
          present: {
            '1st': 'have',
            '2nd': 'have',
            '3rd': 'has',
            '1stplural': 'have',
            '2ndplural': 'have',
            '3rdplural': 'have'
          }
        },
        relations: [ 1001 ]
      },
      {
        id: 2002,
        type: 'verb',
        language: 'en',
        irregular: false,
        value: {
          infinitive: 'to make',
          present: {
            '1st': 'make',
            '2nd': 'make',
            '3rd': 'makes',
            '1stplural': 'make',
            '2ndplural': 'make',
            '3rdplural': 'make'
          }
        },
        relations: [ 1002 ]
      }
    ]

    this.wordsInSpanish = this.words.filter(word => word.language === 'es')

    this.questionnaire = Array.apply(null, Array(10)).map(q => {
      const questionWord = this.wordsInSpanish[Math.floor(Math.random() * this.wordsInSpanish.length)]
      const tense = 'present'
      const index = Math.floor(Math.random() * Object.keys(questionWord.value[tense]).length)
      const person = Object.keys(questionWord.value[tense])[index]

      const answer = this.words.find(word => {
        return (questionWord.relations.includes(word.id))
      })

      if (!answer) {
        $log.error('No answer found!')
      }

      const finalQuestion = {
        id: questionWord.id,
        question: {
          person,
          tense,
          value: questionWord.value[tense][person]
        },
        answer: {
          person,
          tense,
          value: answer.value[tense][person]
        }
      }

      return finalQuestion
    })

    this.index = 0
    this.correctAnswers = 0
  }
}

export default TesterController
