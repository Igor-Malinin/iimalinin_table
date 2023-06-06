export const searchModule = {
  state: () => ({
    searchQuery: ''
  }),
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    }
  },
  namespaced: true
}