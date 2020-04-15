import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld'
import He from '../components/he'
import Son from '../components/son'

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: HelloWorld
      }
    },
    {
      name: 'he',
      path: '/he',
      components: {
        main: He
      }
    },
    {
      name: 'son',
      path: '/son/:sonmsg',
      components: {
        main: Son
      }
    }
  ]
})