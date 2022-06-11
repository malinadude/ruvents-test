import Vue from "vue";
import Vuex from "vuex";

import { baseStrokesLoading, baseStrokesSearch } from "./modules/base/strokes";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    // BaseStrokes
    baseStrokesLoading,
    baseStrokesSearch,
  },
});
