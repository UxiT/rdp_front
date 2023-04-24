import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue')},
    {path: '/cources', name: 'cources', component: () => import('../views/courses/CourseListView.vue')},
    {path: '/course/:id', name: 'course', component: () => import('../views/courses/CourseView.vue')},
    {path: '/scores', name: 'scores', component: () => import('../views/ScoresView.vue')},
    {path: '/task', name: 'task', component: () => import('../views/TaskView.vue')},
  ]
});

router.beforeEach(async (to, from) => {
  if (!window.localStorage.getItem('accessToken') && to.name !== 'home') {
    return {path: '/'};
  }
})

export default router
