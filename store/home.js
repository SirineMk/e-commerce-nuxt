const state = {
    topSellersProducts: [],
    topNewProducts: []
};
const getters = {
    topSellersProducts(state) {
        return  state.topSellersProducts;
    },
    topNewProducts(state) {
        return state.topNewProducts;
    }
};

const actions = {
    getTopSellers({ commit }) {
        return axios.get("/top-sellers-products")
            .then((response) => {
                commit('topSeller', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    getTopNew({ commit }) {
        return axios.get("/top-new-products")
            .then((response) => {
                commit('topNew', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
};

const mutations = {
    topSeller(state, payload) {
        state.topSellersProducts = payload
    },
    topNew (state, payload){
        state.topNewProducts = payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};