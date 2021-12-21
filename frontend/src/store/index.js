import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

export default createStore({
  state: {
    currentUser: null,
    error: null,
    categories: null,
    recipes: null,
    recipeDetail: null,
    userDetail: null
  },
  mutations: {
    setUserHandler(state, user) {
      state.currentUser = user
    },
    setErrorHandler(state, error) {
      state.error = error
    },
    setCategoriesHandler(state, categories) {
      state.categories = categories
    },
    setRecipesHandler(state, recipes) {
      state.recipes = recipes
    },
    setRecipeDetailHandler(state, recipeDetail) {
      state.recipeDetail = recipeDetail
    },
    setUserDetailHandler(state, userDetail) {
      state.userDetail = userDetail
    }
  },
  actions: {
    setUser({commit}, user) {
      commit('setUserHandler', user)
    },
    async createUser({ commit }, { email, password, username, name, lastName }) {
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const response = await axios.post(`http://localhost:3000/user`, {
          name,
          lastName,
          email,
          username
        })

        commit('setUserHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)

      }
    },

    async signInUser({ commit }, { email, password }) {
      const auth = getAuth();

      try {
        await signInWithEmailAndPassword(auth, email, password)
        const response = await axios.get(`http://localhost:3000/user/${email}`)
        console.log('user', response.data)
        commit('setUserHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)
      }
    },

    async setCategories({ commit }) {
      try {
        const response = await axios.get(`http://localhost:3000/category`);
        commit('setCategoriesHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)
      }
    },
    async setRecipes({ commit }) {
      try {
        const response = await axios.get(`http://localhost:3000/recipe`);
        commit('setRecipesHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)
      }
    },
    async setRecipeDetail({ commit }, recipeId) {
      try {
        const response = await axios.get(`http://localhost:3000/recipe/${recipeId}`);
        commit('setRecipeDetailHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)
      }
    },
    async setUserDetail({commit}, username) {
      try {
        const response = await axios.get(`http://localhost:3000/user/profile/${username}`);
        commit('setUserDetailHandler', response.data)
      } catch (error) {
        commit('setErrorHandler', error)
      }
    }
  },
  modules: {
  }
})
