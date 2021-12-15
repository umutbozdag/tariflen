<template>
<nav class="navbar bg-light fixed-top justify-content-between">
    <a class="navbar-brand ps-5" href="#">
      <img src="./assets/TariflenLogo.png" alt="Logo" height="45" />
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
  <hr class="featurette-divider" />
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style-type: none;
}
body {
  margin-top: 5rem;
  height: 10000px;
}
</style>
