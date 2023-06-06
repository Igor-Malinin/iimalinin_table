import Vue from 'vue'
import Vuex from 'vuex'
import {searchModule} from "@/store/searchModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    search: searchModule
  }
})
