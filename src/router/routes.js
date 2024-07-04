const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    path: '/admin',
    component: () => import('pages/auth.vue')
  },
  {
    path: '/two',
    component: () => import('pages/webAppTg/PassTwoDate.vue')
  },
  {
    path: '/one',
    component: () => import('pages/webAppTg/PassOneDate.vue')
  },
  {
    path: '/task',
    component: () => import('pages/webAppTg/TaskPage.vue')
  },
  {
    path: '/admintask',
    component: () => import('pages/webAppTg/AdminTaskPage.vue')
  },
  {
    path: '/eror',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/reports',
    component: () => import('pages/webAppTg/ReportPage.vue')

  },
  {
    path: '/table',
    component: () => import('pages/webAppTg/modal/Table.vue')

  },
  {
    path: '/inventory',
    component: () => import('pages/webAppTg/InventoryPage.vue')

  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue')
  }
]

export default routes
