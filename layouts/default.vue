<template>
  <div id="app">
    <app-header :nbProducts="nbProducts" :cartTotal="cartTotal" :categories="categories"></app-header>
    <nuxt :categories="categories" />
    <app-footer :categories="categories"></app-footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import {mapGetters} from "vuex";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer
  },
  data: function(){
    return{
      cartTotal: '',
      nbProducts: 0
    }
  },
  computed: {
    ...mapGetters(["categories","cartDetails"])
  },
  created() {
    this.$store.dispatch('getCategories');
    console.log(this.cartDetails);
    if (document.cookie.indexOf('cartId') > -1) {
      //cookie exists
      this.$store.dispatch('getCart',this.$cookie.get('cartId'));
      this.cartTotal =this.cartDetails.total;
      this.nbProducts = this.cartDetails.items.length;
      this.$cookie.set('cartTotal',this.cartDetails.total);
    } else {
      this.cartTotal = '0';
      this.$cookie.set('cartId','xr7HaIK');

    }
  }
};
</script>

<style>
</style>
