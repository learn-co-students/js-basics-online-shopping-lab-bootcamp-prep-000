var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemName = item;
  let itemPrice = [];
  
  itemPrice.push(Math.floor((Math.random() * 100) + 1));
  
  var itemObject = {itemName: itemName, itemPrice: itemPrice};
  cart.push(itemObject);
  console.log(`${itemName} has been added to your cart.`);
  
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
