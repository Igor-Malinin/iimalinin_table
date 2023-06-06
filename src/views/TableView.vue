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
import UInput from "@/components/UI/UInput.vue";
import RestaurantsTable from "@/components/RestaurantsTable.vue";
import USelect from "@/components/UI/USelect.vue";
import axios from "axios"

export default {
  name: "TableView",
  components: {
    USelect,
    RestaurantsTable,
    UInput

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

        // Это для того, чтобы вы могли смотреть рабочий проект на githubPages
        const response = await axios.get('https://gist.githubusercontent.com/Igor-Malinin/dd1226b9add49692a77dd394df1ca81e/raw/271d420e8c5fa106593ed8d14fedc3f558b8f2c8/data.json', {})

        // Это для загрузки json файла локально через запуск json-server data.json
        // const response = await axios.get('http://localhost:3000/items', {})
        
        this.totalPages = Math.ceil(response.data.length/this.limit)
        this.tableData = response.data
      }
      catch (err) {
        alert('Ошибка ')
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

<style lang="scss" scoped>

</style>