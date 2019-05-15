import serverHolidays from '../../plugins/holidaysApi';
export default {
    state: {
        countryHolidays: 'ua',
        holidays: null
    },
    getters: {
        getCountryHolidays: (state) => state.countryHolidays,
        getHolidays: (state) => state.holidays
    },
    mutations: {
        SET_COUNTRY_HOLIDAYS(state, payload) {
            state.countryHolidays = payload;
        },
        SET_HOLIDAYS(state, payload) {
            state.holidays = payload;
        }
    },
    actions: {
        LOAD_HOLIDAYS: async function (store) {
            let country = store.getters.getCountryHolidays;
            let request = 'holidays?country=' + country;
            let response = await serverHolidays.get(request);
            store.commit('SET_HOLIDAYS', response.data.holidays);
        },
        SET_COUNTRY_HOLIDAYS({ commit }, payload) {
            commit('SET_COUNTRY_HOLIDAYS', payload);  
        }
    }
}