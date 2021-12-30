<template>
  <div id="app">
    <navbar />
    <router-view :key="$route.fullPath" />
    <notifications position="top center"/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { mapMutations, mapState } from "vuex";
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  methods: {
    ...mapMutations(['setUserHandler'])
  },
  computed: {
    ...mapState(['currentUser'])
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        if (!this.currentUser) {
          this.$axios.get(`http://localhost:3000/user/${user.email}`).then(response => {
            this.setUserHandler(response.data);
          })
        }
      } else {
        this.setUserHandler(null);
        console.log('no user')
      }
    });
    console.log('mount')
  }
}
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
  font-family: "Dosis", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.profile_logo {
  list-style-type: none;
}
body {
  padding-top: 4rem;
}

.rounded-circle {
  object-fit: cover;
}

</style>
