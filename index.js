var cart = [];

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
  var itm = new Object({itemName: item, itemPrice: getRandomInt()})
  cart.push(itm)
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
