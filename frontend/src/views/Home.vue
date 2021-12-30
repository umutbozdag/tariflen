<template>
  <div class="container text-start mb-4 display-5">İlginizi Çekebilecek Kategoriler</div>
  <div class="container d-flex justify-content-between">
    
    <category-card v-for="category in categories" :key="category.categoryId" :category="category" />
  </div>
<!-- GUNUN MENUSU -->
  <hr class="featurette-divider" />

  <div class="row featurette justify-content-center position-relative">
    <div class="col-md-3 mt-2">
      <h2 class="featurette-heading display-5">Günün Menüsü</h2>
      <h2 class="featurette-heading text-muted">Kurufasulye Pilav</h2>
    </div>
    <div class="col-md-3">
      <svg
        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
      </svg>
      <!-- <a href="" class="stretched-link"></a> -->
    </div>
  </div>

  <hr class="featurette-divider" />
  <!-- TARIFLER -->

  <div class="container" v-if="recipes && recipes.length">
    <div class="text-start mb-4 display-5">Tarifler</div>

    <div class="row row-cols-1 row-cols-md-4 g-3">
      <recipe-card v-for="recipe in recipes" :key="recipe.recipeId" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { notify } from "@kyvg/vue3-notification";
import CategoryCard from '../components/CategoryCard.vue';
import RecipeCard from '../components/RecipeCard.vue';

export default {
  name: 'Home',
  components: {
    CategoryCard,
    RecipeCard
},
  async mounted() {
    await this.setCategories();
    await this.setRecipes({searchText: '', addQuery: false});
    console.log('recipes', this.recipes)
  },
  methods: {
    ...mapActions(['setCategories', 'setRecipes']),
    test(){
      notify({
        title: "Authorization",
        text: "You have been logged in!",
      })
    }
  },
  computed: {
    ...mapState(['categories', 'recipes'])
  },
};
</script>

<style>
</style>
