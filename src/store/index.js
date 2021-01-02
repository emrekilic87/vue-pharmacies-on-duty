import Vue from "vue";
import Vuex from "vuex";
import PharmacyModule from "../store/modules/pharmacy-module"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    PharmacyModule
  }
});
