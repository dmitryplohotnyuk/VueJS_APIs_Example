import Vue from 'vue'
import Vuex from 'vuex'
import server from './plugins/axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: 'ua',
    category: 'sports',
    news: null
  },
  getters: {
    getCountry: (state) => state.country,
    getCategory: (state) => state.category,
    getNews: (state) => state.news
  },
  mutations: {
    SET_COUNTRY(state, payload){
      state.country = payload;
    },
    SET_CATEGORY(state, payload){
      state.category = payload;
    },
    SET_NEWS(state, payload){
      state.news = payload;
    }
  },
  actions: {
    LOAD_NEWS: async function(store){
      let category = store.getters.getCategory;
      let country = store.getters.getCountry;
      let request = 'top-headlines?country=' + country + '&category=' + category;
      let response = await server.get(request);
      store.commit('SET_NEWS', response.data.articles);
    },
    SET_COUNTRY({commit}, payload) {
      commit('SET_COUNTRY', payload);
    },
    SET_CATEGORY({commit}, payload) {
      commit('SET_CATEGORY', payload);
    }
  }
})
