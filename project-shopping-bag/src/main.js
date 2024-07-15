import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './store/Store'



createApp(App).use(Store).use(router).mount('#app')
