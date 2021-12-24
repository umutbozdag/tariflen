<template>
  <div class="col" v-if="recipe">
    <div class="card shadow-sm">
      <img
        class="card-img-top"
        src="../assets/hamur.png"
        alt="recipePhoto"
        width="100%"
        height="200"
      />
      <!-- <div class="card-img-overlay">
        <h5 class="card-title fw-bold display-6 mt-4" id="test">
          Tarife Git<br />
          <i class="bi bi-box-arrow-in-right"></i>
        </h5>
        <h5 class="card-title fw-bold display-6 mt-4">
          Profile Git<br />
          <i class="bi bi-box-arrow-in-right"></i>
        </h5>

      </div> -->
      <div class="card-body">
        <h1 class="card-text fs-2 fw-bold">{{ recipe.title }}</h1>
        <small class="text-muted">
          {{ recipe.mealFor }} Kişilik
          <i class="bi bi-people-fill"></i>
          {{ recipe.cookingTime }}
          <i class="bi bi-alarm"></i>
        </small>
        <div class="container position-relative" style="z-index: 2">
     
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="50"
              height="50"
              class="rounded-circle"
            />
            <!-- <p v-if="!username" class="fs-4 ps-3">{{ recipe.author[0].username }}</p>
                        <p v-else class="fs-4 ps-3">{{ username }}</p> -->
        </div>
      </div>
      <router-link
        class="d-flex link-dark text-decoration-none stretched-link"
        :to="{
          name: 'RecipeDetail',
          params: {
            recipeId: this.recipe.recipeId,
          },
        }"
      >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
    },
    username: {
      type: String,
    },
  },
};
</script>

<style>
.card-img-overlay {
  visibility: hidden;
}
.card:hover > .card-img-overlay {
  visibility: visible;
  background: linear-gradient(0deg, #00000088 10%, #ffffff44 100%);
  height: 200px;
}
</style>