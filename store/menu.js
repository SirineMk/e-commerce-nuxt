
const state = {
    categories: [],
};

const getters = {
    categories(state) {
        return state.categories;
    }
};

const actions = {
    getCategories({ commit }) {
        return this.$axios.get('/categories')
            .then((response) => {
                commit('categories', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const mutations = {
    categories(state, payload) {
        state.categories = payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
