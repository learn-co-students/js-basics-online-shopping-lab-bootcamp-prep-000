var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  // console.log('cart');
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
  // var it = {item: itemPrice};
 // write your code here
 cart.push({item: itemPrice});
 console.log(`${item} has been added to your cart.`);
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
