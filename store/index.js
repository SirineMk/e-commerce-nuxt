import Vuex from 'Vuex'

const createStore =() => {
    return new Vuex.Store({
        state:{
            mainCart: {}
          },
          modules: {
            home,
            menu,
            products,
            cart,
            checkout
          }
    });
}

export default createStore;