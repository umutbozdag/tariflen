<template>
  <div class="ingredient-row d-flex mb-5">
    <button class="btn btn-outline-danger rounded-circle me-3">
      <i class="bi bi-bag-dash"></i>
    </button>
    <input type="text" class="form-control me-5 ingredient-name" />

    <v-select
      label="name"
      :filterable="false"
      :options="options"
      v-model="selectedIngredient"
      @search="onSearch"
    >
      <template #no-options>Malzeme aramak için yazınız...</template>
      <template #option="option">
        <div class="d-center">
          <img :src="option.imageURL" />
          <span>{{ option.name }}</span>
        </div>
      </template>
      <template #selected-option="option">
        <div class="selected d-center">
          <img :src="option.imageURL" />
          <span>{{ option.name }}</span>
        </div>
      </template>
    </v-select>
  </div>
</template>

<script>
import _ from "lodash";
import { mapActions, mapState } from "vuex";

export default {
  name: "IngredientsRow",
  data() {
    return {
      options: [],
      selectedIngredient: null,
    };
  },
  watch: {
    selectedIngredient(ingredient) {
      this.$emit("ingredient-selected", ingredient);
    },
  },
  methods: {
    ...mapActions(["getIngredients"]),
    onSearch(search, loading) {
      if (search.length) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: _.debounce(async function (loading, search, vm) {
      console.log(this);
      await this.getIngredients(search);

      vm.options = this.ingredients;

      loading(false);
    }, 350),
  },
  computed: {
    ...mapState(["ingredients"]),
  },
};
</script>

<style lang="scss" scoped>
img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected img {
  width: 60px;
  object-fit: cover;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select {
  width: 100%;
}

.v-select .dropdown li {
  width: 100%;
  border-bottom: 1px solid red !important;
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  font-size: 1.25em;
  color: #3c3c3c;
  background-color: red;
  overflow-wrap: break-word;
}
</style>
