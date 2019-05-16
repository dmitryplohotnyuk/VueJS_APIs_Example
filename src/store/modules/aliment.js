import serverAliment from '../../plugins/alimentApi';
export default {
    namespaced: true,
    state: {
        pib: '',
        aliments: null
    },
    getters: {
        pib: (state) => state.pib,
        aliments: (state) => state.aliments
    },
    mutations: {
        SET_PIB(state, payload) {
            state.pib = payload;
        },
        SET_ALIMENTS(state, payload) {
            state.aliments = payload;
        }
    },
    actions: {
        LOAD_ALIMENTS: async function (store) {
            let pib = store.getters.pib;
            let request = 'aliment?pib=' + pib;
            let response = await serverAliment.get(request);
            store.commit('SET_ALIMENTS', response.data.aliments);
        },
        SET_PIB(store, payload) {
            store.commit('SET_PIB', payload);  
            store.dispatch('LOAD_ALIMENTS');
        }
    }
}