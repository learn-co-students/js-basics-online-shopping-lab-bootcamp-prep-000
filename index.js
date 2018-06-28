var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = new Object();
  newItem.itemName = "item";
  newItem.itemPrice = Math.floor(Math.random() * 100);
  cart.push(newItem);
  return `${item} has been added to your cart.`
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
