// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Customers/CustomersView.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Products/ProductsView.vue'),
      },
      {
        path: '/requests',
        name: 'requests',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Requests/RequestsView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
