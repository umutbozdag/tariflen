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
            <user-avatar :username="username" />
            <p class="fs-3 mx-auto fw-bold">{{ username }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from "./UserAvatar.vue";

export default {
  name: "UserCard",
  components: { UserAvatar },
  props: {
    username: {
      type: String,
      required: true,
    },
  }
};
</script>

<style></style>
