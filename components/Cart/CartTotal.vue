<template>
    <div class="cart_totals ">
        <h2>Cart Totals</h2>

        <table cellspacing="0">
            <tbody>
            <tr class="cart-subtotal">
                <th>Cart Subtotal</th>
                <td><span class="amount">{{cart.subTotal}} €</span></td>
            </tr>

            <tr class="shipping">
                <th>Taxe (20%)</th>
                <td>{{cart.tax}} €</td>
            </tr>

            <tr class="order-total">
                <th>Order Total</th>
                <td><strong><span class="amount">{{cart.total}} €</span></strong> </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            cart: [Object]
        }
    };
</script>
