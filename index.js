var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var a = Math.floor(Math.random() * 100) + 1
 var b = {itemName: item, itemPrice: a}
 cart.push(b)
 return `${item} has been added to your cart.`
}

function viewCart() {
var d = cart.length
if (d === 0) {
  return "Your shopping cart is empty."
}
else {
  var e = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  
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
