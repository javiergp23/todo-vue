// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import store from './store';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
