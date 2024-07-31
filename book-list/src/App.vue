<script setup>
import Books from './components/Books.vue'

const books = [
  {
    id: 1,
    title: 'History of Europe',
    cover: 'https://whitegablespublishing.com/wp-content/uploads/2019/05/printpress-product-6-540x540.jpeg',
    isRead: true,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
  {
    id: 2,
    title: 'Penguin Classics',
    cover: 'https://whitegablespublishing.com/wp-content/uploads/2019/05/printpress-product-2-540x540.jpeg',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo, Jon Snow',
  },
  {
    id: 3,
    title: 'Becoming',
    cover: 'https://whitegablespublishing.com/wp-content/uploads/2019/05/printpress-product-7-540x540.jpeg',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
  {
    id: 4,
    title: 'Sonnets',
    cover: 'https://whitegablespublishing.com/wp-content/uploads/2019/05/printpress-product-5-540x540.jpeg',
    isRead: false,
    isbn: '0-395-07157-8',
    author: 'Daniel Trejo',
  },
];
</script>

<template>
  <div class="container">
    <h1>📖 My Books</h1>
    <div class="header-btns">
      <button class="btn"> Add book + </button>
    </div>
    <Books :books="books"/>
  </div>
</template>

<style scoped></style>
