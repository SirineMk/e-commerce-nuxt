<template>
  <div>
    <BigTitle :Title="products.name"></BigTitle>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div v-for="product in products.items" :key="product.id" class="col-md-3 col-sm-6">
            <VignetteProduit :shopName="shopName=products.name" :shopId="shopId=products.id" :product="product"></VignetteProduit>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12" >

            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import BigTitle from "~/components/Shop/Header.vue";
import VignetteProduit from "~/components/Shop/VignetteProduit";
import {mapGetters} from "vuex";

export default {
  name: "Shop",
  components: {
    BigTitle,
    VignetteProduit
  },
  data: function(){
    return{
      shopId: [Number],
      shopName: [String]
    }
  },
  computed: {
    ...mapGetters(["products"])
  },
  async fetch() {
    this.shopId = this.$route.params.id;
    return  this.$store.dispatch('getProducts',this.shopId);
  }
};
</script>
<style scoped></style>
