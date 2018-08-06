<template>
  <div id="app" style="height:1000000px">
  </div>
</template>

<script>
import { mapActions } from "vuex";

import * as types from "./types/global";

export default {
  name: "app",
  computed: {
    // todo
  },
  methods: {
    ...mapActions({
      handleSize: types.WINDOW_DATA_UPDATE_RESIZE,
      handleScroll: types.WINDOW_DATA_UPDATE_SCROLL,
      handleSettings: types.SETTINGS_UPDATE_DATA,
    })
  },
  created() {
    // We use eventlistener because vue has no event of its own for resizing and scrolling
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleSize);
  },
  mounted () {
    this.$store.dispatch(types.SETTINGS_UPDATE_DATA);
  },
  components: {
    // todo
  }
};
</script>

<style>
</style>
