const routes = [{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '/one',
        component: () => import('pages/PassOneDate.vue')
      },
      {
        path: '/two',
        component: () => import('pages/PassTwoDate.vue')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('layouts/MainLayout.vue')
  }
]

export default routes
