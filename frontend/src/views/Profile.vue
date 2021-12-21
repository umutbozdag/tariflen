<template>
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
        <h1 class="display-1">Burak Yücel</h1>
        <div class="d-flex mx-auto">
          <p class="profileDetail display-6 mt-3 ps-2">
            10 Tarif
            <i class="bi bi-egg"></i>
          </p>
          <p class="profileDetail display-6 mt-3 ps-2 ms-3">
            10 Takipçi
            <i class="bi bi-people"></i>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- DIVIDER -->

  <article class="profileNav mt-4" id="navs">
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
            >
              Tariflerim
            </button>
            <button
              class="nav-link"
              id="nav-favTariflerim-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-favTariflerim"
              type="button"
              role="tab"
              aria-controls="nav-favTariflerim"
              aria-selected="false"
            >
              Favori Tariflerim
            </button>
            <button
              class="nav-link"
              id="nav-followers-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-followers"
              type="button"
              role="tab"
              aria-controls="nav-followers"
              aria-selected="false"
            >
              Takipçilerim
            </button>
            <button
              class="nav-link"
              id="nav-followlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-followlist"
              type="button"
              role="tab"
              aria-controls="nav-followlist"
              aria-selected="false"
            >
              Takip Ettiklerim
            </button>
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
                  v-for="i in 5"
                  :key="i"
                  recipe-title="Tarif Ad"
                  profile-name="Burak"
                  meal-for="2"
                  meal-prep-time="30"
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
                  v-for="i in 5"
                  :key="i"
                  recipe-title="Tarif Ad"
                  profile-name="Burak"
                  meal-for="2"
                  meal-prep-time="30"
                />
              </div>
            </div>
          </div>

          <!-- Takipçiler -->

          <div
            class="tab-pane fade"
            id="nav-followers"
            role="tabpanel"
            aria-labelledby="nav-followers-tab"
          >
            <div class="container justify-content-center">
              <div class="row row-cols-1 row-cols-md-4 g-3">
                <follower-card v-for="i in 5" :key="i" profileName="Burak" />
              </div>
            </div>
          </div>

          <!-- takip ettiklerim -->
          <div
            class="tab-pane fade"
            id="nav-followlist"
            role="tabpanel"
            aria-labelledby="nav-followlist-tab"
          >
            <div class="container justify-content-center">
              <div class="row row-cols-1 row-cols-md-4 g-3">
                <follower-card v-for="i in 5" :key="i" profileName="Umut" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
import FollowerCard from "../components/FollowerCard.vue";
export default {
  components: {
    RecipeCard,
    FollowerCard,
  },
};
</script>

<style>
.profileDetail {
  border-left: 10px solid #00c2ff;
}
</style>
