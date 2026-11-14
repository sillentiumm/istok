import { createRouter, createWebHistory } from 'vue-router'
import GuidePage from '../pages/GuidePage.vue'

const routes = [
  {
    path: '/',
    name: 'guide',
    component: GuidePage
  }
]

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory('/istok/'),
  // /istok/'
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
