var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var a = Math.floor(Math.random() * 100) + 1
 var b = {itemName: item, itemPrice: a}
 cart.push(b)
 return `${item} has been added to your cart.`
}

function viewCart() {
  
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
