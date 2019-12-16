// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select, Input,Table } from 'element-ui';

import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

import httpRequest from '@/utils/httpRequest'
import VueCookie from 'vue-cookie'

// ElementUI
Vue.use(ElementUI);
Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Table)

// 组件FormMakeing
Vue.use(FormMaking)

// http 请求字段
Vue.prototype.$http = httpRequest; 
Vue.use(VueCookie)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
})
