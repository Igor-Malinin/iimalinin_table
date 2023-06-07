<template>
  <div class="table__control-elements">
    <h3 class="table__title">Испекция по ресторанам</h3>
    <div class="control-elements">
      <u-select
          class="select"
          v-model="selectedOptions"
          :options="sortOptions"
          :value="selectedSort"
          @selectedSort="setSelectedSort"
      ></u-select>
      <u-input
          class="input"
          :value="searchQuery"
          @input="setSearchQuery"
      ></u-input>
      <u-button
          @click.native="change"
          v-if="newLimit === 10"
      >Отобразить весь список</u-button>
      <u-button
          @click.native="change"
          v-else
      >Уменьшить список</u-button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex";

export default {
  name: "RestaurantsControl",
  model: {
    prop: 'newLimit',
    event: 'changeLimit'
  },
  props: {
    selectedOptions: Array,
    sortOptions: Array,
    tableData: Number,
    newLimit: Number
  },
  methods: {
    ...mapMutations({
      setSearchQuery: "search/setSearchQuery",
      setSelectedSort: "search/setSelectedSort"
    }),
    change() {
      this.newLimit === 10 ?
      this.$emit('changeLimit', this.tableData) :
      this.$emit('changeLimit', 10)
    }
  },
  computed: {
    ...mapState({
      searchQuery: state => state.search.searchQuery,
      selectedSort: state => state.search.selectedSort
    }),

  }
}
</script>

<style lang="scss" scoped>
.table__control-elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  background-color: #ffc3a0;
  padding: 20px;
}

.control-elements {
  display: flex;
  align-items: center;
  .select {
    margin-right: 20px;
  }
  .input {
    margin-right: 20px;
  }
}
</style>