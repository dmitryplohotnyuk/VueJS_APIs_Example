import serverNews from '../../plugins/newsApi';
export default {
    namespaced: true,
    state: {
        country: 'ua',
        category: 'sports',
        news: null,
        error: null
    },
    getters: {
        country: (state) => state.country,
        category: (state) => state.category,
        news: (state) => state.news,
        error: (state) => state.error
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
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state){
            state.error = null;
        }
    },
    actions: {
        LOAD_NEWS: async function (store) {
            let category = store.getters.category;
            let country = store.getters.country;
            let request = 'top-headlines?country=' + country + '&category=' + category;
            try {
                let response = await serverNews.get(request);
                store.commit('SET_NEWS', response.data.articles);
                store.commit('CLEAR_ERROR');
            }
            catch(e) {
                store.commit('SET_ERROR', e.message);
            }
        },
        SET_COUNTRY(store, payload) {
            store.commit('SET_COUNTRY', payload);
            store.dispatch('LOAD_NEWS');
        },
        SET_CATEGORY(store, payload) {
            store.commit('SET_CATEGORY', payload);
            store.dispatch('LOAD_NEWS')
        }
    }
}