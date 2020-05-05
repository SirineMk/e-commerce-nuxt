<template>
    <button class="add_to_cart_button" type="submit" @click="addToCart()">
        Add to cart
    </button>
</template>
<script>
    import {mapGetters} from "vuex";
    export default {
        props : {
            product : Object,
            quantity: Number
        },
        computed: {
            ...mapGetters(["cartDetails"])
        },
        methods : {
            addToCart() {
                const cartId = this.$cookie.get('cartId');
                this.$store.dispatch('getCart',cartId);
                this.cartDetails.total = this.cartDetails.total+this.product.price*this.quantity;
                this.cartDetails.subTotal = this.cartDetails.subTotal+this.product.price*this.quantity;
                const cart = this.cartDetails;
                if (!this.quantity) {
                    this.quantity = 1;
                    this.product['quantity'] = this.quantity;
                } else {
                    this.product['quantity'] = this.quantity;
                }

                cart.items.push(this.product);
                this.$store.dispatch('addToCart', cart)
                alert("done!");
            }
        },
    }
</script>