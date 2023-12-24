import { getReviews } from "@/api";
export default {
    namespaced: true,
    state: {
        reviews: {}
    },
    actions: {
        getReviews({ commit }, page = 1) {
            getReviews(page).then(response => commit('SET_REVIEWS', response))
        },
    },
    mutations: {
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews
        },
    }
}
