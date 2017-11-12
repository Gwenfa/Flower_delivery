import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)

import home from '@/components/Home'
import classify from '@/components/Classify'
import shoppingcart from './../components/ShoppingCart'
import mine from './../components/Mine'
// import Waimai from './../components/waimai'
// import Search from './../components/search'
// import Order from './../components/order'
 // import Test from './../components/test'

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/classify',
      name: 'classify',
      component:classify
    },
    {
      path: '/shoppingcart',
      name: 'Search',
      component:shoppingcart
    },
    {
      path: '/mine',
      name: 'mine',
      component:mine
    }

  ]
})
