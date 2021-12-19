import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default createStore({
  state: {
    currentUser: null
  },
  mutations: {
    setUserHandler(state, user) {
      state.currentUser = user
    }
  },
  actions: {
    createUser({ commit }, { email, password }) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // TODO: save this user to db 
          commit('setUserHandler', user)
          // ...
        })
        .catch(() => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // ..
        });
    },

    signInUser({ commit }, { email, password }) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          commit('setUserHandler', user)
          // ...
        })
        .catch(() => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });

    }
  },
  modules: {
  }
})
