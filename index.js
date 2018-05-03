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
 function randomNumber()
 {
   var number = Math.floor(Math.random() * Math.floor(100) + 1);
   return number;
 }
 var addition = {itemName: `${item}`, itemPrice: `${randomNumber}`};
 cart.push(addition);
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
