import Vue from 'vue'
import Vuex from 'vuex'
import {sortSearchModule} from "@/store/sortSearchModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search: sortSearchModule
  }
})
