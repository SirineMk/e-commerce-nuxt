import vuex from 'vuex'
import vue from 'vue'
import home from './home.js'
import menu from "./menu";
import products from "./products";
import cart from "./cart"
import checkout from "./checkout";

vue.use(vuex);

const createStore =() => {
    return new vuex.Store({
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
