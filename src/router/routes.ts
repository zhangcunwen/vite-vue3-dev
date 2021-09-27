export default [
  {
    path: '/',
    name: 'Layout',
    icon: 'el-icon-s-management',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/overview',
    children: [
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
        component: () => import('@/views/demo/demo.vue')
      },
      {
        path: '/watch',
        name: 'Watch',
        icon: 'el-icon-video-camera-solid',
        component: () => import('@/views/demo/watch.vue')
      },
      {
        path: '/vuex',
        name: 'Vuex',
        icon: 'el-icon-s-grid',
        component: () => import('@/views/demo/vuex.vue')
      },
      {
        path: '/axios',
        name: 'Axios',
        icon: 'el-icon-s-finance',
        component: () => import('@/views/demo/axios.vue')
      }
    ]
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    icon: 'el-icon-s-open',
    component: () => import('@/components/HelloWorld.vue') // 懒加载组件
  }
]
