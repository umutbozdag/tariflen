<template>
  <div
    class="rounded-circle shadow-sm d-flex"
    id="profilePhoto"
    :style="styleObject"
  >
    <h2 class="m-auto fw-bold text-dark" :class="`${isBigText ? 'display-1' : ''}`">{{ username.charAt(0).toUpperCase() }}</h2>
  </div>
</template>

<script>
import getRandomColor from "../utils/randomColor";

export default {
  name: 'UserAvatar',
  props: {
    username: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '50px'
    },
    height: {
      type: String,
      default: '50px'
    },
    isBigText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      styleObject: {
        background: getRandomColor(),
        width: this.width,
        height: this.height
      },
    }
  },
}
</script> 

<style></style>