export default [
  {
    path: '/layout/overview',
    name: 'Overview',
    icon: 'el-icon-s-home',
    component: () => import('@/views/layout-pages/overview/index.vue')
  },
  {
    path: '/layout/css',
    name: 'Css',
    icon: 'el-icon-s-data',
    component: () => import('@/views/layout-pages/css/index.vue')
  },
  {
    path: '/layout/demo',
    name: 'Demo',
    icon: 'el-icon-s-marketing',
    component: () => import('@/components/TempRouterView.vue'),
    redirect: '/layout/demo/example',
    children: [
      {
        path: '/layout/demo/example',
        name: 'Example',
        icon: 'el-icon-s-marketing',
        component: () => import('@/views/layout-pages/demo/demo.vue')
      },
      {
        path: '/layout/demo/watch',
        name: 'Watch',
        icon: 'el-icon-video-camera-solid',
        component: () => import('@/views/layout-pages/demo/watch.vue')
      },
      {
        path: '/layout/demo/vuex',
        name: 'Vuex',
        icon: 'el-icon-s-grid',
        component: () => import('@/views/layout-pages/demo/vuex.vue')
      },
      {
        path: '/layout/demo/axios',
        name: 'Axios',
        icon: 'el-icon-s-finance',
        component: () => import('@/views/layout-pages/demo/axios.vue')
      }
    ]
  }
]
