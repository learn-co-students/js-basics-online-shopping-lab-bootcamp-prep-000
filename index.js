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
}

function viewCart() {
  // write your code here
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

function getCart(){

return cart;
}
function addToCart(item){
let price = Math.floor(Math.random()*100);
cart.push({'{item: price}'});
console.log('${item} has been added to your cart.');
return cart;
}
