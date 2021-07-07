var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// add items to a cart using two key-value pairs


function addToCart(item) {
  //array below, each object in the array has two items in it
  var item_price = Math.floor(Math.random() * Math.floor(100) + 1)
  var item_object = {[item]: item_price}
 
  cart.push(item_object);

  return "${item} has been added to your cart."
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
