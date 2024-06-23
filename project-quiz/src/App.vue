<template>
  <ScoreBoard :playerScore="this.playerScore" :computerScore="this.computerScore"/>
  <div v-if="this.question">
    <h1 v-html="question"></h1>

    <div v-for="(answer, i) in this.answers" :key="i">
      <input :disabled="this.answerSubmitted" :id="answer" type="radio" name="options" :value="answer" v-model="this.chosenAnswer">
      <label :for="answer" v-html="answer"></label>
    </div>

    <button v-if="!this.answerSubmitted" @click="this.submitAnswer" class="send">Send</button>

    <section class="result" v-if="this.answerSubmitted">
      <p v-if="this.correctAnswer != this.chosenAnswer">❌ I'm sorry, you picked the wrong answer. The answer is "<span v-html="this.correctAnswer"></span>".</p>
      <p v-if="this.correctAnswer == this.chosenAnswer">✅ Congratulations, the answer "<span v-html="this.correctAnswer"></span>" is correct.</p>
      <button @click="this.getQuestion()" class="send">Next Question</button>
    </section>

  </div>
</template>

<script>

import ScoreBoard from './components/ScoreBoard.vue'

export default {
  name: 'App',
  components: {
    ScoreBoard
  },
  data() {
    return {
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
      chosenAnswer: '',
      playerScore: 0,
      computerScore: 0,
      answerSubmitted: false
    }
  },
  methods: {
    submitAnswer() {
      this.answerSubmitted = true
      if (this.chosenAnswer === this.correctAnswer) {
        this.playerScore++
      } else {
        this.computerScore++
      }
    },
    getQuestion() {
      this.axios.get('https://opentdb.com/api.php?amount=1&category=18')
      .then(response => {
        this.question = response.data.results[0].question
        this.incorrectAnswers = response.data.results[0].incorrect_answers
        this.correctAnswer = response.data.results[0].correct_answer
        this.answerSubmitted = false
        this.chosenAnswer = ''
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    answers() {
      const answers = [...this.incorrectAnswers, this.correctAnswer]
      answers.sort(() => Math.random() - 0.5)
      return answers
    }
  },
  created() {
    this.getQuestion()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type=radio] {
   margin: 12px 4px; 
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: white;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }

}
</style>
