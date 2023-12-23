const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/two',
    component: () => import('pages/PassTwoDate.vue')
  },
  {
    path: '/one',
    component: () => import('pages/PassOneDate.vue')
  },
  {
    path: '/task',
    component: () => import('pages/TaskPage.vue')
  },
  {
    path: '/admintask',
    component: () => import('pages/AdminTaskPage.vue')
  },

]

export default routes
