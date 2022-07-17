import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 布局，全局布局
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/guide',
    children: [
      {
        path: 'guide',
        component: () => import('@/views/guide/index'),
        name: 'guide'
      },
      {
        path: 'demo',
        component: () => import('@/views/demo/index'),
        name: 'demo'
      },
      {
        path: 'test',
        component: () => import('@/views/test/index'),
        name: 'test'
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history', // 可以设置为history或者hash两种模式，设置为hash地址栏有#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
