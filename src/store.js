/**
 * Created by yqr on 2018/3/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  topNavState: 'home',
  leftNavState: 'home'
}

export default new Vuex.Store({
  state
})
