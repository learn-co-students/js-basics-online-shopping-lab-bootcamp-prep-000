var cart = [];

function getCart(name) {
  var object= { itemName: "daikon", itemPrice: Math.floor(Math.random() * (100 - 1 + 1 )) + 1 }
  cart.push(object)
 return cart;
   // return itemName + " has been added to your cart."
}
function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 return itemName + " has been added to your cart."
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
