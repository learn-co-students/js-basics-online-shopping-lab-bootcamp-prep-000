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
  //random number between 1 and 100
  var price = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  //assigning key, value for items object
  items['itemPrice'] = price;
  cart.push(items);
  //message indicating item has been added.
  return (`${item} has been added to your cart.`);
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
