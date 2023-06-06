<template>
  <div class="table__control-elements">
    <h3 class="table__title">Испекция по ресторанам</h3>
    <div class="control-elements">
      <u-select
          class="select"
          v-model="selectedOptions"
          :options="sortOptions"
      ></u-select>
      <u-input
          class="input"
          :value="searchQuery"
          @input="setSearchQuery"
      ></u-input>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "RestaurantsControl",
  props: {
    selectedOptions: Array,
    sortOptions: Array,
    tableData: Array,
  },
  methods: {
    ...mapMutations({
      setSearchQuery: "search/setSearchQuery"
    })
  },
  computed: {
    ...mapState({
      searchQuery: state => state.search.searchQuery
    })
  }
}
</script>

<style lang="scss" scoped>
.table__control-elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  padding: 20px;
}

.control-elements {
  display: flex;
  align-items: center;
  .select {
    margin-right: 20px;
  }
}
</style>