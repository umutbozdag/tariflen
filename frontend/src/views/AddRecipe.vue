<template>
  <div id="add-recipe" class="container mt-5">
    <div class="form-group row justify-content-center">
      <div class="formBorder p-5">
        <div class="input-group input-group-lg mb-3">
          <input
            v-model="recipeTitle"
            type="text"
            id="tarifAd"
            class="form-control"
            placeholder="Tarifin adını yazınız..."
          />
        </div>

        <div class="mb-5">
          <textarea
            v-model="recipeDesc"
            class="form-control form-control-lg"
            placeholder="Tarifinizin açıklamasını yapınız..."
          ></textarea>
        </div>

        <h5 class="text-start text-muted">Tarifin ait olduğu kategoriyi seçiniz:</h5>
        <div class>
          <select v-model="selectedCategory" class="form-select" placeholder="Kategori seçiniz...">
            <option value="null" selected>Lütfen Kategori Seçiniz</option>
            <option
              v-for="category in categories"
              :key="category.categoryId"
              :value="category"
            >{{ category.title }}</option>
          </select>
        </div>

        <h5 class="text-start text-muted mt-3">Tarif fotoğrafı yükleyiniz:</h5>
        <div>
          <input
            class="form-control form-control-md"
            id="formFileLg"
            type="file"
            name="file"
            accept="image/*"
            @change="uploadFile"
            ref="file"
          />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-4">
          <div class="formBorder p-4 mx-5">
            <h5>
              <i class="bi bi-people"></i> Kaç kişilik?
            </h5>
            <div class="col-3 mx-auto">
              <input v-model="mealFor" type="number" class="form-control me-3" />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="formBorder p-4">
            <h5>
              <i class="bi bi-hourglass"></i> Hazırlama Süresi
            </h5>
            <div class="d-flex">
              <input v-model="cookingTimeNumber" type="number" class="form-control me-3" />
              <select
                v-model="cookingTimeText"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Lütfen Seçiniz</option>
                <option value="Saniye">Saniye</option>
                <option value="Dakika">Dakika</option>
                <option value="Saat">Saat</option>
                <option value="Gün">Gün</option>
                <option value="Hafta">Hafta</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-4 mb-5">
          <div class="formBorder p-4 mx-5">
            <h5>
              <i class="bi bi-stopwatch"></i> Pişirme Süresi
            </h5>
            <div class="d-flex">
              <input v-model="preparationTimeNumber" type="number" class="form-control me-3" />
              <select
                v-model="preparationTimeText"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Lütfen Seçiniz</option>
                <option value="Saniye">Saniye</option>
                <option value="Dakika">Dakika</option>
                <option value="Saat">Saat</option>
                <option value="Gün">Gün</option>
                <option value="Hafta">Hafta</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>
          <i class="bi bi-list-ul"></i> Malzemeler
        </h3>
        <div class="formBorder p-5 mx-5">
          <ingredient-row
            v-for="(ingredient, index) in ingredients"
            :key="index"
            :index="index"
            @delete-row="handleOnIngredientDeleteRow"
            @ingredient-updated="handleOnIngredientUpdated"
          />
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

      <div class="m-5">
        <h3>
          <i class="bi bi-question-circle"></i> Nasıl Yapılır
        </h3>
        <div class="formBorder p-5 mx-5">
          <instruction-step-row
            v-for="(instruction, i) in instructions"
            :key="i"
            :step="i + 1"
            :index="i"
            @delete-row="handleOnInstructionDeleteRow"
            @instruction-updated="handleOnInstructionUpdated"
          />

          <div class="d-flex justify-content-center mt-5">
            <button
              type="button"
              class="btn btn-lg rounded-pill btn-outline-primary"
              @click="addInstructionStepRow"
            >
              <i class="bi bi-journal-plus"></i>
              Adım Ekle
            </button>
          </div>
        </div>
      </div>

      <div>
        <div class="text-end m-5">
          <button @click="sendRecipe" class="btn btn-lg rounded-pill btn-success sendRecipeBtn">
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
import InstructionStepRow from "../components/InstructionStepRow.vue";
import IngredientRow from "../components/IngredientRow.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "AddRecipe",
  components: { InstructionStepRow, IngredientRow },
  data() {
    return {
      ingredients: [
        {
          title: "",
          ingredient: null,
        },
      ],
      instructions: [
        {
          text: "",
        },
      ],
      cookingTimeNumber: null,
      cookingTimeText: "",
      mealFor: null,
      preparationTimeNumber: null,
      preparationTimeText: "",
      recipeTitle: "",
      recipeDesc: "",
      recipeImage: null,
      selectedCategory: null,
    };
  },
  async mounted() {
    await this.setCategories();
  },
  methods: {
    ...mapActions(["setCategories"]),
    async sendRecipe() {
      const formData = new FormData();
      formData.append("file", this.recipeImage);

      const recipeResponse = await this.$axios.post(
        `http://localhost:3000/recipe`,
        {
          title: this.recipeTitle,
          description: this.recipeDesc,
          ingredients: this.ingredients,
          instructions: this.instructions,
          cookingTime: `${this.cookingTimeNumber} ${this.cookingTimeText}`,
          preparationTime: `${this.preparationTimeNumber} ${this.preparationTimeText}`,
          mealFor: this.mealFor,
          authorId: this.currentUser.userId,
          categoryId: this.selectedCategory.categoryId,
          author: {
            username: this.currentUser.username,
            authorId: this.currentUser.userId,
            name: this.currentUser.name,
            lastName: this.currentUser.lastName
          }
        }
      );

      await this.$axios.post(
        `http://localhost:3000/recipe/${recipeResponse.data.recipeId}/upload`,
        formData
      );

      this.$router.push({ name: 'RecipeDetail', params: { recipeId: recipeResponse.data.recipeId } })
    },
    handleOnIngredientUpdated(ingredient) {
      this.ingredients[ingredient.index] = ingredient;
    },
    handleOnInstructionUpdated(instruction) {
      this.instructions[instruction.index] = instruction;
    },
    uploadFile() {
      this.recipeImage = this.$refs.file.files[0];
    },
    pushEmptyIngredient() {
      this.ingredients.push({
        title: "",
        ingredient: null,
      });
    },
    handleOnIngredientDeleteRow(index) {
      this.ingredients.splice(index, 1);
    },
    handleOnInstructionDeleteRow(index) {
      this.instructions.splice(index, 1);
    },
    addIngredientRow() {
      this.pushEmptyIngredient();
    },
    addInstructionStepRow() {
      this.instructions.push({
        text: "",
      });
    },
  },
  computed: {
    ...mapState(["currentUser", "categories"]),
  },
};
</script>

<style scoped>
html {
  margin-bottom: 65px;
}
.formBorder {
  border: 1px dashed #2c3e50;
  border-radius: 1em;
}
.sendRecipeBtn {
  animation: wiggle 2.5s ease-out infinite;
  box-shadow: 2px 1px 3px rgba(0, 255, 64, 0.5);
}
.sendRecipeBtn:hover {
  animation: none;
}
@keyframes wiggle {
  0%,
  7% {
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
  40%,
  100% {
    transform: rotateZ(0);
  }
}
</style>
