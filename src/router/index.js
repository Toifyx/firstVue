import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mkmweb from '@/components/Mkmweb'
import OrderQuery from '@/components/OrderQuery'
import CCIDirectPay from '@/components/CCIDirectPay'
import Hongbao from '@/components/Hongbao'

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
    },
    {
      path: '/orderQuery',
      name: 'OrderQuery',
      component: OrderQuery
    },
    {
      path: '/ccDirectPay',
      name: 'CCIDirectPay',
      component: CCIDirectPay
    },
    {
      path: '/hongbao',
      name: 'Hongbao',
      component: Hongbao
    }
  ]
})
