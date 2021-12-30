<template>
  <div v-if="userDetail && currentUser">
    <div class="container mt-5">
      <div class="picture d-inline-flex justify-content-center">
        <div
          class="rounded-circle shadow d-flex"
          id="profilePhoto"
          style="width: 150px; height: 150px"
          v-bind:style="styleObject"
        >
          <h1 class="m-auto display-1 fw-bold text-dark">
            {{ userDetail.name.charAt(0).toUpperCase() }}
          </h1>
        </div>
        <div class="ps-5">
          <h1 class="display-1">
            {{ userDetail.name }} {{ userDetail.lastName }}
          </h1>
          <div class="d-flex mx-auto">
            <p class="profileDetail display-6 mt-3 ps-2">
              {{ userDetail.recipes.length }} Tarif
              <i class="bi bi-egg"></i>
            </p>
            <p class="profileDetail display-6 mt-3 ps-2 ms-3">
              {{ userDetail.followers.length }} Takipçi
              <i class="bi bi-people"></i>
            </p>
          </div>
        </div>

        <div
          class="d-flex align-items-center ms-5"
          v-if="currentUser.username !== userDetail.username"
        >
          <div class="d-flex mx-auto">
            <template v-if="this.userDetail.followers.length">
              <button class="btn btn-lg text-dark rounded-pill btn-outline-warning" v-if="showFollowButton" @click="followUser">
                <h3 class="m-auto p-2">
                  <i class="bi bi-person-plus"></i>
                  Takip Et
                </h3>
              </button>

              <button v-else @click="unfollowUser" class="btn btn-lg text-dark rounded-pill btn-outline-warning">
                <h3 class="m-auto p-2">
                  <i class="bi bi-person-dash"></i>
                  Takipten Çık
                </h3>
              </button>
            </template>

            <template v-else>
              <button
                @click="followUser"
                class="btn btn-lg text-dark rounded-pill btn-outline-warning"
              >
                <h3 class="m-auto p-2">
                  <i class="bi bi-person-plus"></i>
                  Takip Et
                </h3>
              </button>
            </template>
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
              >
                Tariflerim
              </button>
              <button
                class="nav-link"
                id="nav-favTariflerim-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-favTariflerim"
                type="button"
                role="tab"
                aria-controls="nav-favTariflerim"
                aria-selected="false"
              >
                <span
                  v-if="
                    currentUser && currentUser.username === userDetail.username
                  "
                  >Favori Tariflerim</span
                >
                <span v-else>Favori Tarifleri</span>
              </button>
              <button
                class="nav-link"
                id="nav-followers-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-followers"
                type="button"
                role="tab"
                aria-controls="nav-followers"
                aria-selected="false"
              >
                Takipçiler
              </button>

              <button
                class="nav-link"
                id="nav-iFollow-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-iFollow"
                type="button"
                role="tab"
                aria-controls="nav-iFollow"
                aria-selected="false"
              >
                Takip Edilen
              </button>
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
                  <recipe-card
                    v-for="recipe in userDetail.recipes"
                    :key="recipe.recipeId"
                    :recipe="recipe"
                    :username="userDetail.username"
                  />
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
                  <recipe-card
                    v-for="recipe in userDetail.favorites"
                    :key="recipe.recipeId"
                    :recipe="recipe"
                  />
                </div>
              </div>
            </div>

            <!-- Takipçiler -->

            <div
              class="tab-pane fade"
              id="nav-followers"
              role="tabpanel"
              aria-labelledby="nav-followers-tab"
            >
              <div
                class="container justify-content-center"
                v-if="userDetail.followers.length"
              >
                <div class="row row-cols-1 row-cols-md-4 g-3">
                  <follower-card
                    v-for="follower in userDetail.followers"
                    :key="follower.userId"
                    :username="follower.username"
                  />
                </div>
              </div>
              <div
                id="nav-followers"
                role="tabpanel"
                aria-labelledby="nav-followers-tab"
                v-else
              >
                Hiç takipçi bulunamadı
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="nav-iFollow"
              role="tabpanel"
              aria-labelledby="nav-iFollow-tab"
            >
              <div
                class="container justify-content-center"
                v-if="userDetail.follows.length"
              >
                <div class="row row-cols-1 row-cols-md-4 g-3">
                  <follower-card
                    v-for="follower in currentUser.follows"
                    :key="follower.userId"
                    :username="follower.username"
                  />
                </div>
              </div>
              <div
                id="nav-iFollow"
                role="tabpanel"
                aria-labelledby="nav-iFollow-tab"
                v-else
              >
                Hiç takipçi bulunamadı
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RecipeCard from "../components/RecipeCard.vue";
import FollowerCard from "../components/FollowerCard.vue";

export default {
  name: "Profile",
  components: {
    RecipeCard,
    FollowerCard,
  },
  data() {
    return {
      styleObject: {
        background: this.random_rgba(),
      },
    };
  },
  methods: {
    ...mapActions(["setUserDetail"]),
    async unfollowUser() {
      const followsIdx = this.currentUser.follows.findIndex(
        (u) => u.username === this.userDetail.username
      );
      const followersIdx = this.userDetail.followers.findIndex(
        (u) => u.username === this.currentUser.username
      );

      this.currentUser.follows.splice(followsIdx, 1);
      this.userDetail.followers.splice(followersIdx, 1);

      console.log(followsIdx, followersIdx);

      // followers.push({
      //   username: this.currentUser.username,
      //   name: this.currentUser.name,
      //   lastName: this.currentUser.lastName,
      //   userId: this.currentUser.userId,
      //   email: this.currentUser.email,
      //   _id: this.currentUser._id
      // });
      // follows.push({
      //   username: this.userDetail.username,
      //   name: this.userDetail.name,
      //   lastName: this.userDetail.lastName,
      //   userId: this.userDetail.userId,
      //   email: this.userDetail.email,
      //   _id: this.userDetail._id
      // })

      const userDetailResp = await this.$axios.put(
        `http://localhost:3000/user/${this.userDetail.email}`,
        {
          followers: this.userDetail.followers,
        }
      );

      this.userDetail.followers = userDetailResp.data.followers;

      const currentUserResp = await this.$axios.put(
        `http://localhost:3000/user/${this.currentUser.email}`,
        {
          follows: this.currentUser.follows,
        }
      );

      this.currentUser.follows = currentUserResp.data.follows;
    },
    async followUser() {
      const followers = [];
      const follows = [];

      followers.push({
        username: this.currentUser.username,
        name: this.currentUser.name,
        lastName: this.currentUser.lastName,
        userId: this.currentUser.userId,
        email: this.currentUser.email,
        _id: this.currentUser._id,
      });
      follows.push({
        username: this.userDetail.username,
        name: this.userDetail.name,
        lastName: this.userDetail.lastName,
        userId: this.userDetail.userId,
        email: this.userDetail.email,
        _id: this.userDetail._id,
      });

      const userDetailResp = await this.$axios.put(
        `http://localhost:3000/user/${this.userDetail.email}`,
        {
          followers,
        }
      );

      this.userDetail.followers = userDetailResp.data.followers;

      const currentUserResp = await this.$axios.put(
        `http://localhost:3000/user/${this.currentUser.email}`,
        {
          follows,
        }
      );

      this.currentUser.follows = currentUserResp.data.follows;
    },
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
        ".4" +
        ")"
      );
    },
  },
  computed: {
    ...mapState(["userDetail", "currentUser"]),
    showFollowButton() {
      return (
        this.currentUser.follows.find(
          (u) => u.username === this.userDetail.username
        )?.length === 0
      );
    },
  },

  async mounted() {
    await this.setUserDetail(this.$route.params.username);
  },
};
</script>

<style>
.profileDetail {
  border-left: 10px solid #00c2ff;
}
</style>
