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
      component: () => import('@/components/Layout/index.vue'),
      redirect: '/layout/overview',
      children: routes
    },
    {
      path: '/',
      name: 'Vision',
      component: () => import('@/components/Vision/index.vue'),
      redirect: '/vision/interest',
      children: [
        {
          path: '/vision/interest',
          name: 'Interest',
          component: () => import('@/views/vision-pages/interesting/index.vue')
        },
        {
          path: '/vision/mall',
          name: 'Mall',
          component: () => import('@/views/vision-pages/mall/index.vue')
        },
        {
          path: '/vision/previewer',
          name: 'ImagePreviewer',
          component: () => import('@/views/vision-pages/image-preview/index.vue')
        },
        {
          path: '/vision/hello-vue',
          name: 'HelloVue',
          component: () => import('@/views/vision-pages/HelloVue.vue')
        }
      ]
    }
  ]
})

export default router
