<template>
  <div class="product-content-right">
    <div class="product-breadcroumb">
        <router-link to="/">Home</router-link>
        <router-link :to="{ path: '/shop/'+shopId }">{{shopName}}</router-link>
      <a href="">{{ productDetails.name }}</a>
    </div>

    <div class="row">
      <div class="col-sm-6">
        <div class="product-images">
          <div class="product-main-img">
            <img :src="getProductImage(productDetails.imageName)" alt="" />
          </div>

          <div class="product-gallery">
              <img :src="getProductImage(productDetails.imageName)" alt="" />
              <img :src="getProductImage(productDetails.imageName)" alt="" />
              <img :src="getProductImage(productDetails.imageName)" alt="" />
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="product-inner">
          <h2 class="product-name">{{ productDetails.name }}</h2>
          <div class="product-inner-price">
            <ins>${{ productDetails.price.toFixed(2) }}</ins>
            <del
              >${{
                calculateDiscount(
                  productDetails.price,
                  productDetails.discountRate
                )
              }}</del
            >
          </div>

          <form action="" class="cart">
            <div class="quantity">
              <input
                type="number"
                size="4"
                class="input-text qty text"
                title="Qty"
                name="quantity"
               v-model="quantity"
              />
            </div>
            <AddToCart :quantity="quantity" :product="productDetails"></AddToCart>
          </form>

          <div class="product-inner-category">
            <h2>Product Description</h2>
            <p>
              {{productDetails.description}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from "../../mixins/Product";
import {mapGetters} from "vuex";
import AddToCart from "../Cart/AddToCart"

export default {
  mixins: [Product],
  components:{
    AddToCart
  },
  props: {
    productId: [String]
  },
    data: function() {
      return {
          shopName: [String],
          shopId: [Number],
        quantity: [Number]
      }
    },
  computed: {
    ...mapGetters(["productDetails"])
  },
  async fetch() {
    this.shopName = this.$cookie.get('shopName');
    this.shopId = this.$cookie.get('shopId');
    return this.$store.dispatch('getProductDetails',this.productId);

  }
};
</script>
