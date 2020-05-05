<template>
    <table class="shop_table">
        <thead>
        <tr>
            <th class="product-name">Product</th>
            <th class="product-total">Total</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in cart.items" class="cart_item" :key="item.id">
            <td class="product-name">
                {{ item.name }} <strong class="product-quantity">× {{ item.quantity }}</strong></td>
            <td class="product-total">
                <span class="amount">{{ item.price }}  €</span></td>
        </tr>
        </tbody>
        <tfoot>
        <tr class="cart-subtotal">
            <th>Cart Subtotal</th>
            <td><span class="amount">{{ cart.subTotal }}  €</span>
            </td>
        </tr>
        <tr class="shipping">
            <th>Taxe (20%)</th>
            <td>
                {{ cart.tax }} €
            </td>
        </tr>
        <tr class="order-total">
            <th>Order Total</th>
            <td><strong><span class="amount">{{ cart.total }} € </span></strong></td>
        </tr>
        </tfoot>
    </table>
</template>


<script>

    export default  {
        props : {
            cart : Object
        }
    }
</script>
