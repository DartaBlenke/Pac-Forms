import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Roupas',
    name: 'Clothes',
    component: () => import(/* webpackChunkName: "Clothes" */ '../views/ClothesForms.vue')
  },{
    path: '/Comidas',
    name: 'Food',
    component: () => import(/* webpackChunkName: "Food" */ '../views/FoodForms.vue')
  },
  {
    path: '/Brinquedos',
    name: 'Toy',
    component: () => import(/* webpackChunkName: "Toy" */ '../views/ToyForms.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
