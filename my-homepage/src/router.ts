import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('./views/Main.vue')
  },
  {
    path: '/mac',
    name: 'Mac',
    component: () => import('./views/Mac.vue')
  },
  {
    path: '/windows',
    name: 'Windows',
    component: () => import('./views/Windows.vue')
  },
  {
    path: '/git',
    name: 'Git',
    component: () => import('./views/Git.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('./views/Other.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router