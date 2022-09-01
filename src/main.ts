import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
// import './samples/node-api'
const pinia = createPinia()
createApp(App)
.use(router)
.use(pinia)
.mount('#app')
.$nextTick(()=>{
    postMessage({ payload: 'removeLoading' }, '*')
})

