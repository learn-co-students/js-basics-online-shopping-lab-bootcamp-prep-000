var cart = [];

function getCart() {

}

function setCart(c) {
  cart = c;
  return cart;
}
function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function addToCart(item) {
  var newItem = {[item]: randomNumber()};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
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
