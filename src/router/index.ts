import { usePermissionsStore } from '@/stores/permissions'
// import { useRequestStore } from '@/stores/request'
import { createRouter, createWebHashHistory, type RouteMeta } from 'vue-router'

// 路由名称与权限名称必须一致
export enum RouteName {
  HOME = 'home',
  WEBGATE = 'webgate',
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
      name: RouteName.HOME,
      redirect: '/webgate'
    },
    {
      path: '/webgate',
      name: RouteName.WEBGATE,
      component: () => import('@/views/index.vue')
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
  // useRequestStore().clearPendingRequest()
  // const { permissions } = usePermissionsStore()
  const name = to.name as string

  // if (to.meta.auth !== false && !permissions.includes(name)) {
  //   return { name: RouteName.NOPERMISSIONS }
  // }
})

export default router
