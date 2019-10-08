import Vue from 'vue'
// import Vuex from 'vuex'
import App from './components/App'
import BootstrapVue from 'bootstrap-vue'
import "aug-attr-spliced"
// import "../node_modules/augmented-ui/augmented";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store/index'

Vue.use(BootstrapVue)
/// Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')