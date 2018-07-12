import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Found from '../components/Found'
import Order from '../components/Order'
import Person from '../components/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Found',
      name: 'Found',
      component: Found
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    }
  ]
})
