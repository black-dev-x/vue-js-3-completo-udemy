<template>
  <div>
    <h1>Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.</h1>

    <div>
      <input id="answer1" type="radio" name="options" value="True">
      <label for="answer1">True</label>
    </div>

    <div>
      <input id="answer2" type="radio" name="options" value="False">
      <label for="answer2">False</label>
    </div>

    <button class="send">Send</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      questions: []
    }
  },
  created() {
    this.axios.get('https://opentdb.com/api.php?amount=10&category=18')
      .then(response => this.questions = response.data.results)
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
