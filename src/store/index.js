import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
      token:'',
      school:'',
    },
    mutations:{
      produce(state,data){
          state.token = data
      },
      getschool(state,data){
        state.school = data
      }
    },
    actions:{}
})