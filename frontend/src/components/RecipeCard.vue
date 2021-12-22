<template>
  <div class="col" v-if="recipe" >
    <div class="card shadow-sm">
      <img
        class="card-img-top"
        src="../assets/sulu.png"
        alt="recipePhoto"
        width="100%"
        height="200"
      />

      <div class="card-body">
        <h1 class="card-text fs-2 fw-bold">{{ recipe.title }}</h1>
        <small class="text-muted">
          {{ recipe.mealFor }} Kişilik
          <i class="bi bi-people-fill"></i>
          {{ recipe.cookingTime }}
          <i class="bi bi-alarm"></i>
        </small>
        <div class="d-flex justify-content-center align-items-center"></div>
        <div class="container position-relative" style="z-index: 2">
          <router-link
            class="d-flex link-dark text-decoration-none"
            :to="{
              name: 'Profile',
              params: {
                username: username ? username : recipe.author[0].username,
              },
            }"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="50"
              height="50"
              class="rounded-circle"
            />
            <!-- <p v-if="!username" class="fs-4 ps-3">{{ recipe.author[0].username }}</p>
                        <p v-else class="fs-4 ps-3">{{ username }}</p> -->
          </router-link>
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

<style lang="scss">

</style>
