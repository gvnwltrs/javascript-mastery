// Importing module 
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; 

import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

ShoppingCart.addToCart('water', 5);

console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
console.log(`What's in my cart: `, ShoppingCart.cart );

