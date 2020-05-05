<template>
  <div class="single-sidebar">
    <h2 class="sidebar-title">Others brands</h2>
    <ul>
      <li @click="navigateToShop(cat.productListId, cat.name)" v-for="cat in categories" :key="cat.id">
        <a href=""> {{cat.name}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  methods: {
    navigateToShop(shopId, shopName) {
      this.$cookie.set('shopName', shopName);
      this.$cookie.set('shopId', shopId);
      this.$router.push("/shop/" + shopId);
    }
  },
  computed: {
    ...mapGetters(["categories"])
  },
  created() {
    this.$store.dispatch('getCategories');
  }
};
</script>
