<template>
  <div class="col" v-if="recipe">
    <div class="card shadow-sm">
      <img
        class="card-img-top"
        v-if="recipe.image"
        :src="
          require(`../../../backend/src/uploads/${recipe.image.originalname}`)
        "
        alt="recipePhoto"
        width="100%"
        height="200"
      />
      <div class="card-img-overlay"></div>
      <div class="card-body">
        <h1 class="card-text fs-2 fw-bold">{{ recipe.title }}</h1>
        <small class="text-muted">
          <i class="bi bi-people-fill"></i>
          {{ recipe.mealFor }} Kişilik
          <i class="bi bi-alarm ms-2"></i>
          {{ recipe.cookingTime }}
        </small>
        <div class="container position-relative d-flex mt-3" style="z-index: 2">
          <user-avatar :username="recipe.author.username" />
          <div class="d-flex flex-column ms-2">
            <router-link :to="{name: 'Profile', params: {username: recipe.author.username}}" class="fs-4">{{ recipe.author.username }}</router-link>
            <span>{{getRecipeDate(recipe.createdAt)}}</span>
          </div>
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
      ></router-link>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import UserAvatar from "./UserAvatar.vue";

export default {
  name: "RecipeCard",
  components: { UserAvatar },
  props: {
    recipe: {
      type: Object,
    },
  },
  methods: {
    getRecipeDate(createdAt) {
      return dayjs().to(dayjs(createdAt));
    }
  }
};
</script>

<style scoped>
.card-img-overlay {
  opacity: 0.8;
  visibility: hidden;
}
.card:hover > .card-img-overlay {
  visibility: visible;
  background: linear-gradient(0deg, #ff01015b 10%, #ffffff44 100%);
  height: 200px;
}
</style>
