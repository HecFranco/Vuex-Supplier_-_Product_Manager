<template>
  <div id="app">
    <authentication-page></authentication-page>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as types from "./types/global";

import AuthenticationPage from './pages/AuthenticationPage.vue';

export default {
  name: "app",
  components: {
    'authentication-page':AuthenticationPage
  },
  computed: {
    // todo
  },
  methods: {
    ...mapActions({
      handleSize: types.UPDATE_WINDOW_DATA_RESIZE,
      handleScroll: types.UPDATE_WINDOW_DATA_SCROLL,
      handleSettings: types.UPDATE_SETTINGS,
    })
  },
  created() {
    // We use eventlistener because vue has no event of its own for resizing and scrolling
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleSize);
  },
  mounted () {
    this.$store.dispatch(types.UPDATE_SETTINGS);
  },
};
</script>

<style>
</style>
