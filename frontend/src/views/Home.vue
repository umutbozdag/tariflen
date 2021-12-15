<template>
  <div class="d-flex justify-content-around">
    <div class="card bg-info">
      <img src="../assets/zeytin.png" class="card-img" alt="zeytin" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
        <h1 class="card-title">Zeytinyağlı Menüler</h1>
           </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/sulu.png" class="card-img" alt="sulu" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title">Sulu Yemekler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/hamur.png" class="card-img" alt="Hamur" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title">Hamur İşi</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/vegan.png" class="card-img" alt="vegan" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title">Vegan Menüler</h1>
        </a>
      </div>
    </div>

    <div class="card bg-info">
      <img src="../assets/tatli.png" class="card-img" alt="tatli" />
      <div class="card-img-overlay">
        <a href="#" class="text-decoration-none">
          <h1 class="card-title">Tatlılar</h1>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card-title {
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.card {
  min-width: 150px;
  max-width: 300px;
}
.card-img {
  height: 200px;
}
li {
  list-style-type: none;
}
body {
  margin-top: 5rem;
  height: 10000px;
}
.card-img-overlay {
  padding-left: -55px;
}
</style>
