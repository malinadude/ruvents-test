const state = {
  query: "",
};

const mutations = {
  PUT_BASE_STROKES_SEARCH_QUERY(state, data) {
    state.query = data;
  },
};

const actions = {
  putQuery({ commit }, data) {
    return commit("PUT_BASE_STROKES_SEARCH_QUERY", data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
