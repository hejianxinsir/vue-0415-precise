import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueBus from 'vue-bus'
Vue.use(VueBus)

import router from './router/index'

new Vue({
  render: h => h(App),
  vuebus: VueBus,
  router
}).$mount('#app')
