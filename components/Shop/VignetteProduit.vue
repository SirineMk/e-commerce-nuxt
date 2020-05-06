<template>
  <div class="single-shop-product">
    <div class="product-upper">
      <img :src="getProductImage(product.imageName)" alt />
    </div>
    <h2>
      <nuxt-link :to="'/shop/' + shopId + '/' + product.id"><a href @click="navigateToProduct(product.id)">{{product.name}}</a></nuxt-link>
    </h2>
    <div class="product-carousel-price">
      <ins>${{ product.price.toFixed(2) }}</ins>
      <del>${{calculateDiscount(product.price, product.discountRate)}}</del>
    </div>

    <div class="product-option-shop">
      <add-to-cart :quantity="quantity=1" :product="product"></add-to-cart>
    </div>
  </div>
</template>

<script>
  import { Product} from "../../mixins/Product";
  import AddToCart from "../Cart/AddToCart"

  export default {
    mixins:[Product],
    components: {
      AddToCart
    },
    props:{
      product: [Object],
      shopId: [Number],
      shopName: [String]
    },
    created() {
      this.shopName = this.$cookie.get('shopName');
    },
    methods: {
      navigateToProduct(productId) {
        this.$cookie.set('productId', productId);
      }
    }
  };
</script>>
