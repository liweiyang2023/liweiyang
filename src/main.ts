import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
const env = import.meta.env
console.log(env)

createApp(App).use(router).mount('#app')
