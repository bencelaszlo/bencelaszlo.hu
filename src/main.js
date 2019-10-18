import Vue from 'vue'
// import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import VueMobileDetection from "vue-mobile-detection"

import App from './components/App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { store } from './store/index'

Vue.use(BootstrapVue)
Vue.use(VueMobileDetection);
/// Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')