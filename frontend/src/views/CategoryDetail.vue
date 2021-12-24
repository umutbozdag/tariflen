<template>
    <div class="category-detail" v-if="categoryDetail && categoryDetail.recipes">
        <h1>{{ categoryDetail.title }}</h1>

        <recipe-card v-for="recipe in categoryDetail.recipes" :key="recipe.recipeId" :recipe="recipe" />
    </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue";
export default {
    name: "CategoryDetail",
    components: { RecipeCard },
    data() {
        return {
            categoryDetail: null
        }
    },
    async mounted() {
        const response = await this.$axios.get(`http://localhost:3000/category/${this.$route.params.categoryId}`)

        this.categoryDetail = response.data
        console.log(typeof this.categoryDetail.recipes)
    }
}
</script>

<style> </style>