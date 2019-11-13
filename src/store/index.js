import Vue from 'vue'
import Vuex from 'vuex'
import planets from './planets'
import people from './people'
import ships from './ships'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    planets,
    people,
    ships
  }
})
