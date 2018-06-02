
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

  var price = Math.floor(Math.random() * 100)+1 ;
  var items = {itemName: item, itemPrice: price};
  cart.push(items);
  return `${item} has been added to your cart.`
}


function viewCart() {

  if (cart.length === 1 ) { 
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
 if (cart.length === 0) {
   return `Your shopping cart is empty.`
 }
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
