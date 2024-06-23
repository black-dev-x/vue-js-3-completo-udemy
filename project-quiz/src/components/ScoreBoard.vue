<template>
  <section class="score">
    Player <span>{{ this.playerScore }}</span> x <span>{{ this.computerScore }}</span> Computer
  </section>
</template>

<script>
  export default {
    name: 'ScoreBoard',
    props: {
      playerScore: Number,
      computerScore: Number
    }
  }
</script>

<style scoped lang="scss" >
  section.score {
    border-bottom: 1px solid black;
    padding: 24px;
    font-size: 18px;

    span {
      padding: 8px;
      font-weight: bold;
      border: 1px solid black;
    }
  }
</style>
