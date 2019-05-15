import Vue from 'vue'
import Vuex from 'vuex'
import News from './modules/newsModule';
import Holidays from './modules/holidaysModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    News,
    Holidays
  }
})
