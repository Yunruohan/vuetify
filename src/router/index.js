import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Vuetify from 'Vuetify'
import login from '@/components/login/login'
import home from '@/components/home/home'
import learn from '@/components/learn/work'


Vue.use(Router)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/home/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/home/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/home/login',
      name: 'login',
      component: login
    }
  ]
})
