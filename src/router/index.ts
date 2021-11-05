import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import routes from './routes'
import store from '../store'

store.dispatch('Routes', routes)

// const routes: Array<RouteRecordRaw> = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/components/layout/index.vue'),
      redirect: '/overview',
      children: routes
    },
    {
      path: '/',
      name: 'Pretty',
      component: () => import('@/components/pretty/index.vue'),
      redirect: '/mall',
      children: [
        {
          path: '/interest',
          name: 'Interest',
          component: () => import('@/views/pretty/interesting/index.vue')
        },
        {
          path: '/mall',
          name: 'Mall',
          component: () => import('@/views/pretty/mall/index.vue')
        },
        {
          path: '/hello-world',
          name: 'HelloWorld',
          component: () => import('@/views/pretty/HelloWorld.vue')
        }
      ]
    }
  ]
})

export default router
