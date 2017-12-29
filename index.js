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
 var itemPrice = Math.floor(Math.random() * 100)
 var newItem = {item: itemPrice}
 cart.push(item)
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
