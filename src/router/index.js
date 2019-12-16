import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mkmweb from '@/components/Mkmweb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mkmweb',
      name: 'Mkmweb',
      component: Mkmweb
    }
  ]
})
