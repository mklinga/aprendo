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

  return {
    getQuestionnaire (amount = 10, from = 'en', to = 'es') {
      const result = []
      for (let i = 0; i < amount; i++) {
        result.push(this.getQuestionWord(from, to))
      }

      return result
    },
    getQuestionWord (from = 'en', to = 'es', words = WORDS) {
      const sourcePool = words.filter(word => word.language === from)

      const questionWord = sourcePool[Math.floor(Math.random() * sourcePool.length)]
      const tense = 'present'
      const index = Math.floor(Math.random() * Object.keys(questionWord.value[tense]).length)
      const person = Object.keys(questionWord.value[tense])[index]

      const answer = words.find(word => {
        return ((word.language === to) && (questionWord.relations.includes(word.id)))
      })

      if (!answer) {
        this.$log.error('No answer found!')
        return null
      }

      return ({
        question: {
          person,
          tense,
          id: questionWord.id,
          language: questionWord.language,
          value: questionWord.value[tense][person]
        },
        answer: {
          person,
          tense,
          id: answer.id,
          language: answer.language,
          value: answer.value[tense][person]
        }
      })
    }
  }
}

export default QuestionWordFactory

