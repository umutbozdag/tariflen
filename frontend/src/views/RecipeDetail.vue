<template>
  <div class="row justify-content-center">
    <!--  -->
    <div class="col-md-2">
      <img
        src="../assets/zeytin.png"
        alt="mdo"
        width="200"
        height="200"
        class="rounded-circle shadow"
      />
      <button
        class="btn btn-light btn-outline-danger fw-bold rounded-pill mt-3"
      >
        <i class="bi bi-bookmark-heart"></i> Favorilerime Ekle
      </button>
    </div>
    <!-- Tarif -->
    <div class="col-md-5">
      <h1 class="text-start fw-bold">Karnabahar Pane</h1>
      <p class="text-muted text-start">
        Küçük küçük çiçeklere ayrılan kızartmasından salatasına pek çok çeşidi
        yapılan karnabahar sevilmez mi hiç? Sevilir elbette, çıtır çıtır
        kızartılmasının yanı sıra, panelenip yüksek ısıda fırında da pişirileni
        de pek güzel olur. Karnabahar pane tarifi tam da bu aşamada imdada
        yetişir. Fırından çıkan mini mini karnabaharlar; domates soslara,
        karamelize soğanlı dip soslara olmadı sarımsaklı yoğurt ya da
        mayonez-ketçap karışımına batırılıp löp löp yenir. Sebze yemeyen ya da
        karnabahar sevmeyen kardeşlerimiz sözsüz kalır, peşinize takılır. Önden
        de bol vitaminli, bir tas sıcak çorba yakışır.
      </p>
      <div class="d-flex">
        <h3 class="profileDetail mt-1 ms-5 ps-2">
          4 Kişilik <i class="bi bi-people-fill"></i>
        </h3>
        <h3 class="profileDetail mt-1 ms-5 ps-2">
          40 Dakika
          <i class="bi bi-alarm"></i>
        </h3>
      </div>
    </div>
    <!-- profil -->
    <div class="col-md-2 align-self-center">
      <div class="picture d-flex">
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="100"
          height="100"
          class="rounded-circle shadow"
        />
        <div class="ps-2 align-self-center">
          <h2 class="fw">Burak Yücel</h2>
          <a class="btn btn-outline-dark rounded-pill" href="#" role="button"><i class="bi bi-person-plus"></i>
            Takip Et</a>
        </div>
      </div>
    </div>
  </div>

  <hr class="featurette-divider" />

  <div class="container text-start">
    <h1>
      <i class="bi bi-bag-check"></i>
      Malzemeler
    </h1>
    <ul class="list-group list-group-flush text-nowrap fs-3">
      <li class="list-group-item d-flex ms-4">
        <i class="bi bi-chevron-right"></i>
        2 Adet Yumurta
        <button class="btn ms-5 fw-bold rounded-pill btn-outline-success">
          <i class="bi bi-cart-plus"></i>
          Mağazada Göster
        </button>
      </li><li class="list-group-item d-flex ms-4">
        <i class="bi bi-chevron-right"></i>
        2 Adet Yumurta
        <button class="btn ms-5 fw-bold rounded-pill btn-outline-success">
          <i class="bi bi-cart-plus"></i>
          Mağazada Göster
        </button>
      </li><li class="list-group-item d-flex ms-4">
        <i class="bi bi-chevron-right"></i>
        2 Adet Yumurta
        <button class="btn ms-5 fw-bold rounded-pill btn-outline-success">
          <i class="bi bi-cart-plus"></i>
          Mağazada Göster
        </button>
      </li><li class="list-group-item d-flex ms-4">
        <i class="bi bi-chevron-right"></i>
        2 Adet Yumurta
        <button class="btn ms-5 fw-bold rounded-pill btn-outline-success">
          <i class="bi bi-cart-plus"></i>
          Mağazada Göster
        </button>
      </li>
    </ul>
  </div>

  <hr class="featurette-divider" />

  <div class="container text-start">
    <h1>
      <i class="bi bi-patch-question"></i>

      Nasıl Yapılır ?
    </h1>
  </div>

</template>

<script>
export default {};
</script>

<style>
.list-group-item {
  width: 20%;
}
</style>
