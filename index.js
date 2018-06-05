var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

var i=0
function addToCart(item) {
 // write your code here
 i++
 var object = [{itemName: item},{itemPrice: "Math.random(Math.floor())"}]
 return i
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
