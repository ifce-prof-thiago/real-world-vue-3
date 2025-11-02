
import EventListPage from '@/pages/EventListPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListPage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue')
    }
  ],
})

export default router
