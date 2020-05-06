<template>
  <div>
    <table cellspacing="0" class="shop_table cart">
      <thead>
        <tr>
          <th class="product-remove">&nbsp;</th>
          <th class="product-thumbnail">&nbsp;</th>
          <th class="product-name">Product</th>
          <th class="product-price">Price</th>
          <th class="product-quantity">Quantity</th>
          <th class="product-subtotal">Total</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="product in cart.items" :key="product.id" class="cart_item">
          <td class="product-remove">
            <a title="Remove this item" class="remove" href="#">×</a>
          </td>

          <td class="product-thumbnail">
            <a href="single-product.html"
              ><img
                width="145"
                height="145"
                alt="poster_1_up"
                class="shop_thumbnail"
                :src="getProductImage(product.imageName)"
            /></a>
          </td>

          <td class="product-name">
            <a href="single-product.html">{{product.name}}</a>
          </td>

          <td class="product-price">
            <span class="amount">{{product.price}}€</span>
          </td>

          <td class="product-quantity">
            <div class="quantity buttons_added">
              <input type="button" class="minus" value="-" />
              <input
                type="number"
                size="4"
                class="input-text qty text"
                title="Qty"
                :value="product.quantity"
                min="0"
                step="1"
              />
              <input type="button" class="plus" value="+" />
            </div>
          </td>

          <td class="product-subtotal">
            <span class="amount">{{getTotal(product.price,product.quantity)}} €</span>
          </td>
        </tr>

        <tr >
          <td class="actions" colspan="6">
            <nuxt-link to='/checkout'>
            <input
              type="button"
              @click="navigateToCheckout()"
              value="Checkout"
              name="proceed"
              class="checkout-button button alt wc-forward"
            />
            </nuxt-link>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>
<script>
import { Product } from "../../mixins/Product";
export default {
  mixins: [Product],
    props: {
      cart: [Object]
    },
  methods:{
    getTotal(price,qte){
      return price*qte;
    },
    navigateToCheckout(){
      this.$store.state.mainCart = this.cart;
    }
  }
};
</script>
