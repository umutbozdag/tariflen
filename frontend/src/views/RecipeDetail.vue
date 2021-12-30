<template>
  <div id="recipe-detail" class="row justify-content-center" v-if="recipeDetail">
    <!--  -->
    <div class="col-md-2 image">
      <img
        v-if="recipeDetail.image"
        :src="require(`../../../backend/src/uploads/${recipeDetail.image.originalname}`)"
        alt="mdo"
        width="200"
        height="200"
        class="rounded-circle shadow"
      />
      <button
        v-if="currentUser && showAddToFavorites"
        class="btn btn-light btn-outline-primary fw-bold rounded-pill mt-3"
        @click="addToFavorites"
      >
        <i class="bi bi-bookmark-heart"></i> Favorilerime Ekle
      </button>
      <button
        v-if="currentUser && !showAddToFavorites"
        class="btn btn-primary fw-bold rounded-pill mt-3"
        @click="removeFromFavorites"
      >
        <i class="bi bi-bookmark-heart"></i> Favorilerimden Çıkar
      </button>

      <button class="btn btn-outline-secondary fw-bold mt-3" @click="downloadAsPdf">
        <i class="bi bi-download"></i> PDF
      </button>

      <button
        class="btn btn-danger fw-bold mt-3 ms-3"
        v-if="currentUser && currentUser.username === recipeDetail.author.username"
        @click="deleteRecipe"
      >
        <i class="bi bi-delete"></i> Tarifi sil
      </button>
    </div>
    <!-- Tarif -->
    <div class="col-md-5">
      <h1 class="text-start fw-bold">{{ recipeDetail.title }}</h1>
      <p class="text-muted text-start">{{ recipeDetail.description }}</p>
      <div class="d-flex">
        <h3 class="profileDetail mt-1 ps-2">
          <i class="bi bi-people-fill"></i>
          {{ recipeDetail.mealFor }} Kişilik
        </h3>
        <h3 class="profileDetail mt-1 ms-5 ps-2">
          <i class="bi bi-alarm"></i>
          {{ recipeDetail.cookingTime }}
        </h3>
      </div>
      <div class="d-flex mt-2">
        <span class="fs-5">{{ getRecipeDate(recipeDetail.createdAt) }}</span>
      </div>
    </div>
    <!-- profil -->
    <div class="col-md-2 align-self-center">
      <div class="picture d-flex">
        <user-avatar :username="recipeDetail.author.username" />
        <div class="ps-2 align-self-center">
          <h2 class="fw">{{ recipeDetail.author.username }}</h2>
        </div>
      </div>
    </div>
    <hr class="featurette-divider mt-3" />

    <div class="col-md-8 text-start">
      <h1>
        <i class="bi bi-bag-check"></i>
        Malzemeler
      </h1>
      <ul class="list-group list-group-flush fs-5 malzemeler">
        <li
          v-for="(ingredient, i) in recipeDetail.ingredients"
          :key="i"
          class="list-group-item d-flex ms-4"
        >
          <div class="col-7">
            <i class="bi bi-chevron-right"></i>
            {{ ingredient.title }}
          </div>
          <div class="col-10">
            <button
              class="btn btn-sm ms-5 fw-bold rounded-pill btn-outline-primary text-decoration-none"
              v-if="ingredient.ingredient"
            >
              <i class="bi bi-cart-plus"></i>
              <a :href="ingredient.ingredient.link" target="_blank">Mağazada Göster</a>
            </button>
          </div>
        </li>
      </ul>
    </div>

    <hr class="featurette-divider mt-3" />

    <div class="col-md-8 text-start">
      <h1>
        <i class="bi bi-patch-question"></i>
        Nasıl Yapılır ?
      </h1>
      <ol class="list-group list-group-flush fs-4 mt-3">
        <li
          v-for="instruction in recipeDetail.instructions"
          :key="instruction.index"
          class="list-group-item ms-4"
        >
          <div class="d-flex">
            <h2 class="orderedList text-center me-3">{{ instruction.index + 1 }}</h2>
            <p>{{ instruction.text }}</p>
          </div>
        </li>
      </ol>
    </div>

    <hr class="featurette-divider mt-3" />

    <div class="d-flex justify-content-center">
      <div id="disqus_thread"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import UserAvatar from "../components/UserAvatar.vue";
import html2pdf from 'html2pdf.js'
import dayjs from "dayjs";
import { notify } from "@kyvg/vue3-notification";

export default {
  name: "RecipeDetail",
  data() {
    return {
      comment: ""
    };
  },
  async mounted() {
    await this.setRecipeDetail(this.$route.params.recipeId);
    this.initializeDisqus();
  },
  methods: {
    ...mapActions(["setRecipeDetail", "setUser"]),
    async deleteRecipe() {
      await this.$axios.delete(`http://localhost:3000/recipe/${this.recipeDetail.recipeId}`)
      notify({
        type: "success",
        title: "BAŞARILI",
        text: "Tarifi başarıyla sildiniz",
      });
      this.$router.push({ name: 'Home' })
    },
    getRecipeDate(createdAt) {
      return dayjs().to(dayjs(createdAt));
    },
    downloadAsPdf() {
      const recipeDetail = document.getElementById('recipe-detail');

      html2pdf(recipeDetail, {
        margin: 2,
        filename: `${this.recipeDetail.title}_${this.recipeDetail.author.username}`,
        html2canvas: {},
        jsPDF: { format: 'a2', orientation: 'p', putOnlyUsedFonts: true, floatPrecision: 'smart' }
      })
    },
    initializeDisqus() {
      /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
      /*
      var disqus_config = function () {
      this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };
      */
      (function () {
        var d = document, s = d.createElement("script");
        s.src = "https://tariflen.disqus.com/embed.js";
        s.setAttribute("data-timestamp", +new Date());
        (d.head || d.body).appendChild(s);
      })();
    },
    addToFavorites() {
      this.$axios
        .put(`/user/${this.currentUser.email}`, {
          favorites: [...this.currentUser.favorites, this.recipeDetail],
        })
        .then((response) => {
          this.setUser(response.data);
        });
    },
    removeFromFavorites() {
      let favoriteIndex = this.currentUser.favorites.findIndex((favorite) => favorite.recipeId === this.recipeDetail.recipeId);
      if (favoriteIndex > -1) {
        this.currentUser.favorites.splice(favoriteIndex, 1);
        this.$axios
          .put(`/user/${this.currentUser.email}`, {
            favorites: [...this.currentUser.favorites],
          })
          .then((response) => {
            this.setUser(response.data);
          });
      }
    },
  },
  computed: {
    ...mapState(["recipeDetail", "currentUser"]),
    showAddToFavorites() {
      let favoriteIndex = this.currentUser.favorites.findIndex((favorite) => favorite.recipeId === this.recipeDetail.recipeId);
      if (favoriteIndex > -1) {
        return false;
      }
      return true;
    },
  },
  components: { UserAvatar }
};
</script>

<style>
.malzemeler {
  width: 30%;
}
.orderedList {
  border: 1px solid #2c3e50;
  min-width: 1.3em;
  height: 1.3em;
  border-radius: 50%;
}

#disqus_thread {
  width: 800px;
}
</style>
