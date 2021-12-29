<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="container">
          <router-link
            href="#"
            :to="{ name: 'Profile', params: { username } }"
            class="d-flex link-dark text-decoration-none pt-2 stretched-link"
            aria-expanded="false"
          >
            <div
              class="rounded-circle shadow-sm d-flex"
              id="profilePhoto"
              style="width: 50px; height: 50px"
              v-bind:style="styleObject"
            >
              <h2 class="m-auto fw-bold text-dark">
                {{ username.charAt(0) }}
              </h2>
            </div>
            <p class="fs-3 mx-auto fw-bold">{{ username }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowerCard",
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      styleObject: {
        background: this.random_rgba(),
      },
    };
  },
  methods: {
    random_rgba() {
      var o = Math.round,
        r = Math.random,
        s = 255;
      return (
        "rgba(" +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        o(r() * s) +
        "," +
        ".35" +
        ")"
      );
    },
  },
};
</script>

<style></style>
