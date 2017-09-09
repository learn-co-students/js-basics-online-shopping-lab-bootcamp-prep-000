var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  return `In your cart, you have`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  return "Sorry, we don't have a credit card on file for you."
}
