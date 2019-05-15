import serverNews from '../../plugins/newsApi';
export default {
    namespaced: true,
    state: {
        country: 'ua',
        category: 'sports',
        news: null
    },
    getters: {
        country: (state) => state.country,
        category: (state) => state.category,
        news: (state) => state.news
    },
    mutations: {
        SET_COUNTRY(state, payload) {
            state.country = payload;
        },
        SET_CATEGORY(state, payload) {
            state.category = payload;
        },
        SET_NEWS(state, payload) {
            state.news = payload;
        }
    },
    actions: {
        LOAD_NEWS: async function (store) {
            let category = store.getters.category;
            let country = store.getters.country;
            let request = 'top-headlines?country=' + country + '&category=' + category;
            let response = await serverNews.get(request);
            store.commit('SET_NEWS', response.data.articles);
        },
        SET_COUNTRY({ commit }, payload) {
            commit('SET_COUNTRY', payload);
        },
        SET_CATEGORY({ commit }, payload) {
            commit('SET_CATEGORY', payload);
        }
    }
}