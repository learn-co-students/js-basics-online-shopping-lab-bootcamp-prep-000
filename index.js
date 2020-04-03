var cart = [];

function getCart() {
   return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  
 let price = Math.floor(100*(Math.random()));
 let cartItem = { [item]: price };
 
 cart.push(cartItem);
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
