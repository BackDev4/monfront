import { createStore } from 'vuex'
import contacts from "@/store/modules/contacts";
import reviews from "@/store/modules/reviews";

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
    modules: {
        contacts,
        reviews,
    }
})
