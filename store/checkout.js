const state = {
    customer: {
        civility: '',
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        orderNotes: '',
        billingAddress: {
            address1: '',
            address2: '',
            city: '',
            country: '',
            postCode: '',
        },
        shippingAddress: {
            civility: '',
            firstName: '',
            lastName: '',
            companyName: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            postCode: ''
        }

    },
    payment : {mode: ''}
};

const getters = {
    customer(state) {
        return state.customer
    },
    payment(state) {
        return state.payment
    },
};

const actions = {
    submitCheckout({commit}, payload) {
        return axios.post('/orders', payload)
            .then((response) => {
                commit('orderSubmitted', response.data);

            })
            .catch(error => {
                throw new Error(error);
            });
    }
};

const mutations = {
    orderSubmitted(state, payload) {
        console.log('order created submitted'+state+payload);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
