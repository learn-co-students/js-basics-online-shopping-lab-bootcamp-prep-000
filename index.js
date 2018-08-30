var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) { 
 var cart = {itemName: `${name}`,
 itemPrice: `${price}`};
 var price = Math.floor(Math.random() * 101);
 return (`${item}` + ' has been added to your cart.');
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
