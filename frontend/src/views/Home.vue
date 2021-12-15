<template>
  <nav class="navbar bg-light fixed-top justify-content-between">
    <a class="navbar-brand ps-3" href="#">
      <img src="../assets/TariflenLogo.png" alt="Logo" height="45" />
    </a>

    <form class="d-flex">
      <input
        class="form-control rounded-pill"
        type="search"
        placeholder="Tarif Ara.."
        aria-label="Arama"
      />
      <button class="btn btn-outline-success rounded-pill" type="submit">
        <i class="bi bi-search"></i>
      </button>
    </form>

    <button class="btn btn-sm btn-outline-success rounded-pill" type="button">
      Giriş Yap
    </button>

    <li class="nav-item dropdown pe-5">
      <a
        class="nav-link dropdown-toggle text-success"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i class="bi bi-person-circle" style="font-size: 1.5rem"></i>
      </a>

      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Profilim</a>
        <a class="dropdown-item" href="#">Tariflerim</a>
        <a class="dropdown-item" href="#">Favorilerim</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Çıkış Yap</a>
      </div>
    </li>
  </nav>

  <!-- NAV -->

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
