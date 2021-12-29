<template>
  <div @click="pushToCategoryDetail" class="card shadow">
    <img :src="category.image" class="card-img" alt="zeytin" />
    <div class="card-img-overlay">
      <a href="#" class="text-decoration-none">
        <h2 class="card-title pt-5 mt-5 mb-4 fw-bold">{{ category.title }}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    category: {
      type: Object,
    },
  },
  methods: {
    pushToCategoryDetail() {
      this.$router.push({
        name: "CategoryDetail",
        params: { categoryId: this.category.categoryId },
      });
    },
  },
};
</script>

<style>
.card-title {
  color: white;
  text-shadow: 2px 2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
}
.card {
  border-radius: 1.5vh;
  min-width: 180px;
  max-width: 300px;
}
.card-img {
  border-radius: 1.5vh;
  height: 200px;
}
</style>
