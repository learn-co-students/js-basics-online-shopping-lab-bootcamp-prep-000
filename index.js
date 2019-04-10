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
 var itemName = item;
 var price = Math.floor(Math.random() * 100);
 cart.push({[itemName]: itemName, itemPrice: price});
 console.log(`${itemName} has been added to your cart.`);
 return cart;

}

function viewCart() {
  // write your code here


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
