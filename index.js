var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt() {
  return Math.floor((Math.random()+0.01) * Math.floor(100));
}

function addToCart(item) {

 newItem = {[item]:getRandomInt()};
 cart.push(newItem);
 return cart;
}
console.log(addToCart('apples'));
console.log(getCart().length);
console.log(addToCart('bananas'));
console.log(getCart().length);

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
