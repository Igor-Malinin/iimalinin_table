<template>
  <div class="table__wrapper">
    <restaurants-control
      :selectedOptions="selectedOptions"
      :sortOptions="sortOptions"
    />
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
      <tr v-for="dataT in searchData">
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
  </div>
</template>

<script>
import RestaurantsControl from "@/components/RestaurantsControl.vue";
import {mapState} from "vuex";
import {searchModule} from "@/store/searchModule";

export default {
  name: "restaurants-table",
  components: {RestaurantsControl},
  props: {
    tableData: Array,
    required: true,
    limit: Number,
    pages: Number
  },
  data() {
    return {
      selectedOptions: [
        'business_name',
        'business_address',
        'business_city',
        'business_phone_number',
        'inspection_date',
        'inspection_description',
        'inspection_type'
      ],
      sortOptions: [
        {value: 'business_name', name: 'Название ресторана'},
        {value: 'business_address', name: 'Адрес ресторана'},
        {value: 'business_city', name: 'Городу'},
        {value: 'business_phone_number', name: 'Номер ресторана'},
        {value: 'inspection_date', name: 'Дата инспекции'},
        {value: 'inspection_description', name: 'Статус инспекции'},
        {value: 'inspection_type', name: 'Тип инспекции'},
      ]
    }
  },
  computed: {
    ...mapState({
      searchQuery: state => state.search.searchQuery
    }),
    sortedPosts() {
      console.log(this.selectedOptions)
      return [...this.tableData].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    searchData() {
      let filtered = this.tableData.filter(data =>
        JSON.stringify(data)
        .toLowerCase()
        .includes(this.searchQuery.toLowerCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.table__restaurants {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #000;
  border-collapse: collapse;

}

.table__restaurants thead th {
  position: relative;
  height: 60px;
  padding: 10px;
  line-height: 20px;
  border-bottom: 2px solid #000;
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
  border-top: 1px solid #000;
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