import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './index.css'
// import './samples/node-api'

const app =  createApp(App).use(router).mount('#app').$nextTick(()=>{postMessage({ payload: 'removeLoading' }, '*')})

