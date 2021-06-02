import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/persegi',
    name: 'Persegi',
    component: () => import( '../views/Persegi.vue')
  },
  {
    path: '/lingkaran',
    name: 'Lingkaran',
    component: () => import( '../views/Lingkaran.vue')
  },
  {
    path: '/segitiga',
    name: 'Segitiga',
    component: () => import( '../views/Segitiga.vue')
  },
  {
    path: '/gaji',
    name: 'Gaji',
    component: () => import( '../views/Gaji.vue')
  },
  {
    path: '/nilai',
    name: 'Nilai',
    component: () => import( '../views/Nilai.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
