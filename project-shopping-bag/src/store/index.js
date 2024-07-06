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
    addToBag(state, product) {
      state.productsInBag = [...state.productsInBag, product]
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('setProducts', response.data)
        })
    },
    addToBag({ commit }, product) {
      product.quantity = 1
      commit('addToBag', product)
    },
  },
  modules: {
  }
})
