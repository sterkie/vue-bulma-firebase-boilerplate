import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

const config = {
  // insert firebase config object here
}

firebase.initializeApp(config)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
