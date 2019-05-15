import serverHolidays from '../../plugins/holidaysApi';
export default {
    namespaced: true,
    state: {
        country: 'ua',
        holidays: null
    },
    getters: {
        country: (state) => state.country,
        holidays: (state) => state.holidays
    },
    mutations: {
        SET_COUNTRY(state, payload) {
            state.country = payload;
        },
        SET_HOLIDAYS(state, payload) {
            state.holidays = payload;
        }
    },
    actions: {
        LOAD_HOLIDAYS: async function (store) {
            let country = store.getters.country;
            let request = 'holidays?country=' + country;
            let response = await serverHolidays.get(request);
            store.commit('SET_HOLIDAYS', response.data.holidays);
        },
        SET_COUNTRY({ commit }, payload) {
            commit('SET_COUNTRY', payload);  
        }
    }
}