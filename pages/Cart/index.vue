<template>
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">


                <div class="col-md-12">
                    <div class="product-content-right">
                        <div class="woocommerce">
                            <cart-sum :cart="cartDetails"></cart-sum>
                            <div class="cart-collaterals">
                                <cross-sell ></cross-sell>
                                <cart-total :cart="cartDetails"></cart-total>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import CartSum from "~/components/Cart/CartSum.vue";
    import CrossSell from "~/components/Cart/CrossSell.vue";
    import CartTotal from "~/components/Cart/CartTotal.vue";
    import {mapGetters} from "vuex";

    export default {
        name: "Cart",
        components:{
            CartSum,
            CrossSell,
            CartTotal
        },
        data: function(){
          return{
              cartId: [String]
          }
        },
        computed: {
            ...mapGetters(["cartDetails"])
        },
        created() {
            this.cartId = this.$cookie.get('cartId');
            this.$store.dispatch('getCart',this.cartId);
        }
    }

</script>