var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
  var newObj = {};
  var itemName = `itemName:"${item},`;
  var itemPrice =` itemPrice: ${Math.floor(100*Math.random())}`;
  newObj[itemName] = itemPrice;
  cart.push(newObj);
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

console.log(addToCart('bananas'))
console.log(cart)
