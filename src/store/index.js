import Vue from "vue";
import Vuex from "vuex";
import baseStrokes from "./modules/base/strokes";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    baseStrokes,
  },
});
