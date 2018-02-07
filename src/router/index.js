import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Late from '@/components/Late'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      props: true
    },
    {
      path: '/late/:include/:start/:end',
      name: '/late',
      component: Late,
      props: {default: true}
    }
  ]
})
