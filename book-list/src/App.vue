<script setup>

import { ref, reactive } from 'vue'

//reactive is used for objects (this is just a convention)
let id = 4
let courses = [
  { id: 1, title: 'Javascript' },
  { id: 2, title: 'React' },
  { id: 3, title: 'Vue' }
]
const addCourse = () => {
  courses.push({ id, title: courseName.value })
  courseName.value = ''
}
let courseName = ref('')

</script>

<template>
  <div>
    <h1>Courses</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
    </ul>
  </div>
  <br>
  <input type="text" v-model="courses[0].title">
</template>

<style scoped>
</style>
