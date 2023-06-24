import { createRouter, createWebHistory } from 'vue-router'
import HomeGame from '../views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeGame
    },
  ]
})

export default router
