const routes = [{
    path: '/',
    component: () => import('pages/PassOneDate.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue')
  }
]

export default routes
