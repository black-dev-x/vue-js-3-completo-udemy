<template>
  <div v-if="this.question">
    <h1 v-html="question"></h1>

    <div v-for="(answer, i) in this.answers" :key="i">
      <input :id="answer" type="radio" name="options" :value="this.answer" v-model="this.chosenAnswer">
      <label :for="answer" v-html="answer"></label>
    </div>

    <button class="send">Send</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      question: '',
      incorrectAnswers: [],
      correctAnswer: '',
      chosenAnswer: ''
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
    this.axios.get('https://opentdb.com/api.php?amount=1&category=18')
      .then(response => {
        this.question = response.data.results[0].question
        this.incorrectAnswers = response.data.results[0].incorrect_answers
        this.correctAnswer = response.data.results[0].correct_answer
      })
      .catch(error => {
        console.log(error);
      });
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
