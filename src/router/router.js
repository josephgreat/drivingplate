import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LandingPage from '../components/pages/LandingPage.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/library',
      name: 'library',
      // route level code-splitting
      // this generates a separate chunk (library.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/Library.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (faq.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/FaqPage.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (faq.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../components/pages/ContactUs.vue')
      },
  ]
})

export default router
