<template>
  <div id="add-recipe" class="container mt-5">
    <div class="form-group row justify-content-center">
      <div class="formBorder p-5">
        <div class="input-group input-group-lg mb-3">
          <input
            type="text"
            id="tarifAd"
            class="form-control"
            placeholder="Tarifin adını yazınız..."
          />
        </div>

        <div class="mb-5">
          <textarea
            class="form-control form-control-lg"
            placeholder="Tarifinizin açıklamasını yapınız..."
          ></textarea>
        </div>

        <h5 class="text-start text-muted">Tarif fotoğrafını yükleyiniz:</h5>
        <div>
          <input
            class="form-control form-control-md"
            id="formFileLg"
            type="file"
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-4">
          <div class="formBorder p-4 mx-5">
            <h5><i class="bi bi-people"></i> Kaç kişilik?</h5>
            <div class="col-3 mx-auto">
              <input type="number" class="form-control me-3" />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="formBorder p-4">
            <h5><i class="bi bi-hourglass"></i> Hazırlama Süresi</h5>
            <div class="d-flex">
              <input type="number" class="form-control me-3" />
              <select class="form-select" aria-label="Default select example">
                <option selected>Lütfen Seçiniz</option>
                <option value="1">Saniye</option>
                <option value="2">Dakika</option>
                <option value="3">Saat</option>
                <option value="4">Gün</option>
                <option value="5">Hafta</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-4 mb-5">
          <div class="formBorder p-4 mx-5">
            <h5><i class="bi bi-stopwatch"></i> Pişirme Süresi</h5>
            <div class="d-flex">
              <input type="number" class="form-control me-3" />
              <select class="form-select" aria-label="Default select example">
                <option selected>Lütfen Seçiniz</option>
                <option value="1">Saniye</option>
                <option value="2">Dakika</option>
                <option value="3">Saat</option>
                <option value="4">Gün</option>
                <option value="5">Hafta</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3><i class="bi bi-list-ul"></i> Malzemeler</h3>
        <div class="formBorder p-5 mx-5">
          <ingredient-row v-for="(ingredient, i) in ingredients" :key="i" />
          <div class="d-flex justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-lg rounded-pill btn-outline-primary"
              @click="addIngredientRow"
            >
              <i class="bi bi-bag-plus"></i>
              Malzeme ekle
            </button>
          </div>
        </div>
      </div>

      <div class="pt-5">
        <h3><i class="bi bi-question-circle"></i> Nasıl Yapılır</h3>
        <!-- ho -->
        <div class="formBorder p-5 mx-5">
          <div class="d-flex justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-lg rounded-pill btn-outline-primary"
              @click="addIngredientRow"
            >
              <i class="bi bi-journal-plus"></i>
              Adım Ekle
            </button>
          </div>
        </div>
      </div>

      <div class="fixed-bottom">
        <div class="text-end m-5">
          <button
            type="submit"
            class="btn btn-lg rounded-pill btn-success sendRecipeBtn"
            @click="addIngredientRow"
          >
          <i class="bi bi-chevron-double-right"></i>

            Tarifi Gönder
            <i class="bi bi-bag-check"></i>
          </button>
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
      ingredients: [
        {
          text: "Test",
          link: "link",
        },
      ],
    };
  },
  methods: {
    addIngredientRow() {
      this.ingredients.push({
        text: "",
        link: "",
      });
    },
  },
};
</script>

<style scoped>
.formBorder {
  border: 1px dashed #2c3e50;
  border-radius: 1em;
}
.sendRecipeBtn{
  animation: wiggle 2.5s ease-out infinite;
  animation-delay: 5s;
  box-shadow: 0px 0px 15px rgba(0, 255, 64, 0.5);

}
.sendRecipeBtn:hover{
  animation: none;
}
@keyframes wiggle {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-10deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-5deg);
  }
  30% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-2deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}

</style>
