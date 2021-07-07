var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var items = { itemName: [], itemPrice: [], };
  var price = (Math.random() * 100 + 1);
  var itemPrice = price;
  
  Object.assign({}, items, { itemName: [item] }, itemPrice, { itemPrice: [price] });
 
  items;
  
  [items, ...cart];
  return [...cart, items], '"${itemname} has been added to your cart"';
  
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
