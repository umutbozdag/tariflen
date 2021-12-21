<template>
  <div class="d-flex justify-content-around">
    <div class="card bg-info shadow">
      <img src="../assets/zeytin.png" class="card-img" alt="zeytin" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none stretched-link">
          <h2 class="card-title pt-5 mt-5 mb-4 fw-bold">Zeytinyağlı Menüler</h2>
        </a>
      </div>
    </div>

    <div class="card bg-info shadow">
      <img src="../assets/sulu.png" class="card-img" alt="sulu" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none stretched-link">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Sulu Yemekler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info shadow">
      <img src="../assets/hamur.png" class="card-img" alt="Hamur" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none stretched-link">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Hamur İşi</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info shadow">
      <img src="../assets/vegan.png" class="card-img" alt="vegan" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none stretched-link">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Vegan Menüler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info shadow">
      <img src="../assets/tatli.png" class="card-img" alt="tatli" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none stretched-link">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Tatlılar</h1>
        </a>
      </div>
    </div>
  </div>

<!-- GUNUN MENUSU -->
  <hr class="featurette-divider" />

  <div class="row featurette justify-content-center position-relative">
    <div class="col-md-3 mt-2">
      <h2 class="featurette-heading display-5">Günün Menüsü</h2>
      <h2 class="featurette-heading text-muted">Kurufasulye Pilav</h2>
    </div>
    <div class="col-md-3">
      <svg
        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width="150"
        height="150"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
      </svg>
      <a href="" class="stretched-link"></a>
    </div>
  </div>

  <hr class="featurette-divider" />
  <!-- TARIFLER -->

  <div class="container justify-content-center">
    <div class="row row-cols-1 row-cols-md-4 g-3">
                <recipe-card
                  v-for="i in 5"
                  :key="i"
                  recipe-title="Tarif Ad"
                  profile-name="Burak"
                  meal-for="2"
                  meal-prep-time="30"
                />
              </div>
            </div>
</template>

<script>
import RecipeCard from "../components/RecipeCard.vue"
export default {
  components: {
    RecipeCard
  }
};
</script>

<style>
.card-title {
  color: white;
  text-shadow: 2px 2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
}
.card {
  border-radius: 10px;
  min-width: 180px;
  max-width: 300px;
}
.card-img {
  border-radius: 10px;
  height: 200px;
}
</style>
