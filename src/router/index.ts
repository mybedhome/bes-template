import { createRouter, createWebHashHistory, type RouteMeta } from 'vue-router'
import requestStore from '@/utils/requestStore'
// import DefaultHeader from '@/layouts/header/DefaultHeader.vue'
import LayoutComponent from '@/layouts/index.vue'
// 路由名称与权限名称必须一致
export enum RouteName {
  INDEX = 'index',
  HOME = 'home',
  WEBGATE = 'webgate',
  TABLE = 'table',
  NOTFOUND = 'not-found',
  NOPERMISSIONS = 'no-permissions'
}

export type CustomRouteMeta = RouteMeta & {
  transitionName: string
}

const router = createRouter({
  history: createWebHashHistory('/'),
  routes: [
    {
      path: '/',
      name: RouteName.INDEX,
      redirect: '/webgate'
    },
    {
      path: '/webgate',
      name: RouteName.WEBGATE,
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: () => import('@/views/index.vue')
        }
      ]
    },
    {
      path: '/table',
      name: RouteName.TABLE,
      component: () => import('@/views/table/index.vue')
    },
    {
      path: '/no-permissions',
      name: RouteName.NOPERMISSIONS,
      component: () => import('@/views/error/NoPermissions.vue'),
      meta: { auth: false }
    },
    {
      path: '/:pathMatch*',
      name: RouteName.NOTFOUND,
      component: () => import('@/views/error/NotFound.vue'),
      meta: { auth: false }
    }
  ]
})

router.beforeEach((to) => {
  console.log('to', to)
  requestStore.clearPendingRequest()
  // const { permissions } = usePermissionsStore()
  // const name = to.name as string

  // if (to.meta.auth !== false && !permissions.includes(name)) {
  //   return { name: RouteName.NOPERMISSIONS }
  // }
})

export default router
