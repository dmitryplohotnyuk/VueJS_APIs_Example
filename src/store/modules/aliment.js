import serverAliment from '../../plugins/alimentApi';
export default {
    namespaced: true,
    state: {
        pib: '',
        aliments: null,
        error: null
    },
    getters: {
        pib: (state) => state.pib,
        aliments: (state) => state.aliments,
        error: (state) => state.error
    },
    mutations: {
        SET_PIB(state, payload) {
            state.pib = payload;
        },
        SET_ALIMENTS(state, payload) {
            state.aliments = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAR_ERROR(state){
            state.error = null;
        }
    },
    actions: {
        LOAD_ALIMENTS: async function (store) {
            let pib = store.getters.pib;
            let request = 'aliment?pib=' + pib;
            try{
                let response = await serverAliment.get(request);
                store.commit('SET_ALIMENTS', response.data.aliments);
                store.commit('CLEAR_ERROR');
            }
            catch(e) {
                store.commit('SET_ERROR', e.message);
            }
            
        },
        SET_PIB(store, payload) {
            store.commit('SET_PIB', payload);  
            store.dispatch('LOAD_ALIMENTS');
        }
    }
}