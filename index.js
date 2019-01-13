var cart = [];

function getCart(item) {
return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var price = Math.floor(Math.random()*100)
 cart.push(new Object({ itemName: itemName, itemPrice: price}))
 console.log("${item} has been added to your cart.")
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
