<template>
  <div id="app">
    <h1 class="mainTitle">
      Nöbetçi Eczaneler
    </h1>
    <div class="loading" v-if="loading">
      <Jumper></Jumper>
    </div>
    <Search />
    <Pharmacies />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Pharmacies from "./components/Pharmacies.vue";
import { mapGetters } from "vuex";
import { Jumper } from "vue-loading-spinner";

export default {
  name: "App",
  components: {
    Search,
    Pharmacies,
    Jumper
  },
  computed: mapGetters(["loading"])
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  background-color: #161b22;
}
.loading {
  background: #161b22a3;
  width: 100%;
  height: 100%;
  z-index: 99999;
  position: fixed;
  .spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .mainTitle {
    color: aliceblue;
  }
}
</style>
