var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random() *(100 - 1) + 1);
  for (var i = 0; i < item.length; i++) {
  cart.push(`'itemName: ${item[i]}, itemPrice: ${itemPrice[i]}'`)
 }
   return `'${item} has been added to your cart.'`
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

