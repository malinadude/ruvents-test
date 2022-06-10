const state = {
  searchQuery: "",
};

const mutations = {
  PUT_SEARCH_QUERY(state, searchQuery) {
    state.searchQuery = searchQuery;
  },
};

const actions = {
  putSearchQuery({ commit }, searchQuery) {
    return commit("PUT_SEARCH_QUERY", searchQuery);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
