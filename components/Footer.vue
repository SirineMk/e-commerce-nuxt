<template>
  <div class="footer-top-area">
    <div class="zigzag-bottom"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="footer-about-us">
            <h2>
              <span>MyStore</span>
            </h2>
            <p>
              SES Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis sunt id doloribus vero quam laborum quas alias dolores
              blanditiis iusto consequatur, modi aliquid eveniet eligendi iure
              eaque ipsam iste, pariatur omnis sint! Suscipit, debitis,
              quisquam. Laborum commodi veritatis magni at?
            </p>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="footer-menu">
            <h2 class="footer-wid-title">Categories</h2>
            <ul>
              <li @click="navigateToShop(cat.productListId, cat.name)" v-for = "cat in categories" :key="cat.id">
                <nuxt-link :to="'/shop/'+cat.productListId">
                <a href="">{{ cat.name }}</a>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="footer-newsletter">
            <h2 class="footer-wid-title">Newsletter</h2>
            <p>
              Sign up to our newsletter and get exclusive deals you wont find
              anywhere else straight to your inbox!
            </p>
            <div class="newsletter-form">
              <form action="#">
                <input type="email" placeholder="Type your email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      categories: [Array]
    },
    methods: {
      navigateToShop(shopId, shopName) {
        this.$cookie.set('shopName', shopName);
        this.$cookie.set('shopId', shopId);
      }
    }
  };
</script>
