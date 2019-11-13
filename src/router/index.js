import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/People.vue')
  },
  {
    path: '/planets',
    name: 'planets',
    component: () => import('../views/Planets.vue')
  },
  {
    path: '/star-ships',
    name: 'star-ships',
    component: () => import('../views/StarShips.vue')
  },
  {
    path: '/star-ships/:name',
    name: 'star-ship',
    component: () => import('../views/Ship.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
