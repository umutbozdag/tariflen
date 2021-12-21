<template>
  <div class="col">
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
        <h1 class="card-text fs-2 fw-bold">{{ recipeTitle }}</h1>
        <small class="text-muted">
          {{ mealFor }} Kişilik
          <i class="bi bi-people-fill"></i>
          {{ mealPrepTime }} Dakika <i class="bi bi-alarm"></i
        ></small>
        <div class="d-flex justify-content-center align-items-center"></div>
        <div class="container position-relative" style="z-index: 2">
          <a
            href="#hey"
            class="d-flex link-dark text-decoration-none stretched-link"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="50"
              height="50"
              class="rounded-circle"
            />
            <p class="fs-4 ps-3">{{ profileName }}</p>
          </a>
        </div>
        <a href="#endis" class="stretched-link"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipeTitle: {
      type: String,
    },
    profileName: {
      type: String,
    },
    mealFor: {
      type: String,
    },
    mealPrepTime: {
      type: String,
    },
  },
};
</script>

<style></style>
