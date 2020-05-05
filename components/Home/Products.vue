<template>
    <div class="single-product-widget">
      <h2 class="product-wid-title">{{ title }}</h2>
      <a href class="wid-view-more">View All</a>
      <template v-for="product in products">
        <div :key="product.id" class="single-wid-product">
          <a href="single-product.html">
            <img
              :src="require('../../assets/img/' + product.imageName)"
              alt
              class="product-thumb"
            />
          </a>
          <h2>
            <a href="single-product.html">{{ product.name }}</a>
          </h2>
          <div class="product-wid-rating">
            <span v-for="star in product.review" :key="star">
              <i class="fa fa-star"></i>
            </span>
            <span v-for="star in 5 - product.review" :key="star">
              <i class="fa fa-star" style="color: gray"></i>
            </span>
          </div>
          <div class="product-wid-price">
            <ins>${{product.price.toFixed(2)}}</ins>
            <del>${{calculateDiscount(product.price, product.discountRate)}}</del>
          </div>
        </div>
      </template>
    </div>
</template>

<script>
    import { Product} from "../../mixins/Product.js";
export default {
    mixins: [Product],
  props: {
    products: Array,
    title: String
  }
};
</script>

<style></style>
