<script setup>
import { computed, defineProps } from 'vue'

  const props = defineProps(['books'])

  const finished = computed(() => {
    return props.books.filter(book => book.isRead).length
  })

  const total = computed(() => {
    return props.books.length
  })

  const progress = computed(() => {
    return Math.round((finished.value / total.value) * 100)
  })

</script>

<template>
  <div class="books-read">
    <label for="progress">Your Progress </label>
    <progress id="progress" :value="progress" max="100"></progress>
    <p>{{ finished }} of {{ total }} books finished</p>
    
  </div>
</template>
