<template>
  <table class="table__restaurants">
    <thead>
    <tr>
      <th v-if="selectedOptions.includes('business_name')">Название Ресторана</th>
      <th v-if="selectedOptions.includes('business_address')">Адрес ресторана</th>
      <th v-if="selectedOptions.includes('business_city')">Город</th>
      <th v-if="selectedOptions.includes('business_phone_number')">Номер ресторана</th>
      <th v-if="selectedOptions.includes('inspection_date')">Дата инспекции</th>
      <th v-if="selectedOptions.includes('inspection_description')">Статус инспекции</th>
      <th v-if="selectedOptions.includes('inspection_type')">Тип инспекции</th>
    </tr>
    </thead>
    <tbody>
    <tr class="inspection_description" v-for="dataT in tableData" :id="dataT.inspection_description">
      <td v-if="selectedOptions.includes('business_name')">{{dataT.business_name}}</td>
      <td v-if="selectedOptions.includes('business_address')">{{dataT.business_address}}</td>
      <td v-if="selectedOptions.includes('business_city')">{{dataT.business_city}}</td>
      <td v-if="selectedOptions.includes('business_phone_number')">{{dataT.business_phone_number}}</td>
      <td v-if="selectedOptions.includes('inspection_date')">{{dataT.inspection_date}}</td>
      <td v-if="selectedOptions.includes('inspection_description')">{{dataT.inspection_description}}</td>
      <td v-if="selectedOptions.includes('inspection_type')">{{dataT.inspection_type}}</td>
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
  }
}
</script>

<style scoped>
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

.inspection_description[id='NO ACTION'] {
  background-color: #dcff98;
}
.inspection_description[id='REINSPECTION REQUIRED'] {
  background-color: #ffc8c8;
}
.inspection_description[id='ISSUED PERMIT'] {
  background-color: #fff595;
}
.inspection_description[id='ENFORCEMENT INSPECTION REQUIRED'] {
  background-color: #ff6c6c;
}
.inspection_description[id='SHORTER DATE ADVANCE'] {
  background-color: #9ae1ff;
}
.inspection_description[id='LONGER DATE ADVANCE'] {
  background-color: #f1e4ff;
}
.inspection_description[id='CLOSED FACILITY'] {
  background-color: #bbbbbb;
}
.inspection_description[id='CLOSED FACILITY AND RE-OPENED'] {
  background-color: #b6ffe8;
}
</style>