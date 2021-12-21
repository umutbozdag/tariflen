<template>
  <div class="row justify-content-center" v-if="recipeDetail">
    <!--  -->
    <div class="col-md-2">
      <img
        src="../assets/zeytin.png"
        alt="mdo"
        width="200"
        height="200"
        class="rounded-circle shadow"
      />
      <button
        v-if="currentUser && showAddToFavorites"
        class="btn btn-light btn-outline-danger fw-bold rounded-pill mt-3"
        @click="addToFavorites"
      >
        <i class="bi bi-bookmark-heart"></i> Favorilerime Ekle
      </button>
      <button
        v-if="currentUser && !showAddToFavorites"
        class="btn btn-danger fw-bold rounded-pill mt-3"
        @click="removeFromFavorites"
      >
        <i class="bi bi-bookmark-heart"></i> Favorilerimden Çıkar
      </button>
    </div>
    <!-- Tarif -->
    <div class="col-md-5">
      <h1 class="text-start fw-bold">{{ recipeDetail.title }}</h1>
      <p class="text-muted text-start">{{ recipeDetail.description }}</p>
      <div class="d-flex">
        <h3 class="profileDetail mt-1 ps-2">
          {{ recipeDetail.mealFor }} Kişilik
          <i class="bi bi-people-fill"></i>
        </h3>
        <h3 class="profileDetail mt-1 ms-5 ps-2">
          {{ recipeDetail.cookingTime }}
          <i class="bi bi-alarm"></i>
        </h3>
      </div>
    </div>
    <!-- profil -->
    <div
      class="col-md-2 align-self-center"
      v-if="recipeDetail.author[0].username === currentUser && currentUser.username"
    >
      <div class="picture d-flex">
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="100"
          height="100"
          class="rounded-circle shadow"
        />
        <div class="ps-2 align-self-center">
          <h2 class="fw">{{ recipeDetail.author[0].username }}</h2>
          <a class="btn btn-outline-dark rounded-pill" href="#" role="button">
            <i class="bi bi-person-plus"></i>
            Takip Et
          </a>
        </div>
      </div>
    </div>

    <hr class="featurette-divider" />

    <div class="container text-start">
      <h1>
        <i class="bi bi-bag-check"></i>
        Malzemeler
      </h1>
      <ul class="list-group list-group-flush text-nowrap fs-5 malzemeler">
        <li class="list-group-item d-flex ms-4">
          <i class="bi bi-chevron-right"></i>
          2 Adet Yumurta
          <button
            class="btn btn-sm ms-5 fw-bold rounded-pill btn-outline-success"
          >
            <i class="bi bi-cart-plus"></i>
            Mağazada Göster
          </button>
        </li>
      </ul>
    </div>

    <hr class="featurette-divider" />

    <div class="container text-start">
      <h1>
        <i class="bi bi-patch-question"></i>
        Nasıl Yapılır ?
      </h1>
      <ol class="list-group list-group-flush text-nowrap fs-4">
        <li class="list-group-item ms-4">
          <div class="d-flex">
            <h2 class="orderedList text-center me-3">1</h2>Bol suda yıkayıp kök kısmını aldığınız ve yapraklarını temizlediğiniz karnabaharı küçük çiçeklerine ayırın.
          </div>
          <div class="d-flex">
            <img
              src="../assets/zeytin.png"
              class="mx-auto shadow-sm"
              alt
              width="500em"
              style="border-radius: 25px;
"
            />
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>import { mapActions, mapState } from "vuex";

export default {
  name: 'RecipeDetail',
  async mounted() {
    await this.setRecipeDetail(this.$route.params.recipeId)
  },
  methods: {
    ...mapActions(['setRecipeDetail', 'setUser']),
    addToFavorites() {
      this.$axios.put(`/user/${this.currentUser.email}`, {
        favorites: [...this.currentUser.favorites, this.recipeDetail]
      }).then(response => {
        this.setUser(response.data)
      })
    },
    removeFromFavorites() {
      let favoriteIndex = this.currentUser.favorites.findIndex(favorite => favorite.recipeId === this.recipeDetail.recipeId);

      if (favoriteIndex > -1) {
        this.currentUser.favorites.splice(favoriteIndex, 1);

        this.$axios.put(`/user/${this.currentUser.email}`, {
          favorites: [...this.currentUser.favorites]
        }).then(response => {
          this.setUser(response.data)
        })
      }
    }
  },
  computed: {
    ...mapState(['recipeDetail', 'currentUser']),
    showAddToFavorites() {
      let favoriteIndex = this.currentUser.favorites.findIndex(favorite => favorite.recipeId === this.recipeDetail.recipeId)

      if (favoriteIndex > -1) {
        return false
      }
      return true
    }
  }
};
</script>

<style>
.malzemeler {
  width: 30%;
}
.orderedList {
  border: 1px solid #2c3e50;
  min-width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
}
</style>
