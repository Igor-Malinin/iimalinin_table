<template>
  <div class="table__footer">
    <div class="pages__btns">
      <div class="entry__amount">
        <p>Всего элементов <strong>{{searchSortData}} из {{elementsNum}}</strong></p>
      </div>
      <div class="pages__btns-inner">
        <u-button @click.native="decrementPage" :disabled="page === 0"> < </u-button>
        <span>{{page+1}}</span>
        <u-button @click.native="incrementPage" :disabled="page + 1 === pages"> > </u-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "restaurants-footer",
  model: {
    prop: 'page',
    event: 'change'
  },
  props: {
    page: Number,
    pages: Number,
    searchSortData: Number,
    elementsNum: Number
  },
  data() {
    return {
      newPage: this.page
    }
  },
  methods: {
    incrementPage() {
      this.newPage = this.page
      this.$emit('change', ++this.newPage)
    },
    decrementPage() {
      console.log(this.pages)
      this.$emit('change', --this.newPage)
    }
  }
}
</script>

<style lang="scss" scoped>
.table__footer {
  display: flex;
  justify-content: flex-end;
  border: 1px solid #002525;
  border-top: none;
  margin-bottom: 20px;
  .pages__btns {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 10px;
    .entry__amount {
      margin-bottom: 10px;
    }
    .pages__btns-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100px;
    }
  }
}
</style>