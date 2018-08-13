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
 var itemNameAndPrice = {itemName: [item], itemPrice: Math.floor((Math.random()*100)+1)}
 cart.push(itemNameAndPrice);
 return `${item} has been added to your cart.`
 debugger
}

function viewCart() {
  // write your code here
  var cartContents = [];
  for (var i = 0; i < cart.length; i++) {
    
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
