import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vueResource from 'vue-resource'
import headerBlock from './components/headerBlock'

Vue.use(vueResource)
Vue.component('headerBlock', headerBlock)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
