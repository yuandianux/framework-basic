import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./../views/Home/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./../views/About/About.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./../views/404/NotFound.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
