import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Contentsatuan from '@/components/Contentsatuan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content,
      children: [
        {
          path: '',
          component: Content
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
