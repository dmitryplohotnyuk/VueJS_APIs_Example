import serverHolidays from '../../plugins/holidaysApi';
export default {
    namespaced: true,
    state: {
        country: 'ua',
        holidays: null,
        error: null
    },
    getters: {
        country: (state) => state.country,
        holidays: (state) => state.holidays,
        error: (state) => state.error
    },
    mutations: {
        SET_COUNTRY(state, payload) {
            state.country = payload;
        },
        SET_HOLIDAYS(state, payload) {
            state.holidays = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state){
            state.error = null;
        }
    },
    actions: {
        LOAD_HOLIDAYS: async function (store) {
            let country = store.getters.country;
            let request = 'holidays?country=' + country;
            try {
                let response = await serverHolidays.get(request);
                store.commit('SET_HOLIDAYS', response.data.holidays);
                store.commit('CLEAR_ERROR');
            }
            catch(e) {
                store.commit('SET_ERROR', e.message);
            } 
        },
        SET_COUNTRY(store, payload) {
            store.commit('SET_COUNTRY', payload);  
            store.dispatch('LOAD_HOLIDAYS');
        }
    }
}