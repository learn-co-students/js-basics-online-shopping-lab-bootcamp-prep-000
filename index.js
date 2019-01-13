var cart = [];

function getCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push(new Object({[item]:price}))
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
// item.each do |item|
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
