import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddRecipe from '../views/AddRecipe.vue'
import Profile from '../views/Profile.vue'
import RecipeDetail from '../views/RecipeDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tarif-ekle',
    name: 'AddRecipe',
    component: AddRecipe
  },
  {
    path: '/profil',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tarif',
    name: 'RecipeDetail',
    component: RecipeDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
