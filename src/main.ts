import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import BootstrapVue3 from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import VueCookies  from 'vue-cookies'



const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(VueCookies, { expired: '7d'})

app.mount('#app')