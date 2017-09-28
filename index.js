
var cart = []

function getCart(itemName) {
    var itemPrice = Math.floor(Math.random() * 100 + 1);
    var obj = { [itemName] : itemPrice }
    console.log(`${itemName} has been added to your cart.`);
    return cart.push(Object.assign({}, obj, itemName))
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
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
