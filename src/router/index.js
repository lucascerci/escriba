// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        beforeEnter: (to, from, next) => {
          next("/customers");
        }
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
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/Error/PageNotFound.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
