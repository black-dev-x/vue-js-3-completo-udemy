<script setup>
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
    <h1>📖 Meus Livros</h1>
    <div class="header-btns">
      <button class="btn"> Adicionar Livro + </button>
    </div>

    <div class="books-container">
      <div class="books-list">
        <div v-for="book in books" :key="book.id" class="book">
          <div class="book-cover">
            <img :src="book.cover" />
            <button>
              <i class="fa-solid fa-eye"></i>
              <span>Ainda não li</span>
            </button>
          </div>
          <div class="book-details">
            <p class="book-author">{{ book.author }}</p>
            <h3 class="book-title">{{ book.title }}</h3>
            <p><i class="fa-solid fa-hashtag icon"></i>{{ book.isbn }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
