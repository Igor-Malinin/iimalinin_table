<template>
  <div class="table__wrapper">
    <restaurants-control
      :selectedOptions="selectedOptions"
      :sortOptions="sortOptions"
      :tableData="tableData.length"
      v-model="newLimit"
    />
    <table-data
      :tableData="searchData"
      :selectedOptions="selectedOptions"
    ></table-data>
    <restaurants-footer
      v-model="page"
      :pages="pagesAmount"
      :searchData="searchData.length"
      :elementsNum="elementsNum"
      v-if="this.selectedOptions.length>0"
    ></restaurants-footer>
    <h3 v-else>Выберите данные для отображения в списке "Редактировать таблицу"</h3>
  </div>
</template>

<script>
import RestaurantsControl from "@/components/RestaurantsControl.vue";
import RestaurantsFooter from "@/components/RestaurantsFooter.vue";
import index, {mapState} from "vuex";
import TableData from "@/components/TableData.vue";

export default {
  name: "restaurants-table",
  components: {RestaurantsFooter, RestaurantsControl, TableData},
  props: {
    tableData: Array,
    required: true,
    limit: Number,
    pages: Number
  },
  data() {
    return {
      page: 0,
      newLimit: this.limit,
      elementsNum: this.tableData.length,
      pagesAmount: this.pages,
      newData: {},
      newTableData: [],
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
      searchQuery: state => state.search.searchQuery,
      selectedSort: state => state.search.selectedSort
    }),
    sortTable() {
      this.newTableData = []
      this.tableData.forEach((data, index) => {
        this.newData = {}
        for(let value of this.selectedOptions)
          this.newData[value] = data[value]
        this.newTableData.push(this.newData)
      })
      return [...this.newTableData].sort((post1, post2) => {
        if (Number(post1[this.selectedSort]))
          return parseInt(post1[this.selectedSort]) - parseInt(post2[this.selectedSort])
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    searchData() {
      // replace конечно бы еще доработать, чтобы лишние символы убрать,
      // но там в названиях встречаются двойные кавычки, поэтому убрал только ключи из json,
      // чтобы по ним поиск не осуществлялся
      let filtered = this.sortTable.filter(data =>
        JSON.stringify(data)
        .toLowerCase().
        replace(/business_name|business_address|business_city|business_phone_number|inspection_date|inspection_description|inspection_type/g, (word) => {
            return {
              'business_name': '', 'business_address': '', 'business_city': '', 'business_phone_number': '', 'inspection_date': '', 'inspection_description': '', 'inspection_type': ''}[word]}
        )
        .includes(this.searchQuery.toLowerCase())
      )
      this.elementsNum = filtered.length
      this.pagesAmount = Math.ceil(this.elementsNum / this.newLimit)
      return filtered.slice(this.page * this.newLimit, this.newLimit + (this.page * this.newLimit))
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 20px;
}
</style>