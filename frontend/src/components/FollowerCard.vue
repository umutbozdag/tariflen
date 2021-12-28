<template>
  <div class="col">
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="container">
          <router-link
            href="#"
            :to="{name: 'Profile', params: { username }}"
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
      required: true
    },
  },
};
</script>

<style></style>
