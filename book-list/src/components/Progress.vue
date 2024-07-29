<script setup>
import { computed } from 'vue'
const props = defineProps(['courses'])
const completedCourses = computed(() => {
  return props.courses.filter(course => course.done).length
})
</script>

<template>
  <div>
    {{completedCourses}} courses completed from a total of {{courses.length}}
  </div>
  <br>
</template>
