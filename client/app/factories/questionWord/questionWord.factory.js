const QuestionWordFactory = () => {
  'ngInject'

  // TODO: read from somewhere
  const WORDS = [
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

  const WORDS_IN_SPANISH = WORDS.filter(word => word.language === 'es')

  return {
    getQuestionnaire (amount = 10) {
      const result = []
      for (let i = 0; i < amount; i++) {
        result.push(this.getQuestionWord())
      }

      return result
    },
    getQuestionWord () {
      const questionWord = WORDS_IN_SPANISH[Math.floor(Math.random() * WORDS_IN_SPANISH.length)]
      const tense = 'present'
      const index = Math.floor(Math.random() * Object.keys(questionWord.value[tense]).length)
      const person = Object.keys(questionWord.value[tense])[index]

      const answer = WORDS.find(word => {
        return (questionWord.relations.includes(word.id))
      })

      if (!answer) {
        this.$log.error('No answer found!')
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
    }
  }
}

export default QuestionWordFactory

