<template>
  <div class="container mt-5">
    <div class="picture d-inline-flex justify-content-center">
      <img
        src="https://github.com/mdo.png"
        alt="mdo"
        width="200"
        height="200"
        class="rounded-circle shadow"
      />
      <div class="ps-5">
        <h1 class="display-1">Burak Yücel</h1>
        <div class="d-flex mx-auto">
          <p class="profileDetail display-6 mt-3 ps-2">
            10 Tarif
            <i class="bi bi-egg"></i>
          </p>
          <p class="profileDetail display-6 mt-3 ps-2 ms-3">
            10 Takipçi
            <i class="bi bi-people"></i>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- DIVIDER -->

  <article class="profileNav mt-5" id="navs">
    <div>
      <div class="profileNav">
        <nav>
          <div
            class="nav pb-0 btn-lg nav-tabs mb-3 justify-content-center"
            id="nav-tab"
            role="tablist"
          >
            <button
              class="nav-link active"
              id="nav-tariflerim-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-tariflerim"
              type="button"
              role="tab"
              aria-controls="nav-tariflerim"
              aria-selected="true"
            >Tariflerim</button>
            <button
              class="nav-link"
              id="nav-favTariflerim-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-favTariflerim"
              type="button"
              role="tab"
              aria-controls="nav-favTariflerim"
              aria-selected="false"
            >Favori Tariflerim</button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >Takipçiler</button>
          </div>
        </nav>

        <!-- TARIFLERIM -->

        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-tariflerim"
            role="tabpanel"
            aria-labelledby="nav-tariflerim-tab"
          >
            <div class="container justify-content-center">
              <div class="row row-cols-1 row-cols-md-4 g-3">
                <recipe-card v-for="i in 5" :key="i" recipe-title="Tarif" />
              </div>
            </div>
          </div>

          <!-- FAVORI TARIFLERIM -->

          <div
            class="tab-pane fade"
            id="nav-favTariflerim"
            role="tabpanel"
            aria-labelledby="nav-favTariflerim-tab"
          >
            <div class="container justify-content-center">
              <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                      <p class="card-text fs-3 fw-bolder">ÇiBörek Tarifi</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-success"
                          >Tarifi Görüntüle</button>
                          <button type="button" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-4 ps-3">Burak Yucel</p>
                        </a>
                        <small class="text-muted">10 dakika 5 kisilik</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                      <p class="card-text fs-3 fw-bolder">ÇiBörek Tarifi</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-success"
                          >Tarifi Görüntüle</button>
                          <button type="button" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-4 ps-3">Burak Yucel</p>
                        </a>
                        <small class="text-muted">10 dakika 5 kisilik</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                      <p class="card-text fs-3 fw-bolder">Mantı Tarifi</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-success"
                          >Tarifi Görüntüle</button>
                          <button type="button" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-4 ps-3">Burak Yucel</p>
                        </a>
                        <small class="text-muted">10 dakika 5 kisilik</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card shadow-sm">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>

                    <div class="card-body">
                      <p class="card-text fs-3 fw-bolder">Sarma Tarifi</p>
                      <div class="d-flex justify-content-center align-items-center">
                        <div class="btn-group">
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-success"
                          >Tarifi Görüntüle</button>
                          <button type="button" class="btn btn-sm btn-outline-danger">
                            <i class="bi bi-heart"></i>
                          </button>
                        </div>
                      </div>
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-4 ps-3">Elif Asya</p>
                        </a>
                        <small class="text-muted">10 dakika 5 kisilik</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Takipçiler -->

          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div class="container justify-content-center">
              <div class="row row-cols-1 row-cols-md-4 g-3">
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-3 mx-auto fw-bold">Burak Yucel</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-3 mx-auto fw-bold">Burak Yucel</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-3 mx-auto fw-bold">Burak Yucel</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card shadow-sm">
                    <div class="card-body">
                      <div class="container">
                        <a
                          href="#"
                          class="d-flex link-dark text-decoration-none pt-2"
                          aria-expanded="false"
                        >
                          <img
                            src="https://github.com/mdo.png"
                            alt="mdo"
                            width="50"
                            height="50"
                            class="rounded-circle"
                          />
                          <p class="fs-3 mx-auto fw-bold">Burak Yucel</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import RecipeCard from '../components/RecipeCard.vue';
export default {
  components: {
    RecipeCard
  }
};
</script>

<style>
.profileDetail {
  border-left: 10px solid green;
}
</style>
