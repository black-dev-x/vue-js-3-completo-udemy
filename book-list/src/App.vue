<script setup>

import { ref, reactive } from 'vue'
import Progress from './components/Progress.vue'
//reactive is used for objects (this is just a convention)
let id = 4
let courses = reactive([
  { id: 1, title: 'Javascript', done: true },
  { id: 2, title: 'React', done: false },
  { id: 3, title: 'Vue', done: false }
])

const addCourse = () => {
  courses.push({ id: ++id, title: courseName.value, done: false })
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
  <input type="text" v-model="courseName">
  <button @click="addCourse">Add Course</button>
  <Progress :courses="courses"/>
</template>

<style scoped>
</style>
