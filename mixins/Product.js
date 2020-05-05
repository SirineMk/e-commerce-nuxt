

export const Product = {
    methods: {
        calculateDiscount(price, discount) {
            return (price * (1+ (discount/100))).toFixed(2);
        },
        getProductImage(img) {
            return require('@/assets/img/'+img);
        }
    }
};
