import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          commit('setProducts', response.data)
        })
    }
  },
  modules: {
  }
})
