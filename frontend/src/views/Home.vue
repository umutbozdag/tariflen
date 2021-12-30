<template>
  <div class="container text-start mb-4 display-5">İlginizi Çekebilecek Kategoriler</div>
  <div v-if="categories && categories.length" class="container d-flex justify-content-between">
    <category-card
      v-for="category in categories.slice(0, 5)"
      :key="category.categoryId"
      :category="category"
    />
  </div>
  <!-- GUNUN MENUSU -->
  <hr class="featurette-divider" />

  <div @click="goToRecipeDetail" class="row recipe-of-the-day justify-content-center position-relative" v-if="recipeOfTheDay">
    <div class="col-md-4 mt-2">
      <h2 class="featurette-heading display-6">
        Günün Menüsü:
        <span class="fs-3">{{ recipeOfTheDay.title }}</span>
      </h2>
      <div class="featurette-heading text-muted fs-4">{{ recipeOfTheDay.description }}</div>
    </div>
    <div class="col-md-3">
      <img
        :src="
          require(`../../../backend/src/uploads/${recipeOfTheDay.image.originalname}`)
        "
        alt
      />
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
    await this.setRecipes({ searchText: '', addQuery: false });
    console.log('recipes', this.recipes)
  },
  methods: {
    ...mapActions(['setCategories', 'setRecipes']),
    goToRecipeDetail() {
      this.$router.push({ name: 'RecipeDetail', params: { recipeId: this.recipeOfTheDay.recipeId } })
    },
    test() {
      notify({
        title: "Authorization",
        text: "You have been logged in!",
      })
    }
  },
  computed: {
    ...mapState(['categories', 'recipes']),
    recipeOfTheDay() {
      return this.recipes && this.recipes.length && this.recipes[Math.floor(Math.random() * this.recipes.length)];
    }
  },
};
</script>

<style>
.recipe-of-the-day img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}

.recipe-of-the-day:hover {
  cursor: pointer;
  background-color: #f1f0f0;
}
</style>
