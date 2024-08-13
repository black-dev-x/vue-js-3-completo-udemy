<script setup>
import { computed, defineProps } from 'vue'

  const props = defineProps(['books'])
  const progress = computed(() => {
    const total = props.books.length
    const finished = props.books.filter(book => book.isRead).length
    return Math.round((finished / total) * 100)
  })
</script>

<template>
  <div class="book-progress">
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${progress}%` }"></div>
    </div>
    <p>{{ progress }}%</p>
  </div>
</template>
