export default [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    name: 'home',
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
    name: 'not-found',
  },
]
