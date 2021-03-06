
const state = {
    cartDetails: {},
};
const getters = {
    cartDetails(state) {
        return  state.cartDetails;
    }
};
 const actions = {
    addToCart({commit}, payload) {
        return this.$axios.put('/carts/' + payload.id, payload)
            .then((response) => {
                commit('cartUpdated', response.data);

            })
            .catch(error => {
                console.log(error);
            });
    },
    getCart({commit}, payload) {
        return this.$axios.get("/carts/" + payload)
            .then(response => {
                commit('cartDetails', response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

 const mutations = {
    cartUpdated(state, payload) {
        console.log(state,payload)
    },
    cartDetails(state, payload) {
        state.cartDetails = payload
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
