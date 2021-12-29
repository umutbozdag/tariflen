<template>
  <div class="category-detail container" v-if="categoryDetail && categoryDetail.recipes">
    <h1 class="fw-bold">{{ categoryDetail.title }}</h1>
    <div class="row row-cols-1 row-cols-4 g-3">

    <recipe-card
      v-for="recipe in categoryDetail.recipes"
      :key="recipe.recipeId"
      :recipe="recipe"
    />

    </div>
  </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
export default {
  name: "CategoryDetail",
  components: { RecipeCard },
  data() {
    return {
      categoryDetail: null,
    };
  },
  async mounted() {
    const response = await this.$axios.get(
      `http://localhost:3000/category/${this.$route.params.categoryId}`
    );

    this.categoryDetail = response.data;
    console.log(typeof this.categoryDetail.recipes);
  },
};
</script>

<style></style>
