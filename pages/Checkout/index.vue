<template>
  <div>
    <big-title :Title="'Checkout'"></big-title>
    <div class="single-product-area">
      <div class="zigzag-bottom"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="product-content-right">
              <div class="woocommerce">
                <form enctype="multipart/form-data" action="#" class="checkout" method="post" name="checkout">
                  <user-form></user-form>
                  <h3 id="order_review_heading">Your order</h3>

                  <div id="order_review" style="position: relative;">
                    <order-sum :cart="cart"></order-sum>
                    <payment></payment>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BigTitle from "~/components/Shop/Header.vue";
  import UserForm from "~/components/Checkout/UserForm.vue";
  import OrderSum from "~/components/Checkout/OrderSum.vue";
  import Payment from "~/components/Checkout/Payment.vue";

  export default {
    name: "Checkout",
    components:{
      BigTitle,
      UserForm,
      OrderSum,
      Payment
    },
    computed: {
      cart(){
        return this.$store.state.mainCart;
      }
    }
  };
</script>
