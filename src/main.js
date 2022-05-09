import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


// import myheade from './components/myheade.vue'
Vue.config.productionTip = false

// Vue.component('myheade',myheade)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
