<script setup>

import { ref, reactive } from 'vue'

//ref is used for primitive values
let count = ref(0)


//reactive is used for objects (this is just a convention)
let courses = [
  { id: 1, title: 'Javascript' },
  { id: 2, title: 'React' },
  { id: 3, title: 'Vue' }
]

</script>

<template>
  <div>
    <h1>Courses</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
    </ul>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
</style>
