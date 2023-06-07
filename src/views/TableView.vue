<template>
  <div class="table" v-if="!isDataLoading">
    <restaurants-table
      :tableData="tableData"
      :limit="limit"
      :pages="totalPages"
    ></restaurants-table>
  </div>
  <div class="loading_text" v-else>Идет загрузка...</div>
</template>

<script>
import RestaurantsTable from "@/components/RestaurantsTable.vue";
import axios from "axios"

export default {
  name: "TableView",
  components: {
    RestaurantsTable
  },
  data() {
    return {
      tableData: [],
      totalPages: 0,
      limit: 10,
      isDataLoading: false
    }
  },
  methods: {
    async fetchData() {
      try {
        this.isDataLoading = true
        // Это для того, чтобы можно было посмотреть рабочий проект без запуска json сервера
        const response = await axios.get('https://igor-malinin.github.io/dataJson/data.json', {})

        // Это для загрузки json файла локально через запуск команды "json-server data.json"
        // const response = await axios.get('http://localhost:3000/items', {})
        // из-за того, что в обращении к файлу на gitGist не поддерживается обращение к
        // хедер параметрам, не стал использовать ?_limit=10 и прочие вещи, сделал свои
        this.totalPages = Math.ceil(response.data.length/this.limit)
        this.tableData = response.data
      }
      catch (err) {
        alert('Ошибка')
        console.log(err)
      }
      finally {
        this.isDataLoading = false
      }
    },
  },
  mounted() {
    this.fetchData()
  },
}
</script>

<style lang="scss" >

</style>