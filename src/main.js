import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueMobileDetection from "vue-mobile-detection"
import VueRouter from 'vue-router'

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from '../src/components/home/Home'
import OpenSource from '../src/components/open-source/OpenSource'
import About from '../src/components/about/About'

const routes = [
  { path: '/', name: 'Bence László', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/open-source', name: 'Open Source', component: OpenSource }
]

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueMobileDetection);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')