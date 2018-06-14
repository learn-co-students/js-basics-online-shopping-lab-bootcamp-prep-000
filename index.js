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
else if (d === 1) {
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
}

else {
  var e = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
  var f
  for (f=1; f<d-1; f++) {
    e += `, ${cart[f].itemName} at $${cart[f].itemPrice}`
  }
  e += `, and ${cart[d-1].itemName} at $${cart[d-1].itemPrice}.`
  return e
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
