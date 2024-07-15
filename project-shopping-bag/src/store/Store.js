import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    loadBag(state, bag) {
      state.productsInBag = bag
    },
    addToBag(state, product) {
      state.productsInBag = [...state.productsInBag, product]
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
    removeFromBag(state, product) {
      state.productsInBag = state.productsInBag.filter(p => p.id !== product.id)
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    }
  },
  actions: {
    async getProducts({ commit }) {
      const response = await axios.get('https://fakestoreapi.com/products')
      commit('setProducts', response.data)
    },
    addToBag({ commit }, product) {
      product.quantity = 1
      commit('addToBag', product)
    },
    removeFromBag({ commit }, product) {
      commit('removeFromBag', product)
    },
    loadBag({ commit }) {
      const productsInBag = localStorage.getItem('productsInBag')
      if (productsInBag) {
        commit('loadBag', JSON.parse(productsInBag))
      }
    }
  },
  modules: {
  }
})
