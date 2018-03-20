var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var randPrice = parseInt(100*Math.random());
 var itemPrice = {itemName: item, itemPrice: randPrice};
 cart.push(itemPrice);
 return `${item} has been added to your cart.`;
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


//This code test runs the program
addToCart('bananas');
addToCart('apples');