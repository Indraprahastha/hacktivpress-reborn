import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Konten from '@/components/Konten'
import Contentsatuan from '@/components/Contentsatuan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Konten
        },
        {
          path: ':id',
          component: Contentsatuan
          // props: true
        }
      ]
    }
  ]
})
