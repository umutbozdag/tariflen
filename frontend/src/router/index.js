import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddRecipe from '../views/AddRecipe.vue'
import Profile from '../views/Profile.vue'
import RecipeDetail from '../views/RecipeDetail.vue'
import CategoryDetail from '../views/CategoryDetail.vue'

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
    path: '/profil/:username',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/tarif/:recipeId',
    name: 'RecipeDetail',
    component: RecipeDetail
  },
  {
    path: '/kategori/:categoryId',
    name: 'CategoryDetail',
    component: CategoryDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
