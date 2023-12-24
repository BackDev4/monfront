import { getContacts, getDataFromLS, setDataToLS } from "@/api";

export default {
  namespaced: true,
  state: {
    contacts: {}
  },
  actions: {
    getContacts({ commit }) {
      const key = '/api/contact'
      const dataHash = getDataFromLS(key)
      commit('SET_CONTACTS', dataHash)

      getContacts().then(response => {
        commit('SET_CONTACTS', response)
        setDataToLS(key, response)
      })
    }
  },
  mutations: {
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts
    }
  }
}
