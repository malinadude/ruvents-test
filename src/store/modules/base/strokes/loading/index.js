const state = {
  loading: false,
};

const mutations = {
  PUT_BASE_STROKES_LOADING(state, data) {
    state.loading = data;
  },
};

const actions = {
  putLoading({ commit }, data) {
    return commit("PUT_BASE_STROKES_LOADING", data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
