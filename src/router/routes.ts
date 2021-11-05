export default [
  {
    path: '/overview',
    name: 'Overview',
    icon: 'el-icon-s-home',
    component: () => import('@/views/overview/index.vue')
  },
  {
    path: '/css',
    name: 'Css',
    icon: 'el-icon-s-data',
    component: () => import('@/views/css/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    icon: 'el-icon-s-marketing',
    component: () => import('@/components/TempRouterView.vue'),
    redirect: '/demo/example',
    children: [
      {
        path: '/demo/example',
        name: 'Example',
        icon: 'el-icon-s-marketing',
        component: () => import('@/views/demo/demo.vue')
      },
      {
        path: '/demo/watch',
        name: 'Watch',
        icon: 'el-icon-video-camera-solid',
        component: () => import('@/views/demo/watch.vue')
      },
      {
        path: '/demo/vuex',
        name: 'Vuex',
        icon: 'el-icon-s-grid',
        component: () => import('@/views/demo/vuex.vue')
      },
      {
        path: '/demo/axios',
        name: 'Axios',
        icon: 'el-icon-s-finance',
        component: () => import('@/views/demo/axios.vue')
      }
    ]
  }
]
