<template>
  <div class="header">
    <div class="site-branding-area">
      <div class="row">
        <div class="col-sm-3">
          <div class="logo" style="    width: 100px; height: 100px;">
            <h1>
              <router-link to="/"><img src="../assets/img/logo.png"/></router-link>
            </h1>
          </div>
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            style="margin-top: 40px; width: 75%"
            placeholder="Search products..."
          />
          <input type="button" value="Search" />
        </div>

        <div class="col-sm-3">
          <router-link to="/cart">
          <div class="shopping-item">
            <a href=""
              >Cart : <span class="cart-amunt">{{cartTotal}} €</span>
              <i class="fa fa-shopping-cart"></i>
              <span class="product-count">{{nbProducts}}</span></a
            >
          </div>
          </router-link>
        </div>
      </div>
      <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    </div>

    <div class="mainmenu-area">
      <div class="container">
        <div class="row">
          <div class="navbar">
            <ul class="nav navbar-nav navbar-expand">
              <li class="active">
                <router-link to="/" tag="li" active-class="active" exact
                  ><a>Home</a></router-link
                >
              </li>

              <li
                @click="navigateToShop(cat.productListId, cat.name)"
                v-for="cat in categories"
                :key="cat.id"
              >
                <nuxt-link :to="'/shop/'+cat.productListId">
                <a href="">{{ cat.name }}</a>
                </nuxt-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: [Array],
    cartTotal: [Number],
    nbProducts: [Number]
  },
 /* data: function(){
    return {
      cartTotal: [String]
    }
  },*/
  methods: {
    navigateToShop(shopId, shopName) {
      this.$cookie.set('shopName', shopName);
      this.$cookie.set('shopId', shopId);
    }
  },
  /*computed: {
    cartTotal(){
      if (this.$cookie.get('cartTotal')){
        return this.$cookie.get('cartTotal');
      } else {
        return 0;
      }
    }
  },
 /* created() {
      if (this.$cookie.get('cartTotal') === undefined){
        this.cartTotal = 0;
      } else {
        this.cartTotal = this.$cookie.get('cartTotal');
      }

  }*/
};
</script>

<style scoped></style>
