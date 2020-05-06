
const state = {
    products : [],
    productDetails: {}
};

const getters = {
    products(state) {
        return state.products
    },
    productDetails(state){
        return state.productDetails
    }
};

const actions = {
    getProducts({commit}, payload) {
        return this.$axios.get('products-lists/' + payload)
            .then((response) => {
                commit('Products', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    getProductDetails({commit}, payload) {
        return this.$axios.get("/products/" + payload)
            .then(response => {
                commit('productDetails', response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};

const mutations = {
    Products(state, payload) {
        state.products = payload
    },
    productDetails (state, payload) {
        state.productDetails = payload
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
