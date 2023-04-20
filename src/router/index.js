import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue')},
    {path: '/cources', name: 'cources', component: () => import('../views/CourcesView.vue')},
    {path: '/scores', name: 'scores', component: () => import('../views/ScoresView.vue')}
  ]
});

router.beforeEach(async (to, from) => {
  if (!window.localStorage.getItem('accessToken') && to.name !== 'home') {
    return {path: '/'};
  }
})

export default router
