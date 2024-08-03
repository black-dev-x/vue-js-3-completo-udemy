<script setup>
</script>

<template>
  <div class="book-progress">
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${progress}%` }"></div>
    </div>
    <p>{{ progress }}%</p>
  </div>
</template>
