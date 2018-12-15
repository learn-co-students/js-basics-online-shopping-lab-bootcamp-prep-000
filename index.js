var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*

Takes the argument, "item" and stores in variable "itemName".
Push random prices into an empty array.

itemObject has two keys: itemName and itemPrice with value
of itemName(which holds the value of the "item" argument and
itemPrice which parses an element in the itemPrice array).

itemObject is pushed to the empty "cart" array and returns
a message stating that "item" has been added to the cart.

*/

function addToCart(item) {
  let itemName = item;
  let itemPrice = [];
  
  itemPrice.push(Math.floor((Math.random() * 100) + 1));
  
  var itemObject = {itemName: itemName, itemPrice: parseInt(itemPrice)};
  cart.push(itemObject);
  return `${itemName} has been added to your cart.`;
  
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
