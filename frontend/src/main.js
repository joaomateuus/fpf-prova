import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

window.EventBus = new Vue;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
