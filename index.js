var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = {itemName: item};
  //random number betwee 1 and 100
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  //assigning key, value for item object
  items['itemPrice'] = price;
  cart.push(items);
  //return cart;
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
