<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="container">
          <a
            href="#"
            class="d-flex link-dark text-decoration-none pt-2 stretched-link"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="50"
              height="50"
              class="rounded-circle"
            />
            <p class="fs-3 mx-auto fw-bold">{{ profileName }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerCard",
  props: {
    profileName: {
      type: String,
    },
  },
};
</script>

<style></style>
