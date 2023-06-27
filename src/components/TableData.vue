<template>
  <table class="table__restaurants">
    <thead>
    <tr>
      <th v-for="column in columns">{{column.title}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="dataT in tableData" :style="getColor(dataT.inspection_description)">
      <td v-for="column in columns">{{dataT[column.key]}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table-data",
  props: {
    tableData: Array,
    selectedOptions: Array,
    columns: Array
  },
  methods: {
    isExists() {
      return this.columns.filter(column => column.key === 'inspection_description')[0]
    },
    getColor(color) {
      if(this.isExists())
        return `background-color: ${this.isExists().colors[color.split(' ').join('')]}`
      return 'background-color: #f1f1f1'
    }
  }
}
</script>

<style lang="scss" scoped>
.table__restaurants {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #002525;
  border-collapse: collapse;
}

.table__restaurants thead th {
  position: relative;
  height: 60px;
  padding: 10px;
  line-height: 20px;
  border-bottom: 2px solid #002525;
}
.table__restaurants thead th:after {
  position: absolute;
  top: 19px;
  right: -26px;
  content: "–";
  font-size: 70px;
  font-weight: 100;
  transform: rotate(90deg);
}
.table__restaurants thead th:last-child:after {
  content: "";
}

.table__restaurants tbody td {
  position: relative;
  height: 70px;
  padding: 10px;
  border-top: 1px solid #002525;
}
.table__restaurants tbody td:after {
  position: absolute;
  top: 7px;
  right: -26px;
  content: "—";
  color: #9a9a9a;
  font-size: 40px;
  font-weight: 100;
  transform: rotate(90deg);
}
.table__restaurants tbody td:last-child:after {
  content: "";
}

</style>