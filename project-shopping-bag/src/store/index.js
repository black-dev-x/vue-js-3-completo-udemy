import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: []
  },
  mutations: {
    
  },
  actions: {
    getProducts() {
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
