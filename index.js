var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

/*

Takes the argument, "item" and stores in variable "name".
Push random prices into an empty array, "price".

itemObject has two keys: itemName and itemPrice with value
of name (which holds the value of the "item" argument) and
price (which parses an element in the array).

itemObject is pushed to the empty "cart" array and returns
a message stating that "item" has been added to the cart.

*/

function addToCart(item) {
  let name = item;
  let price = [];
  
  price.push(Math.floor((Math.random() * 100) + 1));
  var itemObject = {itemName: name, itemPrice: parseInt(price)};
  cart.push(itemObject);
  return `${name} has been added to your cart.`;
  
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
