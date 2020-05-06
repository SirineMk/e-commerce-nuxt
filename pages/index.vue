<template>
  <div class="home">
    <header></header>
    <Carousel></Carousel>
    <PromoArea></PromoArea>
    <BrandsArea :categories="categories"></BrandsArea>
    <div class="product-widget-area">
      <div class="zigzag-bottom"></div>
      <div class="container" style="margin-left: 0px; margin-right: 0px">
        <div class="row">
          <div class="col-md-4"  >
            <Products key="top-seller" :title="title='Top Seller'" :products="topSellersProducts"></Products>
          </div>
          <div class="col-md-4">
            <RecentlyViewed></RecentlyViewed>
          </div>
          <div class="col-md-4">
            <Products key="top-new" :title="title='Top New'" :products="topNewProducts"></Products>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Home/Carousel.vue";
import PromoArea from "~/components/Home/PromoArea.vue";
import BrandsArea from "~/components/Home/BrandsArea.vue";
import RecentlyViewed from "~/components/Home/RecentlyViewed.vue";
import Products from "~/components/Home/Products";
import {mapGetters} from "vuex";

export default {
  components: {
    Carousel,
    PromoArea,
    BrandsArea,
    RecentlyViewed,
    Products
  },
  computed: {
    ...mapGetters(["topSellersProducts", "topNewProducts", "categories"])
  },
  created() {
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getTopSellers');
    this.$store.dispatch('getTopNew');
  }
};
</script>
