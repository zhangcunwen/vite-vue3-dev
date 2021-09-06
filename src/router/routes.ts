export default [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/overview',
    children: [
      {
        path: '/overview',
        name: 'Overview',
        component: () => import('@/views/overview/index.vue')
      },
      {
        path: '/css',
        name: 'Css',
        component: () => import('@/views/css/index.vue')
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/demo/demo.vue')
      },
      {
        path: '/watch',
        name: 'Watch',
        component: () => import('@/views/demo/watch.vue')
      },
      {
        path: '/vuex',
        name: 'Vuex',
        component: () => import('@/views/demo/vuex.vue')
      },
      {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/demo/axios.vue')
      }
    ]
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue') // 懒加载组件
  }
]
