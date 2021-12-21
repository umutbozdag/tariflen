<template>
    <div class="col" v-if="recipe" @click="pushToRecipeDetail">
        <div class="card shadow-sm">
            <svg
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
            >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>

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
                    class="d-flex link-dark text-decoration-none stretched-link"
                        :to="{ name: 'Profile', params: { username: username ? username : recipe.author[0].username } }"
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object
        },
        username: {
            type: String
        }
    },
    methods: {
        pushToRecipeDetail() {
            this.$router.push({ name: 'RecipeDetail', params: { recipeId: this.recipe.recipeId } })
        }
    }
}
</script>

<style lang="scss">
.card {
    cursor: pointer;
}
</style>
