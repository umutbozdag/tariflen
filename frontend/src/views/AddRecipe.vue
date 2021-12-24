<template>
  <div id="add-recipe" class="container mt-5">
    <div class="form-group row justify-content-center">
      <div class="input-group input-group-lg mb-3">
        <input type="text" class="form-control" placeholder="Tarif adi" />
      </div>

            <div class="mb-5">
        <textarea class="form-control form-control-lg" placeholder="Tarif açıklaması..."></textarea>
      </div>

      <div>
        <input class="form-control form-control-lg" id="formFileLg" type="file" />
      </div>

      <div class="row mt-5">
        <div class="col-4">
          <h5>Kaç kişilik?</h5>
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-4">
          <div>
            <h5>Hazırlama Süresi</h5>
            <div class="d-flex">
              <input type="number" class="form-control me-3" />
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-4 mb-5">
          <div>
            <h5>Pişirme Süresi</h5>
            <div class="d-flex">
              <input type="number" class="form-control me-3" />
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Malzemeler</h3>
        <ingredient-row v-for="(ingredient, i) in ingredients" :key="i" />

        <div class="d-flex justify-content-end mt-5">
          <button type="button" class="btn btn-primary" @click="addIngredientRow">Malzeme ekle</button>
        </div>
      </div>

        <div>
        <h3>Nasıl Yapılır</h3>
        <!-- <ho -->
        <div class="d-flex justify-content-end mt-5">
          <button type="button" class="btn btn-primary" @click="addIngredientRow">Malzeme ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IngredientRow from "../components/IngredientRow.vue";

export default {
  name: "AddRecipe",
  components: { IngredientRow },
  data() {
    return {
      ingredients: [{
        text: 'Test',
        link: 'link'
      }]
    }
  },
  methods: {
    addIngredientRow() {
      this.ingredients.push({
        text: '',
        link: ''
      })
    }
  }
}
</script>

<style>
</style>