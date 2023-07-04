const routes = [{
    path: '/',
    component: () => import('pages/PassTwoDate.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/PassTwoDate.vue')
  }
]

export default routes
