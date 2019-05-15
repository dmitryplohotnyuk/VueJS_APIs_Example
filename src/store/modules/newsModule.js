import serverNews from '../../plugins/newsApi';
export default {
    state: {
        countryNews: 'ua',
        categoryNews: 'sports',
        news: null
    },
    getters: {
        getCountryNews: (state) => state.countryNews,
        getCategoryNews: (state) => state.categoryNews,
        getNews: (state) => state.news
    },
    mutations: {
        SET_COUNTRY_NEWS(state, payload) {
            state.countryNews = payload;
        },
        SET_CATEGORY_NEWS(state, payload) {
            state.categoryNews = payload;
        },
        SET_NEWS(state, payload) {
            state.news = payload;
        }
    },
    actions: {
        LOAD_NEWS: async function (store) {
            let category = store.getters.getCategoryNews;
            let country = store.getters.getCountryNews;
            let request = 'top-headlines?country=' + country + '&category=' + category;
            let response = await serverNews.get(request);
            store.commit('SET_NEWS', response.data.articles);
        },
        SET_COUNTRY_NEWS({ commit }, payload) {
            commit('SET_COUNTRY_NEWS', payload);
        },
        SET_CATEGORY_NEWS({ commit }, payload) {
            commit('SET_CATEGORY_NEWS', payload);
        }
    }
}