<template>
  <div class="d-flex justify-content-around">
    <div class="card bg-info">
      <img src="../assets/zeytin.png" class="card-img" alt="zeytin" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h2 class="card-title pt-5 mt-5 mb-4 fw-bold">Zeytinyağlı Menüler</h2>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/sulu.png" class="card-img" alt="sulu" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Sulu Yemekler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/hamur.png" class="card-img" alt="Hamur" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Hamur İşi</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/vegan.png" class="card-img" alt="vegan" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Vegan Menüler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/tatli.png" class="card-img" alt="tatli" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title pt-5 mt-5 mb-4 fw-bold">Tatlılar</h1>
        </a>
      </div>
    </div>
  </div>

  <hr class="featurette-divider" />

  <div class="row featurette">
    <div class="col-md-5 mt-3">
      <h2 class="featurette-heading display-3">Günün Menüsü</h2>
      <h2 class="featurette-heading display-5 text-muted">Kurufasulye Pilav</h2>
    </div>
    <div class="col-md-2">
      <a href="#" class="text-decoration-none text-muted"
        ><h1 class="display-6 pt-5">
          <i class="bi bi-chevron-compact-right"></i> Tarife Git
        </h1></a
      >
    </div>
    <div class="col-md-4">
      <svg
        class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: 500x500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#eee" />
        <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
      </svg>
    </div>
  </div>

  <hr class="featurette-divider" />
</template>

<script>
export default {};
</script>

<style>
.card-title {
  color: white;
  text-shadow: 2px 2px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 2px 1px 0 #000;
}
.card {
  border-radius: 5%;
  min-width: 180px;
  max-width: 300px;
}
.card-img {
  border-radius: 5%;
  height: 200px;
}
</style>
