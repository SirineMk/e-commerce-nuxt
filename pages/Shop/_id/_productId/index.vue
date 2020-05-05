<template>
    <div class="single-product-area">
        <div class="zigzag-bottom"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <recently-viewed></recently-viewed>
                    <OtherBrands></OtherBrands>
                </div>
                <div class="col-md-8">
                    <fiche-produit :productId = "productId"></fiche-produit>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FicheProduit from '~/components/Product/FicheProduit.vue';
    import OtherBrands from '~/components/Product/OtherBrands.vue';
    import RecentlyViewed from '~/components/Product/RecentlyViewed.vue';

    export default {
        name: "Shop",
        data: function(){
            return {
                productId: [Number]
            }
        },
        components: {
            FicheProduit,
            OtherBrands,
            RecentlyViewed
        },
        created() {
            this.productId =  this.$route.params.productId;
        }
    };
</script>
