export const sortSearchModule = {
  state: () => ({
    searchQuery: '',
    selectedSort: ''
  }),
  mutations: {
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    }
  },
  namespaced: true
}