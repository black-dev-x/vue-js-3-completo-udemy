import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [1,2,3]
  },
  mutations: {
    
  },
  actions: {
    loadProducts() {
      this.axios.get('https://fakestoreapi.com/products')
        .then(response => {
          console.log(response.data)
        })
    }
  },
  modules: {
  }
})
