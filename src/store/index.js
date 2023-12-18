import {createStore} from 'vuex'

export default createStore({
    state: {
        refName: '',
    },
    getters: {},
    mutations: {
        SET_REF_NAME(state, refName) {
            console.log('mutation', refName)
            state.refName = refName
        }
    },
    actions: {},
    modules: {}
})
