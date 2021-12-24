<template>
  <!-- SIDEBAR -->
  <nav class="navbar bg-light fixed-top justify-content-between">
    <div>
      <button
        class="navbar-toggler rounded-circle btn mx-2 pt-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <h4>
          <i class="bi bi-layout-text-sidebar-reverse"></i>
        </h4>
      </button>
      <a class="navbar-brand" href="/">
        <img src="../assets/TariflenLogo.png" alt="Logo" height="45" />
      </a>
    </div>
    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <img src="../assets/TariflenLogo.png" alt="Logo" height="38" />
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr class="featurette-divider" />
      <div class="offcanvas-header text-center">
        <h3 class=""><i class="bi bi-tag"></i> Kategoriler</h3>
      </div>

      <div class="offcanvas-body text-center" v-if="categories">
        <ul class="navbar-nav fw-bold link-dark text-decoration-none">
          <li
            v-for="category in categories"
            :key="category.categoryId"
            class="nav-item"
          >
            <router-link
              class="nav-link kategori fw-bold link-dark text-decoration-none"
              :to="{
                name: 'CategoryDetail',
                params: { categoryId: category.categoryId },
              }"
            >
              <i class="bi bi-caret-right"></i>
              {{ category.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- SEARCH BAR -->
    <form class="d-flex">
      <input
        class="form-control"
        type="search"
        placeholder="Tarif Ara.."
        aria-label="Arama"
      />
      <!-- <button class="btn btn-outline-success rounded-circle ms-2" type="submit">
        <i class="bi bi-search"></i>
      </button> -->
    </form>

    <!-- UYEOL GIRISYAP -->
    <div v-if="!currentUser" class="btn-group me-5">
      <button
        class="btn btn-sm btn-outline-info text-dark rounded-pill me-2"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalSignup"
      >
        Üye Ol
      </button>
      <button
        class="btn btn btn-outline-success fw-bold rounded-pill"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#modalSignin"
      >
        <i class="bi bi-box-arrow-in-right"></i>
        Giriş Yap
      </button>
    </div>
    <!-- TARIF EKLE -->
    <template v-if="currentUser">
      <div class="d-flex">
        <div class="addRecipe me-1">
          <router-link
            class="btn btn-lg btn-outline-danger fw-bold rounded-pill"
            :to="{ name: 'AddRecipe' }"
          >
            Tarif Ekle
            <i class="bi bi-bag-plus"></i>
          </router-link>
        </div>
        <!-- PROFIL -->
        <li class="nav-item profile_logo dropdown pe-5">
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
            <router-link
              class="dropdown-item"
              :to="{
                name: 'Profile',
                params: { username: this.currentUser.username },
              }"
              >Profilim</router-link
            >
            <div class="dropdown-divider"></div>
            <a @click="signOutUser" class="dropdown-item" href="#">Çıkış Yap</a>
          </div>
        </li>
      </div>
    </template>
  </nav>

  <hr class="featurette-divider" />

  <template v-if="!currentUser">
    <!-- SIGNUP MODAL -->
    <div class="modal fade" tabindex="-1" role="dialog" id="modalSignup">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h2 class="fw-bold mb-0">Eşsiz Tarifler Sizi Bekliyor</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-5 pt-0">
            <form class>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">E-Posta</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-pill"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Şifre</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="username"
                  v-model="username"
                />
                <label for="floatingInput">Kullanici adi</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="ad"
                  v-model="name"
                />
                <label for="floatingInput">Ad</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="soyad"
                  v-model="lastName"
                />
                <label for="floatingInput">Soyad</label>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-pill btn-primary"
                type="submit"
                @click.prevent="submitUser"
              >
                <i class="bi bi-plus-circle"></i>
                Üye Ol
              </button>
              <hr class="my-4" />
              <small class="text-muted">
                Üye ol butonuna basarak "Kullanıcı Sözleşmesi"ni kabul etmiş
                sayılırsınız.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- SIGNIN MODAL -->

    <div class="modal fade" tabindex="-1" role="dialog" id="modalSignin">
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-5 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h2 class="fw-bold mb-0">Giriş Yap</h2>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body p-5 pt-0">
            <form class>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="floatingInput"
                  placeholder="name@example.com"
                  v-model="email"
                />
                <label for="floatingInput">E-Posta</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-pill"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="password"
                />
                <label for="floatingPassword">Şifre</label>
              </div>
              <button
                class="w-100 mb-2 btn btn-lg rounded-pill btn-primary"
                @click.prevent="signUser"
                type="submit"
              >
                <i class="bi bi-door-open"></i>
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      email: null,
      password: null,
      username: null,
      name: null,
      lastName: null,
    };
  },
  methods: {
    ...mapActions(["createUser", "signInUser", "setCategories", "logoutUser"]),
    submitUser() {
      this.createUser({
        email: this.email,
        password: this.password,
        username: this.username,
        name: this.name,
        lastName: this.lastName,
      });
    },
    signUser() {
      this.signInUser({ email: this.email, password: this.password });
    },
    signOutUser() {
      this.logoutUser();
    },
  },
  async mounted() {
    await this.setCategories();
  },
  computed: {
    ...mapState(["currentUser", "categories"]),
  },
};
</script>

<style>
.kategori:hover,
.navbar-toggler {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
.offcanvas {
  width: 30vh;
}
</style>
