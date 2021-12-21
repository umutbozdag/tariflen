<template>
  <div v-if="userDetail">
    <div class="container mt-5">
      <div class="picture d-inline-flex justify-content-center">
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="200"
          height="200"
          class="rounded-circle shadow"
        />
        <div class="ps-5">
          <h1 class="display-1">{{ userDetail.name }} {{ userDetail.lastName }}</h1>
          <div class="d-flex mx-auto">
            <p class="profileDetail display-6 mt-3 ps-2">
              {{ userDetail.recipes.length }} Tarif
              <i class="bi bi-egg"></i>
            </p>
            <p class="profileDetail display-6 mt-3 ps-2 ms-3">
              {{ userDetail.followers.length }} Takipçi
              <i class="bi bi-people"></i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- DIVIDER -->

    <article class="profileNav mt-5" id="navs">
      <div>
        <div class="profileNav">
          <nav>
            <div
              class="nav pb-0 btn-lg nav-tabs mb-3 justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link active"
                id="nav-tariflerim-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-tariflerim"
                type="button"
                role="tab"
                aria-controls="nav-tariflerim"
                aria-selected="true"
              >Tariflerim</button>
              <button
                class="nav-link"
                id="nav-favTariflerim-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-favTariflerim"
                type="button"
                role="tab"
                aria-controls="nav-favTariflerim"
                aria-selected="false"
              >Favori Tariflerim</button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >Takipçiler</button>
            </div>
          </nav>

          <!-- TARIFLERIM -->

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-tariflerim"
              role="tabpanel"
              aria-labelledby="nav-tariflerim-tab"
            >
              <div class="container justify-content-center">
                <div class="row row-cols-1 row-cols-md-4 g-3">
                  <recipe-card
                    v-for="recipe in userDetail.recipes"
                    :key="recipe.recipeId"
                    :recipe="recipe"
                    :username="userDetail.username"
                  />
                </div>
              </div>
            </div>

            <!-- FAVORI TARIFLERIM -->

            <div
              class="tab-pane fade"
              id="nav-favTariflerim"
              role="tabpanel"
              aria-labelledby="nav-favTariflerim-tab"
            >
              <div class="container justify-content-center">
                <div class="row row-cols-1 row-cols-md-4 g-3">
                  <recipe-card
                    v-for="recipe in userDetail.favorites"
                    :key="recipe.recipeId"
                    :recipe="recipe"
                  />
                </div>
              </div>
            </div>

            <!-- Takipçiler -->

            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div class="container justify-content-center">
                <div class="row row-cols-1 row-cols-md-4 g-3">
                  <follower-card v-for="follower in userDetail.followers" :key="follower.userId" :profileName="follower.username"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import RecipeCard from '../components/RecipeCard.vue';
import FollowerCard from '../components/FollowerCard.vue';
export default {
  name: 'Profile',
  components: {
    RecipeCard,
    FollowerCard
  },
  methods: {
    ...mapActions(['setUserDetail'])
  },
  computed: {
    ...mapState(['userDetail', 'currentUser'])
  },

  async mounted() {
    this.setUserDetail(this.$route.params.username)
  }
};
</script>

<style>
.profileDetail {
  border-left: 10px solid #00c2ff;
}
</style>
