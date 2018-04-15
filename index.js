var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({[item]:
 Math.floor(Math.random()*100)});
  console.log('${item} has been added to your cart.');
  return cart;
}

function viewCart() {
  // write your code here
if (cart.length === 0) {
  return console.log("Your shopping cart is empty.");
}
 var string = "In your cart, you have";

if (cart.length === 1){
  string += `$Object.keys(cart[0])} at $$ {cart[0][Object,keys(cart[0])]}.`
} else if (cart.length === 2) {
  string += `${Object.keys(cart[0])} at $$
}
var string = "In your cart, you have";

if (cart.length === 1){
  string += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
} else if (cart.length === 2) {
  string += `` 
   and $(Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
