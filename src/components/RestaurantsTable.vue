<template>
  <div class="table__wrapper">
    <restaurants-control
      :columns="columns"
      :tableData="newTableData.length"
      v-model="newLimit"
    />
    <table-data
      :tableData="searchSortData"
      :columns="getVisible"
    ></table-data>
    <restaurants-footer
      v-model="page"
      :pages="pagesAmount"
      :searchSortData="searchSortData.length"
      :elementsNum="elementsNum"
      v-if="this.columns.map(visible => visible.isVisible).includes(true)"
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
      newTableData: [],
      columns: [
        {key: 'business_name', title: 'Название ресторана', isVisible: true},
        {key: 'business_address', title: 'Адрес ресторана', isVisible: true},
        {key: 'business_city', title: 'Городу', isVisible: true},
        {key: 'business_phone_number', title: 'Номер ресторана', isVisible: true},
        {key: 'inspection_date', title: 'Дата инспекции', isVisible: true},
        {key: 'inspection_description', title: 'Статус инспекции', isVisible: true, colors: {
          NOACTION: '#dcff98', REINSPECTIONREQUIRED: '#ffc8c8', ISSUEDPERMIT: '#fff595',
          ENFORCEMENTINSPECTIONREQUIRED: '#ff6c6c', SHORTERDATEADVANCE: '#9ae1ff',
          LONGERDATEADVANCE: '#f1e4ff', CLOSEDFACILITY: '#bbbbbb', 'CLOSEDFACILITYANDRE-OPENED': '#b6ffe8'}
        },
        {key: 'inspection_type', title: 'Тип инспекции', isVisible: true},
      ]
    }
  },
  computed: {
    ...mapState({
      searchQuery: state => state.search.searchQuery,
      selectedSort: state => state.search.selectedSort
    }),
    getVisible() {
      return this.columns.filter(column => column.isVisible === true)
    },
    searchSortData() {
      // здесь формируем массив из Видимых данных
      this.newTableData = []
      this.tableData
        .forEach((data, index) => {
          let newData = {}
          for(let value of this.getVisible)
            newData[value.key] = data[value.key]
          this.newTableData.push(newData)
        })
      // с регулярками я ничего дельного так и не смог придумать, не стал время тратить, решил начать органайзер
      // здесь фильтруем
      this.newTableData = this.newTableData.filter(data =>
        JSON.stringify(data).toLowerCase()
        .replace(/business_name|business_address|business_city|business_phone_number|inspection_date|inspection_description|inspection_type/g, (word) => {
          return {'business_name': '', 'business_address': '', 'business_city': '', 'business_phone_number': '', 'inspection_date': '', 'inspection_description': '', 'inspection_type': ''}[word]}
        ).includes(this.searchQuery.toLowerCase())
      )

      // формируем данные для футера и пагинации
      this.elementsNum = this.newTableData.length
      if (this.newLimit > 10) {
        this.page = 0
      }
      this.pagesAmount = Math.ceil(this.elementsNum / this.newLimit)

      // здесь отправляем отсортированный и пагинированный
      return [...this.newTableData]
        .sort((element1, element2) => {
          if (Number(element1[this.selectedSort]))
            return parseInt(element1[this.selectedSort]) - parseInt(element2[this.selectedSort])
          return element1[this.selectedSort]?.localeCompare(element2[this.selectedSort])
        })
        .slice(this.page * this.newLimit, this.newLimit + (this.page * this.newLimit))
    }
  }
}
</script>

<style lang="scss" scoped>

h3 {
  margin-top: 20px;
}

</style>

<!--Мусор с регулярками-->
<!--let columnsString = '/'-->
<!--this.getSelected.forEach((column, index) => {-->
<!--if(index !== this.getSelected.length-1)-->
<!--columnsString += `${column.key}|`-->
<!--else-->
<!--columnsString += `${column.key}/`-->
<!--})-->
<!--console.log(JSON.stringify(data).toLowerCase().replace(new RegExp(columnsString, 'g'), (word) => {-->
<!--return {-->
<!--'business_name': '', 'business_address': '', 'business_city': '', 'business_phone_number': '', 'inspection_date': '', 'inspection_description': '', 'inspection_type': ''}[word]}-->
<!--))-->